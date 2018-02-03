import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private baseUrl: string = 'https://api.spotify.com';
  private token: string = 'BQB286kvt_rd743M0n6N2UCGOplgZ0s1KvGvopOuPl-bTPkhNGNMyTshokozlR3esPpjn7AUpIH1_qP4t48';

  constructor(private httpClient: HttpClient) { }

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
