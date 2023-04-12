import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees : Employee[] = [
    {
      id: '5b4ed4cc-f31b-444b-a06e-8c1c1c1c1c1c',
      name: 'briannnnnn',
      email: 'pato@email.com',
      phone: 1234567890,
      salary: 10000,
      department: 'IT'
    },
    {
      id: 'pat0dc-f41c-444b-a06e-8c1c1c1c1c1c',
      name: 'Brian Marquez',
      email: 'brian@email.com',
      phone: 348209384,
      salary: 5999,
      department: 'HHRR'
    },
    {
      id: 'poue4c-f41c-444b-a06e-8c1c1c1c1c1c',
      name: 'Fabiola Chavez',
      email: 'fabiola@email.com',
      phone: 348209384,
      salary: 1500,
      department: 'HHRR'
    }
  ];
  //employees : Employee[] = [];



  constructor() { }

  ngOnInit(): void {
  }
}
