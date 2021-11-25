import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actor } from '../Class/actor';

@Injectable({
  providedIn: 'root'
})
export class EntityPullService {

  constructor(private http: HttpClient) { }

  getActorList() {
    console.log('Get list of Actors')
     return this.http.get('https://raw.githubusercontent.com/dmillwalla/Dr_Melfi/master/actor.csv?token=AENDH2QV6EZUMAI33UZ2SYLBU7PIQ', {responseType: 'text'})
  }

  getTvList() {
    console.log('Get list of TV')
    return this.http.get('https://raw.githubusercontent.com/dmillwalla/Dr_Melfi/master/tv.csv?token=AENDH2RGLLWD56WVHMY6PKTBU7PZQ', {responseType: 'text'})
  }

  getMovieList() {
    console.log('Get list of Movies')
    return this.http.get('https://raw.githubusercontent.com/dmillwalla/Dr_Melfi/master/movie.csv?token=AENDH2X6F7AI3EJIMMPTBMLBU7PXE', {responseType: 'text'})
  }
}
