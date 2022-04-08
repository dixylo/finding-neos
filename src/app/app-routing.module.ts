import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { NeoListComponent } from './routes/neo-list/neo-list.component';
import { NeoDetailComponent } from './routes/neo-detail/neo-detail.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'neos', component: NeoListComponent
}, {
  path: 'neo/:id', component: NeoDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
