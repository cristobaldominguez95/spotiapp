import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private baseUrl: string = 'https://api.spotify.com';
  private token: 'BQDHVNV2_AcAYVBbFytmzSC9rfJVvs_Zyp4gBSyX76g5A0GD-nPr_HenJ9_6mjS5WKac1MK3hvL_ue-4Xro';

  constructor(private httpClient: HttpClient) {
    console.log('servicio funcionando');
  }

  getArtists() {
    let url = `${this.baseUrl}/v1/search?query=Metallica&type=artist&limit=20`;
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.httpClient.get(url, { headers }).map((data: any) => {
      return data.artists.items;
    });
  }

}
