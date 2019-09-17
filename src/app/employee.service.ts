import { Injectable } from '@angular/core';
import { Employee } from './employee.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()

export class EmployeeService{

    getEmployeeData(): Employee[] {
    return [{
    "userId":1,
    "jobTitleName":"Developer",
    "firstName":"A",
    "lastName":"AA",
    "preferredFullName":"AAA",
    "employeeCode":"E1",
    "region":"CA",
    "phoneNumber":1234,
    "emailAddress":"1234@gmail.com"
    },
      {
    "userId":2,
    "jobTitleName":"Developer",
    "firstName":"B",
    "lastName":"BB",
    "preferredFullName":"BBB",
    "employeeCode":"E2",
    "region":"CA",
    "phoneNumber":2345,
    "emailAddress":"2345@gmail.com"
    },
      {
    "userId":3,
    "jobTitleName":"Developer",
    "firstName":"C",
    "lastName":"CC",
    "preferredFullName":"CCC",
    "employeeCode":"E3",
    "region":"CA",
    "phoneNumber":3456,
    "emailAddress":"3456@gmail.com"
    },
      {
    "userId":4,
    "jobTitleName":"Developer",
    "firstName":"D",
    "lastName":"DD",
    "preferredFullName":"DDD",
    "employeeCode":"E4",
    "region":"CA",
    "phoneNumber":4567,
    "emailAddress":"4567@gmail.com"
    },
      ]
    }
}
