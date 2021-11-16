import { Component, OnInit } from '@angular/core';
import { GraphConnectionService } from '../../services/graph-connection.service';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss']
})
export class GraphDisplayComponent implements OnInit {

  constructor(private db:GraphConnectionService) { }

  ngOnInit(): void {
    this.db.getActorsDetails()
  }

}
