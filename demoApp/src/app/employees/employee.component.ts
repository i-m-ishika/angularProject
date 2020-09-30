
import {Component, OnInit} from '@angular/core';
import {IEmployee} from '../interfaces/employee';
import { EmployeeService } from '../services/employee.service';
@Component({
    templateUrl: 'employee.component.html',
    styleUrls : ['employee.component.css']
})
export class EmployeeComponent implements OnInit{
    employees :IEmployee[];
    isDataLoaded=false;
    constructor(private _employeeService:EmployeeService){}
    ngOnInit(){}
    loadData(){
        this._employeeService.getEmployees()
        .subscribe(
            response=>{
                this.employees = response;
                this.isDataLoaded = true;

                console.log(this.employees);
            }

        );
    }





}
