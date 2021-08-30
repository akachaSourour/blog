import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {RouterModule, Routes} from "@angular/router";
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogFormComponent} from "./blog-form/blog-form.component";
import {BlogDetailsComponent} from "./blog-details/blog-details.component";
import {MatListModule} from "@angular/material/list";
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";

const routes: Routes = [
  {path: '', component: BlogListComponent},
  {path:'form', component: BlogFormComponent},
  {path: 'detail/:id', component: BlogDetailsComponent}
]

@NgModule({
  declarations: [
    PagesComponent,
    BlogFormComponent,
    BlogListComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatSliderModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule
  ],

})
export class PagesModule { }
