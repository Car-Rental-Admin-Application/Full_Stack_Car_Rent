import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private apollo: Apollo) {}

  login(username: string, password: string) {
    // Utiliser le client nommé 'auth'
    return this.apollo.use('auth').mutate({
      mutation: gql`
        mutation Login($username: String!, $password: String!) {
          login(username: $username, password: $password)
        }
      `,
      variables: { username, password }
    }).pipe(
      map((result: any) => result.data.login) // le token retourné
    );
  }
}
