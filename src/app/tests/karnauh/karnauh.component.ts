import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
const initResult = {
  f: '',
  s: '',
  t: '',
  fo: '',
}

@Component({
  selector: 'app-karnauh',
  templateUrl: './karnauh.component.html',
  styleUrls: ['./karnauh.component.css']
})
export class KarnauhComponent {
  ESTP=false;
  ESFP=false;
  ISTP=false;
  ISFP=false;
  ESTJ=false;
  ESFJ=false;
  ISTJ=false;
  ISFJ=false;
  ENTP=false;
  ENTJ=false;
  INTJ=false;
  INTP=false;
  ENFP=false;
  ENFJ=false;
  INFJ=false;
  INFP=false;
  f = '';
  s = '';
  t = '';
  fo = '';

  savedResult: {[key: string]: string} = initResult

  form: FormGroup;
  
  constructor(fb: FormBuilder){
    this.form = fb.group({});
    
    for(let i = 1; i < 5; i++){
      this.form.addControl(`q${i}`, new FormControl('')) 
    }

  };
  ngSubmit() {
    console.log(this.form.value);
    if (this.form.value.q1 == "E") {
      this.f = 'E';
    }
    else if (this.form.value.q1 == "I"){
      this.f = 'I';
    }
    if (this.form.value.q2 == "S") {
      this.s = 'S';
    }
    else if (this.form.value.q2 == "N"){
      this.s = 'N';
    }
    if (this.form.value.q3 == "T") {
      this.t = 'T';
    }
    else if (this.form.value.q3 == "F"){
      this.t = 'F';
    }
    if (this.form.value.q4 == "J") {
      this.fo = 'J';
    }
    else if (this.form.value.q4 == "P"){
      this.fo = 'P';
    }
    this.savedResult = {
      f: this.f,
      s: this.s,
      t: this.t,
      fo: this.fo,
    }
    if (this.f == 'E' && this.s == 'S' && this.t == 'T' && this.fo == 'P'){
      this.ESTP = true
    }
    if (this.f == 'E' && this.s == 'S' && this.t == 'F' && this.fo == 'P'){
      this.ESFP = true
    }
    if (this.f == 'I' && this.s == 'S' && this.t == 'T' && this.fo == 'P'){
      this.ISTP = true
    }
    if (this.f == 'I' && this.s == 'S' && this.t == 'F' && this.fo == 'P'){
      this.ISFP = true
    }
    if (this.f == 'E' && this.s == 'S' && this.t == 'T' && this.fo == 'J'){
      this.ESTJ = true
    }
    if (this.f == 'E' && this.s == 'S' && this.t == 'F' && this.fo == 'J'){
      this.ESFJ = true
    }
    if (this.f == 'I' && this.s == 'S' && this.t == 'T' && this.fo == 'J'){
      this.ISTJ = true
    }
    if (this.f == 'I' && this.s == 'S' && this.t == 'F' && this.fo == 'J'){
      this.ISFJ = true
    }
    if (this.f == 'E' && this.s == 'N' && this.t == 'T' && this.fo == 'P'){
      this.ENTP = true
    }
    if (this.f == 'E' && this.s == 'N' && this.t == 'T' && this.fo == 'J'){
      this.ENTJ = true
    }
    if (this.f == 'I' && this.s == 'N' && this.t == 'T' && this.fo == 'J'){
      this.INTJ = true
    }
    if (this.f == 'I' && this.s == 'N' && this.t == 'T' && this.fo == 'P'){
      this.INTP = true
    }
    if (this.f == 'E' && this.s == 'N' && this.t == 'F' && this.fo == 'P'){
      this.ENFP = true
    }
    if (this.f == 'E' && this.s == 'N' && this.t == 'F' && this.fo == 'J'){
      this.ENFJ = true
    }
    if (this.f == 'I' && this.s == 'N' && this.t == 'F' && this.fo == 'J'){
      this.INFJ = true
    }
    if (this.f == 'I' && this.s == 'N' && this.t == 'F' && this.fo == 'P'){
      this.INFP = true
    }
    this.f = '';
    this.s = '';
    this.t = '';
    this.fo = '';
  }
  
}
