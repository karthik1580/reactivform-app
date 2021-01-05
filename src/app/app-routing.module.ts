import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGstFormComponent } from './components/add-gst-form/add-gst-form.component';
import { GetGstFormComponent } from './components/get-gst-form/get-gst-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateGstFormComponent } from './components/update-gst-form/update-gst-form.component';
import { paths } from './models/paths';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: paths.home},
  {path: paths.home, component: GetGstFormComponent},
  {path: paths.create, component: AddGstFormComponent},
  {path: paths.edit+'/:id', component: UpdateGstFormComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
