import { Component, OnInit, Input } from '@angular/core';

const DIAMETER_SCALE_RANGE = [2, 5];
const DISTANCE_SCALE_RANGE = [20, 40];

function handleScale (original_value: number, original_range: number[], scale_range: number[]) {
  const omin = original_range[0];
  const omax = original_range[1];
  const smin = scale_range[0];
  const smax = scale_range[1];
  return smin + (original_value - omin) * (smax - smin) / (omax - omin);
};

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.less']
})
export class NeoComponent implements OnInit {
  @Input() index: number = 0;
  @Input() count: number = 0;
  @Input() data: any;
  @Input() diameterRange: number[] = [];
  @Input() distanceRange: number[] = [];

  route: string = '/';
  y: number = 0;
  name: string = '';
  diameter: number = 0;
  distance: number = 0;
  dynamicStyle: any;


  constructor() { }

  ngOnInit(): void {
    const {
      id,
      name,
      estimated_diameter: {
        meters: {
          estimated_diameter_min, estimated_diameter_max
        }
      },
      close_approach_data
    } = this.data;

    this.route = `/neo/${id}`;
    this.name = name;
  
    const diameter = (estimated_diameter_min + estimated_diameter_max) / 2;
    this.diameter = Math.round(diameter);
    const scaled_diameter = handleScale(diameter, this.diameterRange, DIAMETER_SCALE_RANGE);
  
    const distance = close_approach_data[0].miss_distance.kilometers;
    this.distance = distance / 1000000;
    const scaled_distance = handleScale(distance, this.distanceRange, DISTANCE_SCALE_RANGE);
    const x = scaled_distance * Math.cos(2 * Math.PI / this.count * this.index) + 50;
    const y = scaled_distance * Math.sin(2 * Math.PI / this.count * this.index) + 50;
    this.y = y;
    this.dynamicStyle = {
      width: `${scaled_diameter}vw`,
      height: `${scaled_diameter}vw`,
      left: `${x}vw`,
      top: `${y}vh`
    };
  }
}
