import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';



@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }
  newVehicle = {vehicleNo: null,wheels: "2"}
  successMessage;
  errorMessage;

  addVehicle(){
    this.closeAlert();
    let response = this.vehicleService.addVehicle(this.newVehicle);
    if(response.status)
    {
      this.successMessage = "Vehicle entered in records."
      this.newVehicle = {vehicleNo: null,wheels: "2"}
    }
    else{
      this.errorMessage = "Vehicle existed in records."
    }
  }

  closeAlert(){
    this.successMessage = undefined;
    this.errorMessage = undefined;
  }

  

}
