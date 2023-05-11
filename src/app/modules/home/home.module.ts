import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TableGenteComponent } from 'src/app/components/table-gente/table-gente/table-gente.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableGenteComponent
  ],
  exports: [HomeRoutingModule]
})
export class HomeModule { }
