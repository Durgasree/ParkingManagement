import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  constructor(private vehicleService: VehicleService,private modalService: NgbModal) { }

  ngOnInit() {
  }
  closeResult: string;
  vehicleNo = ""
  responseMessage;
  invoice = this.getNewInvoice();
  successMessage;
  errorMessage;

  

  updateVehicleNumbers(){
    let vehicles = this.vehicleService.getVehicleList()
    let filterresults = vehicles.map(vehicle => vehicle.vehicleNo );
    return filterresults
  }
  
  

  updatePayment(vehicleNo){
    this.closeAlert()
    console.log(vehicleNo)
    this.vehicleService.updatePayment(vehicleNo)
    this.invoice =  this.getNewInvoice();
    this.vehicleNo = undefined;
    // alert("payment successfull")

  }

  

  getNewInvoice(){
    return  { vehicleNo: undefined,wheels: undefined,
            entry_time: undefined,exit_time: undefined,
            hours: null,amount: null,status: undefined};
  }

   closeAlert(){
    this.successMessage = undefined;
    this.errorMessage = undefined;
  }


  getInvoice(){
    this.closeAlert()
    let response = this.vehicleService.getVehicle(this.vehicleNo)
    console.log(response)
    if(response){
      this.successMessage = "Vehicle Found."
      this.invoice = this.vehicleService.getInvoice(this.vehicleNo) 
      console.log(this.invoice)
    }
    else{
      this.errorMessage = "Vehicle Not Found."
    }
    
  }

    open(content) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    vehicleNumbers = this.updateVehicleNumbers();

    search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term === '' ? []
        : this.vehicleNumbers.filter(v => v.indexOf(term.toLocaleUpperCase()) > -1).slice(0, 10));


}

