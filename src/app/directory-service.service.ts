import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

const directoryFile: string = 'assets/directory.json';

@Injectable({
  providedIn: 'root'
})
export class DirectoryServiceService {

  constructor(private http: HttpClient) { }

  getLatestPost(): Observable<number> {
    return this.http.get<any>(directoryFile).pipe(
      map(data => data["latest"] as number));
  }

}
