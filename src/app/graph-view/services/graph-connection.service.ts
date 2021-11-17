import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import { Actor } from '../Class/actor';

@Injectable({
  providedIn: 'root'
})

export class GraphConnectionService {



  constructor(private http: HttpClient) { }

  getActorsDetails() {
    console.log('Actors function is running');
     return this.http.get<any>('https://europe-west1-reactdev-316210.cloudfunctions.net/get_actor_matrix?message=ppl%3A3')
  }

  getEntertainmentDetails() {
    console.log('Entertainment function is running');
     return this.http.get<any>('https://europe-west1-reactdev-316210.cloudfunctions.net/get_work_matrix?message=mov%3A299534')
  }

}
