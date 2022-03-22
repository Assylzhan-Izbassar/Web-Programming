import { Component, OnInit } from '@angular/core';
import {Album, ALBUMS} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album?: Album;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    // const id:number = Number(this.route.snapshot.paramMap.get('id'));
    // this.album = ALBUMS.find((x) => x.id === id);

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.album = this.albumsService.getAlbum(id);
    });
  }

  goBack() {
    this.location.back();
  }
}
