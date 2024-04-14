export class Employee {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    datOfBirth: Date;
    departement: String;
    position: String;
    salary: number;
    constructor(
        id: number, 
        firstname: string, 
        lastname: string, 
        email: string, 
        dateOfBirth: Date, 
        department: string, 
        position: string, 
        salary: number
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.datOfBirth = dateOfBirth;
        this.departement = department;
        this.position = position;
        this.salary = salary;
    }
}
