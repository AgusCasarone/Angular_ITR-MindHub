import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import path from 'path';
import { Component } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
  // ! PATH: '' = LOCALHOST4200
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        // ! eagerLoading, para que cargue ni bien inicia
        component: HomeComponent
      },
      {
        path: 'login',
        // ! lazyLoading, para que cargue cuando haga falta
        loadComponent: () =>
          import('./views/login/login.component')
            .then(m => m.LoginComponent)
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./views/products/products.component')
            .then(m => m.ProductsComponent)
      },
      {
        path: 'products/:id',
        loadComponent:() =>
          import('./views/products-details/products-details.component')
            .then(m => m.ProductsDetailsComponent)
      },
      {
        path: 'profile/:id',
        loadComponent: () =>
          import('./views/profile/profile.component')
            .then(m => m.ProfileComponent)
      },

      // ! TIENE QUE IR ULTIMO
      {
        path: '**',
        component: NotFoundComponent
      },
    ]
  }
];
