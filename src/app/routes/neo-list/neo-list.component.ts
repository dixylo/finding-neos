import { Component, OnInit } from '@angular/core';
import { NeoService } from '../../services/neo.service';

@Component({
  selector: 'app-neo-list',
  templateUrl: './neo-list.component.html',
  styleUrls: ['./neo-list.component.less']
})
export class NeoListComponent implements OnInit {
  data: any = null;
  date: string = '';
  count: number = 0;
  diameter_range: number[] = [];
  distance_range: number[] = [];
  neos: any[] = [];

  constructor(private service: NeoService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData (url?: string) {
    this.service.getNeos(url).subscribe((neos) => this.init(neos));
  }

  init = (data: any) => {
    const date = data.links.self.split('?')[1].slice(11, 21);
    const count = data.element_count;
    let diameter_min = 1000;
    let diameter_max = 0;
    let distance_min = 100000000;
    let distance_max = 0;
    const neos = data.near_earth_objects[date];
    neos && neos.forEach((neo: any) => {
      const {
        estimated_diameter: {
          meters: {
            estimated_diameter_min, estimated_diameter_max
          }
        },
        close_approach_data
      } = neo;
      const diameter = Math.round((estimated_diameter_min + estimated_diameter_max) / 2);
      const distance = Math.round(close_approach_data[0].miss_distance.kilometers);
      if (diameter_min > diameter ) diameter_min = diameter;
      if (diameter_max < diameter ) diameter_max = diameter;
      if (distance_min > distance ) distance_min = distance;
      if (distance_max < distance ) distance_max = distance;
    });
    if (diameter_min === diameter_max) diameter_min -= 1;
    if (distance_min === distance_max) distance_min -= 1;

    this.data = data;
    this.date = date;
    this.count = count;
    this.diameter_range = [diameter_min, diameter_max];
    this.distance_range = [distance_min, distance_max];
    this.neos = neos;
  };

  httpsify = (link: string) => {
    if (link.slice(0, 5) === 'http:') {
      return link.slice(0, 4) + 's' + link.slice(4);
    }
    return link;
  };

  showAnotherDay(direction: string) {
    let { links: { prev, next } } = this.data;
    prev = this.httpsify(prev);
    next = this.httpsify(next);
    const link = direction === 'left' ? prev : next;
    this.fetchData(link);
  }
}
