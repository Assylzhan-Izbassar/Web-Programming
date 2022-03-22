import { Injectable } from '@angular/core';
import {Album, ALBUMS, Cart} from "./models";
import { Observable, of} from 'rxjs';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Cart[]> {
    // return of(ALBUMS);
    return this.client.get<Cart[]>('https://dummyjson.com/carts');
  }

  getAlbum(id: number) {
    let tempAlbum;

    this.getAlbums().subscribe((album) => {
      tempAlbum = (album as Album[]).find((x) => x.id === id);
    });

    return tempAlbum;
  }
}
