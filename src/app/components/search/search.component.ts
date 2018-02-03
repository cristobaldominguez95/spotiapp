import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  search: string = '';
  artists: Object[];

  constructor(private spotifyService: SpotifyService) { }
  
  searchArtist(): void {
    if (this.search.length == 0) {
      return;
    }
    this.spotifyService.getArtists(this.search).subscribe(data => {
      this.artists = data;
    });
  }

}
