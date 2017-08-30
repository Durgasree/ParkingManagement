import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  vehicles = this.vehicleService.getVehicleList()

}
