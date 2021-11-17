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
     return this.http.get('https://raw.githubusercontent.com/dmillwalla/Dr_Melfi/master/actor.csv?token=AENDH2VCKXUCEWBWF4SP7T3BTTYPC', {responseType: 'text'})
  }

  getTvList() {
    console.log('Get list of TV')
    return this.http.get('https://raw.githubusercontent.com/dmillwalla/Dr_Melfi/master/tv.csv?token=AENDH2QX3B6IEDYT2ZHROS3BTYEPC', {responseType: 'text'})
  }

  getMovieList() {
    console.log('Get list of Movies')
    return this.http.get('https://raw.githubusercontent.com/dmillwalla/Dr_Melfi/master/movie.csv?token=AENDH2VJR7PF4XSAEYCTWUDBTYENQ', {responseType: 'text'})
  }
}
