import { Component, OnInit } from '@angular/core';
import {Album, Cart} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums?: Album[];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe((albums) => {
      // this.albums = albums;
      console.log(albums);
    });
  }
}
