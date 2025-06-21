import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private apollo: Apollo) { }
  getCars(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          vehicles  {
            brand
            model
            year
            price
            km
            status
            image
          }
        }
      `
    });
  }
}
