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
  page = 1;
  searchData = {vehicleNo: undefined,status: undefined}
  vehicles = this.vehicleService.getVehicleList()
  pagedVehicles :any = this.loadPage()

  filterVehicles(){
    this.vehicles = this.vehicleService.getVehicleList(this.searchData)
    this.loadPage()
  }

  clearSearch(){
    this.searchData = {vehicleNo: undefined,status: undefined}
    this.vehicles = this.vehicleService.getVehicleList()
  }

  loadPage(pageNo=1){
    let perPage = 5
    this.pagedVehicles = this.vehicles.slice((perPage*(pageNo-1)),((perPage * (pageNo - 1)) + 5));
    return this.pagedVehicles;
  }

}
