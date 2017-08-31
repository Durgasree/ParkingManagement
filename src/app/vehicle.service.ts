import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {
  constructor() { }

  TWO_WHEELER_COST = 10
  FOUR_WHEELER_COST = 20
  PENDING = "PENDING"
  PAID = "PAID"
  testingMessage = {message: "successfully tested"}


  vehicles = [
    {vehicleNo: "AP1231J1",wheels: 2,entry_time: this.getCurrentTime(),exit_time: this.getCurrentTime() ,hours: 3,amount: 23,status: this.PENDING}
  ];


  getVehicleList(search_data={}){
    return this.vehicles;
  }

  addVehicle(params): any{
    let newVehicle = { vehicleNo: params["vehicleNo"].toLocaleUpperCase(),wheels: params["wheels"],
            entry_time: this.getCurrentTime(),exit_time: null,
            hours: null,amount: null,status: this.PENDING}
    if(this.getVehicle(params["vehicleNo"].toLocaleUpperCase())){
      return {status: false}
    }
    else
    {
      this.vehicles.push(newVehicle);
      return {status: true}
    }    
  }

  exitVehicle(params){
    return this.testingMessage
  }

  getInvoice(vehicleNo){
    let vehicle = this.getVehicle(vehicleNo);
    vehicle.exit_time = this.getCurrentTime();
    let entry_time = new Date(vehicle.entry_time).getTime();
    let exit_time = new Date(vehicle.exit_time).getTime();
    vehicle.hours = Math.ceil(Math.abs(exit_time - entry_time) / 36e5);
    let cost = (vehicle.wheels <= 2) ? this.TWO_WHEELER_COST : this.FOUR_WHEELER_COST
    vehicle.amount = vehicle.hours * cost
    return vehicle;
  }

  calculateBil(params){
    return this.testingMessage
  }

  getCurrentTime(){
    return new Date().toLocaleString();
  }

  getVehicle(vehicleNo){
    let vehicle =  this.vehicles.find(x => x.vehicleNo === vehicleNo)
    return vehicle;
  }

  updatePayment(vehicleNo){
    let vehicle = this.getVehicle(vehicleNo)
    vehicle.status = this.PAID
    return vehicle;
  }
  

  filterVehicleNumbers(vehicleNo){
    
  }
  
}
