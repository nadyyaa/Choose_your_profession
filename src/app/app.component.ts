import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Choose_your_profession';
  people: string[] = []
  profile = {
    firstName: "",
    lastName: ""
  }
  profileForm = new FormGroup({
    firstName: new FormControl(this.profile.firstName, Validators.required),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
  })
  constructor(
    private dataService: DataService, 
    private router: Router){
    this.people = dataService.getData()
  }
  onSubmit() {
    const name = this.profileForm.value.firstName
    if (name){
      this.router.navigate(['user', name])
      this.dataService.addData(name)
      this.people = this.dataService.getData()
    }
  }
}

