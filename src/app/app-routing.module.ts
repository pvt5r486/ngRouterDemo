import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './front/index/index.component';

const routes: Routes = [
  { path: '',   redirectTo: '/front', pathMatch: 'full' },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
