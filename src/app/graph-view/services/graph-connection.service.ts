import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GraphConnectionService {



  constructor(private http: HttpClient) { }

  getActorsDetails() {
    console.log('this function is running');
    this.http.get<any>('http://34.77.133.196:10035/repositories/KDE-Test?query=prefix%20foaf:%20%3Chttp://xmlns.com/foaf/0.1/%3E%20%0Aprefix%20media:%20%3Chttp://example.org/media/%3E%20%0Aprefix%20mov:%20%3Chttp://example.org/media/mov/%3E%20%0Aprefix%20ppl:%20%3Chttp://example.org/people/%3E%20%0Aprefix%20xsd:%20%3Chttp://www.w3.org/2001/XMLSchema%23%3E%20%0Aprefix%20tv:%20%3Chttp://example.org/media/tv/%3E%0Aprefix%20psycho:%20%3Chttp://example.org/psycho/%3E%0A%0Aselect%20distinct%20?fictionalcharname%20?actorname%20?psycholbl%20?metric%20where%20%7B%0A%0A%09?fictionalchar%20?actingpredicate%20ppl:2231%20.%0A%20%20%09ppl:2231%20ppl:name%20?actorname%20.%0A%20%20%20%20?fictionalchar%20foaf:name%20?fictionalcharname;%20?psychometrics%20?metric%20.%0A%20%20%20%20FILTER(?actingpredicate%20IN%20(mov:played_by,%20tv:played_by))%0A%20%20%09FILTER%20regex(str(?psychometrics),%20%22BAP%22,%20%22i%22)%0A%20%20%20%20BIND(REPLACE(str(?psychometrics),%20%22http://example.org/psycho/%22,%20%22%22)%20AS%20?psycholbl)%0A%7D').subscribe(
      res => {
        console.log(res)
      }
    )

  }

}
