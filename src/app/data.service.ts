import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data = ["Автомеханик", "Физиотерапевт"];
  constructor() { }
  getData(){
    return [...this.data]
  }
  addData(name: string) {
    this.data.push(name)
  }
}