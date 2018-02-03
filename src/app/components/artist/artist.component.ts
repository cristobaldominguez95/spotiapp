import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: Object = {};
  topTracks: Object[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.spotifyService.getArtist(params.id).subscribe(artist => {
        this.artist = artist;
      });
      this.spotifyService.getTopTracks(params.id).subscribe((topTracks: any) => {
        this.topTracks = topTracks.tracks;
      });
    });
  }

}
