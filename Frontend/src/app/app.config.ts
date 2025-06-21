import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { APOLLO_NAMED_OPTIONS, provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const GRAPHQL_URI = 'http://localhost:3001/graphql'; // backend cars
const GRAPHQL_URI_AUTH = 'http://localhost:3000/graphql'; // backend auth

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    MatButtonModule,
    MatIconModule,
    provideHttpClient(),

    // Client Apollo par défaut (cars)
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      const authLink = setContext(() => {
        const token = localStorage.getItem('token'); // ou sessionStorage
        return {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        };
      });

      return {
        link: authLink.concat(httpLink.create({ uri: GRAPHQL_URI })),
        cache: new InMemoryCache(),
      };
    }),

    // Clients Apollo nommés (ici auth)
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        auth: {
          link: httpLink.create({ uri: GRAPHQL_URI_AUTH }),
          cache: new InMemoryCache(),
        },
      }),
      deps: [HttpLink],
    },
  ],
};
