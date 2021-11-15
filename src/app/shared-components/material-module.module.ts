import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponents = [
  MatToolbarModule
  ,MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MaterialComponents]
})
export class MaterialModuleModule { }
