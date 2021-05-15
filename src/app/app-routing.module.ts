import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApprovePageComponent} from './components/approve-page/approve-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ApprovePageComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
