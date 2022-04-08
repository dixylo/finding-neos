import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NeoService } from '../../services/neo.service';

@Component({
  selector: 'app-neo-detail',
  templateUrl: './neo-detail.component.html',
  styleUrls: ['./neo-detail.component.less']
})
export class NeoDetailComponent implements OnInit {
  TOWER_HEIGHT = 553;
  data: any = null;
  name: string = '';
  diameter_min: number = 0;
  diameter_max: number = 0;
  speed: number = 0;
  distance: number = 0;
  magnitude: number = 0;

  constructor(private route: ActivatedRoute, private service: NeoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getNeo(id).subscribe((neo) => {
        this.data = neo;
        this.name = neo && neo.name;
        this.speed = neo && Math.round(parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_second));
        this.distance = neo && Math.round(parseFloat(neo.close_approach_data[0].miss_distance.kilometers) / 1000000);
        this.magnitude = neo && neo.absolute_magnitude_h;
        this.diameter_min = neo && Math.round(neo.estimated_diameter.meters.estimated_diameter_min);
        this.diameter_max = neo && Math.round(neo.estimated_diameter.meters.estimated_diameter_max);
      })
    }
  }

  handleScale = () => {
    if (!this.data || !this.data.estimated_diameter) return { neoStyle: {}, towerStyle: {} };
    const {
      estimated_diameter: {
        meters: {
          estimated_diameter_min, estimated_diameter_max
        }
      }
    } = this.data;
    const diameter = Math.round((estimated_diameter_min + estimated_diameter_max) / 2);

    let neoStyle;
    let towerStyle;
    if (diameter > this.TOWER_HEIGHT) {
      neoStyle = { width: '80vh', height: '80vh' };
      towerStyle = { height: `${80 * this.TOWER_HEIGHT / diameter}vh` };
    } else {
      neoStyle = { width: `${80 * diameter / this.TOWER_HEIGHT}vh`, height: `${80 * diameter / this.TOWER_HEIGHT}vh` };
      towerStyle = { height: '80vh' };
    }

    return { neoStyle, towerStyle };
  };
}
