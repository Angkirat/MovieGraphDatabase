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

  getActorsDetails(ActorId: string) {
    console.log('Actors function is running');
     return this.http.get<any>('https://europe-west1-reactdev-316210.cloudfunctions.net/get_actor_matrix?message=ppl%3A'+ActorId)
  }

  getEntertainmentDetails(enttype:string, entId:string) {
    console.log('Entertainment function is running');
    var etype = '';
    if (enttype === 'movie'){
      etype = 'mov'
    }else if (enttype === 'tv'){
      etype = 'tv';
    }
    return this.http.get<any>('https://europe-west1-reactdev-316210.cloudfunctions.net/get_work_matrix?message='+etype+'%3A'+entId)
  }

}
