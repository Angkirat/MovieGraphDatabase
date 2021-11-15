import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphViewRoutingModule } from './graph-view-routing.module';
import { GraphViewComponent } from './graph-view.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { GraphDisplayComponent } from './components/graph-display/graph-display.component';


@NgModule({
  declarations: [
    GraphViewComponent,
    GraphDisplayComponent,
  ],
  imports: [
    CommonModule,
    GraphViewRoutingModule,
    SharedComponentsModule
  ]
})
export class GraphViewModule { }
