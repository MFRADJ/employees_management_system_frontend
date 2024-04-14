import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';
import { error } from 'console';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [] ;
  loading: boolean = true;

  constructor(private employeeService: EmployeeService) {
   
   }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe( {
      next: (data) => {
        this.employees = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des employés:', error);
        this.loading = false;
      },
      complete: () => {
        console.log('Opération de récupération des employés complétée.');
      }
    });
  }

}
