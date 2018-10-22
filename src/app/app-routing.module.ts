import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { from } from 'rxjs';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard',
pathMatch: 'full' },
  { path: 'dashboard',
component: DashboardComponent },
  { path: 'heroes',
component: HeroesComponent },
  { path: 'detail/:id',
component: HeroDetailComponent }
];

@NgModule({

  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

