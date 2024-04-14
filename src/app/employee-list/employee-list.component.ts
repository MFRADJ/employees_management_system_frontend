import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor() {
   }

 ngOnInit(): void {
  this.employees = [
    {
      "id": 1002,
      "datOfBirth": new Date("1994-05-18"),
      "departement": "marsaille",
      "position": "Tech",
      "salary": 50000,
      "email": "tom.hanks@gmail.com",
      "lastname": "hanks",
      "firstname": "tom"
    },
    {
      "id": 1003,
      "datOfBirth": new Date("1994-05-18"),
      "departement": "Paris",
      "position": "Eng",
      "salary": 60000,
      "email": "ali.abid@gmail.com",
      "lastname": "abid",
      "firstname": "ali"
    }
  ]
  //  this.getEmployees();
  }
  //private getEmployees(){
   // this.employeeService.getEmployeesList().subscribe(data => {
    //  this.employees = data
   // }
 // )
  //}
}
