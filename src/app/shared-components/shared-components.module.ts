import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './material-module.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MaterialModuleModule,
    HttpClientModule,
  ]
})
export class SharedComponentsModule { }
