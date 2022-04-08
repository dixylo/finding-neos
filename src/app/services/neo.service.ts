import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeoService {
  // apiUrl: string = 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=PqNJAA3T8cqEhBGe8XwQU5vezxRGlP1R5LcLwVDo';
  apiUrl: string = 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=DEMO_KEY';

  constructor(private http: HttpClient) { }

  getNeos(url?: string): Observable<any> {
    const apiUrl = url || this.apiUrl;
    return this.http.get<any>(apiUrl);
  }

  getNeo(id: string): Observable<any> {
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`;
    return this.http.get<any>(apiUrl);
  }
}
