import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
	providers: [VehicleService]
})
export class ExitComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }

}
