import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Employee } from './employee.model';
import { FormsModule } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
	imports: [
		FormsModule
	]
})

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private firestore: AngularFirestore) {}
  formData: Employee;
  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
}
