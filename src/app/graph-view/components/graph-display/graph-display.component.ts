import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GraphConnectionService } from '../../services/graph-connection.service';
import * as d3 from 'd3'
import { Actor } from '../../Class/actor';
import * as Plotly from 'plotly.js';
import { EntertainmentChannel } from '../../Class/entertainment-channel';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss']
})
export class GraphDisplayComponent implements OnInit, OnChanges {

  @Input() selectedType: string | undefined;
  @Input() ActorSelected: Actor | undefined;
  @Input() EntSelected: EntertainmentChannel | undefined;
  
  actorSelected!: Actor;
  
  public graphData!: any;

  constructor(private db:GraphConnectionService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    if(this.selectedType === 'Actor' && this.ActorSelected){
      console.log('Actor Selected')
      this.db.getActorsDetails(this.ActorSelected.id).subscribe(res => {
        var data = res.filter(this.filterData);
        data.sort((a: any, b: any) => {
          if (a.fictionalcharname === a.fictionalcharname){ //(a.fictionalcharname === a.fictionalcharname){ (a.metric_class === b.metric_class)
            return  a.metric_class > b.metric_class ? 1 : -1
          }
          return a.fictionalcharname > b.fictionalcharname ? 1 : -1
        })
        var characters: string[] = data.map((val:any) => {return val.fictionalcharname}).filter(this.onlyUnique);
        var metrics: string[] = data.map((val:any) => {return val.metric_class}).filter(this.onlyUnique);
        var metricValue: number[][] = []
        metrics.forEach((element: any) => {
          var charData = data.filter((v: any) => v.metric_class === element).sort((a: any, b: any) => {
            if (a.fictionalcharname === a.fictionalcharname){ //(a.fictionalcharname === a.fictionalcharname){ (a.metric_class === b.metric_class)
              return  a.metric_class > b.metric_class ? 1 : -1
            }
            return a.fictionalcharname > b.fictionalcharname ? 1 : -1
          });
          metricValue.push(charData.map((val: any )=> {return val.metric}))
        });
        var plotdata = [
          {
            z: metricValue,
            x: characters,
            y: metrics,
            type: 'heatmap',
            hoverongaps: false
          }
        ];
        
        this.graphData = {
          data: plotdata,
          layout: {width: 800, height: 5000}
        }
      });
    }else if(this.selectedType === 'Entertainment' && this.EntSelected){
      console.log('Movie Selected')
      this.db.getEntertainmentDetails(this.EntSelected.type, this.EntSelected.id).subscribe(res => {
        var data = res.filter(this.filterData);
        console.log(data);
        data.sort((a: any, b: any) => {
          if (a.fictionalcharname === a.fictionalcharname){ //(a.fictionalcharname === a.fictionalcharname){ (a.metric_class === b.metric_class)
            return  a.metric_class > b.metric_class ? 1 : -1
          }
          return a.fictionalcharname > b.fictionalcharname ? 1 : -1
        })
        var characters: string[] = data.map((val:any) => {return val.fictionalcharname}).filter(this.onlyUnique);
        var metrics: string[] = data.map((val:any) => {return val.metric_class}).filter(this.onlyUnique);
        var metricValue: number[][] = []
        metrics.forEach((element: any) => {
          var charData = data.filter((v: any) => v.metric_class === element).sort((a: any, b: any) => {
            if (a.fictionalcharname === a.fictionalcharname){ //(a.fictionalcharname === a.fictionalcharname){ (a.metric_class === b.metric_class)
              return  a.metric_class > b.metric_class ? 1 : -1
            }
            return a.fictionalcharname > b.fictionalcharname ? 1 : -1
          });
          metricValue.push(charData.map((val: any )=> {return val.metric}))
        });
        var plotdata = [
          {
            z: metricValue,
            x: characters,
            y: metrics,
            type: 'heatmap',
            hoverongaps: false
          }
        ];
        
        this.graphData = {
          data: plotdata,
          layout: {width: 800, height: 5000}
        }
      });
    }
  }

  ngOnInit(): void {
    
  }

  filterData(data:any) {
    return data.psycholbl.endsWith('mean') //|| data.psycholbl.endsWith('sd');
  }

  onlyUnique(value: any, index: any, self: string | any[]) {
    return self.indexOf(value) === index;
  }
  

}
