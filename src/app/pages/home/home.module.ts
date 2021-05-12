import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';

import { StoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', {}),
  ],
  declarations: [
    HomePage,
  ],
})
export class HomeModule { }
