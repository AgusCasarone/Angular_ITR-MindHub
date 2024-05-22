import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import path from 'path';
import { Component } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { FormViewComponent } from './views/form-view/form-view.component';
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
        path: 'new',
        // ! lazyLoading, para que cargue cuando haga falta
        loadComponent: () =>
          import('./views/form-view/form-view.component')
            .then(m => m.FormViewComponent)
      },
      {
        path: '**',
        loadComponent: () =>
          import('./views/not-found/not-found.component')
            .then(m => m.NotFoundComponent)
      }
    ]
  }
];
