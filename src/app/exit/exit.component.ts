import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }
  
  vehicleNo = ""
  responseMessage;
  invoice = this.getNewInvoice();

  updatePayment(vehicleNo){
    console.log(vehicleNo)
    this.vehicleService.updatePayment(vehicleNo)
    this.invoice =  this.getNewInvoice();
    this.vehicleNo = undefined;
    alert("payment successfull")
  }

  getNewInvoice(){
    return  { vehicleNo: undefined,wheels: undefined,
            entry_time: undefined,exit_time: undefined,
            hours: null,amount: null,status: undefined};
  }

  getInvoice(){
    let response = this.vehicleService.getVehicle(this.vehicleNo)
    console.log(response)
    if(response){
      this.responseMessage = "Vehicle Found."
      this.invoice = this.vehicleService.getInvoice(this.vehicleNo) 
      console.log(this.invoice)
    }
    else{
      this.responseMessage = "Vehicle Not Found."
    }
    
  }
}
