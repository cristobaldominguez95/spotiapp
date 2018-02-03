import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }

}
