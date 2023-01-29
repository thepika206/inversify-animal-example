import { inject, injectable } from "inversify";
import { CompanyInterface, UserInterface } from "./interface";
import { USER } from "./types";

@injectable()
class Employee implements UserInterface {

  public getName(name: string): string {
    return name
  }

  public getAge(age: number): number {
    return age
  }
}

@injectable()
class Company implements CompanyInterface{
  public employee:UserInterface

  constructor(
    @inject(USER) employee:UserInterface
  ){
    this.employee = employee
  }

  public getEmployee():void {
    console.log(this.employee.getName('John') + ' ' + this.employee.getAge(25))
  }
}

export { Employee, Company }