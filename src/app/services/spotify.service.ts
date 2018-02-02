import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private baseUrl: string = 'https://api.spotify.com';
  private token: string = 'BQDgTrDZ4YGPWyoKy_XyS9OkZwJvyeHYmIhbWI-TCjn2IepXINsd1pOlmAhiTGQqKWcNZT8rOdDMDD3cVi8';

  constructor(private httpClient: HttpClient) {
    console.log('servicio funcionando');
  }

  getArtists(artist: string) {
    let url = `${this.baseUrl}/v1/search?query=${artist}&type=artist&limit=20`;
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.httpClient.get(url, { headers }).map((data: any) => {
      return data.artists.items;
    });
  }

}
