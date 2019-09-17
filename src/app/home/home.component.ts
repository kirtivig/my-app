import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";
import { Employee } from '../employee.interface';
 
@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
    export class HomeComponent {
 
        EmployeeData: Employee[] ;
 
        constructor(private employeeService:EmployeeService){
            this.EmployeeData = [];
        }
 
        getData(): void {
            this.EmployeeData = this.employeeService.getEmployeeData();
        }
    }