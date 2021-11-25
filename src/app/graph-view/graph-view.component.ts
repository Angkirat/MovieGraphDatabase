import { Component, OnInit } from '@angular/core';
import { Actor } from './Class/actor';
import { EntertainmentChannel } from './Class/entertainment-channel';
import { EntityPullService } from './services/entity-pull.service';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit {

  actorList: Actor[] = [];
  entChannel: EntertainmentChannel[] = [];
  selectedActor!: Actor;
  selectedEnt!: EntertainmentChannel;
  selectedEntity!: string;

  constructor(private entity: EntityPullService) { }

  ngOnInit(): void {
    this.entity.getActorList().subscribe(res => {
      var lines = res.split('\n')
      lines.slice(1).forEach(val=>{
        var colValues = val.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        this.actorList.push(new Actor(colValues[0], colValues[4], colValues[1], colValues[6]));
      })
    });

    this.entity.getMovieList().subscribe(res => {
      var lines = res.split('\n')
      lines.slice(1).forEach(val=>{
        // id,release_date,runtime,imdb_id,title,revenue,photo_url,genre,homepage,directors,writers
        // type: string, name: string, id: string, genre: string, photo_url: string
        var colValues = val.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        this.entChannel.push(new EntertainmentChannel('movie', colValues[4], colValues[0], colValues[7], colValues[6]));
      }) 
    });

    this.entity.getTvList().subscribe(res => {
      var lines = res.split('\n')
      lines.slice(1).forEach(val=>{
        // id,first_air_date,last_air_date,seasons,episodes,runtime,imdb_id,title,photo_url,genre,homepage,directors,writers
        // type: string, name: string, id: string, genre: string, photo_url: string
        var colValues = val.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        this.entChannel.push(new EntertainmentChannel('tv', colValues[7], colValues[0], colValues[9], colValues[8]));
      });
    });
  }

  actorChange(){
    this.selectedEntity = 'Actor';
  }

  EntertainmentChange(){
    this.selectedEntity = 'Entertainment';
  }

}
