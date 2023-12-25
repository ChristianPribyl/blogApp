import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DirectoryServiceService } from '../../directory-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  postId!: number
  postUrl!: SafeResourceUrl | null;
  previousUrl!: SafeResourceUrl;
  nextUrl!: SafeResourceUrl;
  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private directory: DirectoryServiceService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.postUrl = this.sanitizer.bypassSecurityTrustResourceUrl('error.html');
    this.route.params.subscribe((params) => {
      this.postId = parseInt(params['id']);
      if (isNaN(this.postId)) {
        this.postId = 0;
      }
      this.updateNavigation();
    });
  }

  updateNavigation(): void {
    this.directory.getLatestPost().subscribe(
      (latestPostId) => {
        this.postId = this.postId === 0 ? latestPostId : this.postId;
        this.postId = this.postId < 1 ? 1 : this.postId;
        this.postId = this.postId > latestPostId ? latestPostId : this.postId;

        let prevPostId: number = this.postId <= 1 ? 1 : this.postId - 1;
        let nextPostId: number = this.postId >= latestPostId ? latestPostId : this.postId + 1;

        this.previousUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/${prevPostId}`);
        this.nextUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/${nextPostId}`);

        this.postUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `./assets/${this.postId}/${this.postId}.html`
        );

        this.router.navigate(["/", this.postId]);

      }
    )
  }
}
