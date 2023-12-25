import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  postId!: number
  postUrl!: SafeResourceUrl;
  previousUrl!: SafeResourceUrl;
  nextUrl!: SafeResourceUrl;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    // Retrieve the post ID from the route parameters
    this.route.params.subscribe((params) => {
      this.postId = parseInt(params['id']);
      this.postId = this.postId < 1? 1 : this.postId;
      
      this.postUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`./assets/${this.postId}/${this.postId}.html`);

      let prevPostId: number = this.postId <= 1? 1 : this.postId - 1;
      let nextPostId: number = this.postId + 1;

      this.previousUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/${prevPostId}`);
      this.nextUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/${nextPostId}`);
    
    });
  }
}
