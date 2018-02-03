import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private baseUrl: string = 'https://api.spotify.com/v1';
  private token: string = 'BQB_tF-0-Q5U5cT8jwznWkLRUlZgHDLe3QtbHkUPf0DPNkVcow66kKaRuvw2XhtG9QzpwULvdxSIB5AVtLo';

  constructor(private httpClient: HttpClient) { }

  getArtists(artist: string) {
    let url = `${this.baseUrl}/search?query=${artist}&type=artist&limit=20`;
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.httpClient.get(url, { headers }).map((data: any) => {
      return data.artists.items;
    });
  }

  getArtist(id: string) {
    let url = `${this.baseUrl}/artists/${id}`;
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.httpClient.get(url, { headers });
  }

  getTopTracks(id: string) {
    let url = `${this.baseUrl}/artists/${id}/top-tracks?country=ES`;
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.httpClient.get(url, { headers });
  }

}
