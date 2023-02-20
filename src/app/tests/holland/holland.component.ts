import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
const initResult = {
  r: 0,
  i: 0,
  c: 0,
  k: 0,
  p: 0,
  x: 0,
}

@Component({
  selector: 'app-holland',
  templateUrl: './holland.component.html',
  styleUrls: ['./holland.component.css']
})
export class HollandComponent {
  toggle=false;
  r = 0;
  i = 0;
  c = 0;
  k = 0;
  p = 0;
  x = 0;

  savedResult: {[key: string]: number} = initResult

  form: FormGroup;
  
  constructor(fb: FormBuilder){
    this.form = fb.group({});
    
    for(let i = 1; i < 43; i++){
      this.form.addControl(`q${i}`, new FormControl('')) 
    }

  };
  ngSubmit() {
    console.log(this.form.value);
    
    if (this.form.value.q1 == "engineer") {
      this.r++;
    }
    else if (this.form.value.q1 == "sociologist"){
      this.i++;
    }
    if (this.form.value.q2 == "baker") {
      this.r++;
    }
    else if (this.form.value.q2 == "priest"){
      this.c++;
    }
    if (this.form.value.q3 == "cook") {
      this.r++;
    }
    else if (this.form.value.q3 == "statiscian"){
      this.k++;
    }
    if (this.form.value.q4 == "prhotographer") {
      this.r++;
    }
    else if (this.form.value.q4 == "administratortz"){
      this.p++;
    }
    if (this.form.value.q5 == "philosoph") {
      this.r++;
    }
    else if (this.form.value.q5 == "doctor"){
      this.x++;
    }
    if (this.form.value.q6 == "baker") {
      this.i++;
    }
    else if (this.form.value.q6 == "priest"){
      this.c++;
    }
    if (this.form.value.q7 == "ecolog") {
      this.i++;
    }
    else if (this.form.value.q7 == "buxgalter"){
      this.k++;
    }
    if (this.form.value.q8 == "programmist") {
      this.i++;
    }
    else if (this.form.value.q8 == "advokat"){
      this.p++;
    }
    if (this.form.value.q9 == "kinolog") {
      this.i++;
    }
    else if (this.form.value.q9 == "translaterxl"){
      this.x++;
    }
    if (this.form.value.q10 == "straxovoyagent") {
      this.c++;
    }
    else if (this.form.value.q10 == "arxivist"){
      this.k++;
    }
    if (this.form.value.q11 == "coach") {
      this.c++;
    }
    else if (this.form.value.q11 == "telereporter"){
      this.p++;
    }
    if (this.form.value.q12 == "detective") {
      this.c++;
    }
    else if (this.form.value.q12 == "arthistorian"){
      this.x++;
    }
    if (this.form.value.q13 == "notarious") {
      this.k++;
    }
    else if (this.form.value.q13 == "broker"){
      this.p++;
    }
    if (this.form.value.q14 == "operatorevm") {
      this.k++;
    }
    else if (this.form.value.q14 == "manekenshiza"){
      this.x++;
    }
    if (this.form.value.q15 == "photokorrespondent") {
      this.p++;
    }
    else if (this.form.value.q15 == "restavrator"){
      this.x++;
    }
    if (this.form.value.q16 == "ozelenitel") {
      this.r++;
    }
    else if (this.form.value.q16 == "biologissledovatel"){
      this.i++;
    }
    if (this.form.value.q17 == "driver") {
      this.r++;
    }
    else if (this.form.value.q17 == "bortprovodnik"){
      this.c++;
    }
    if (this.form.value.q18 == "meteorolog") {
      this.r++;
    }
    else if (this.form.value.q18 == "cartograph"){
      this.k++;
    }
    if (this.form.value.q19 == "radiomechanic") {
      this.r++;
    }
    else if (this.form.value.q19 == "drawertree"){
      this.x++;
    }
    if (this.form.value.q20 == "geolog") {
      this.r++;
      this.i++;
    }
    else if (this.form.value.q20 == "gidtranslater"){
      this.c++;
    }
    if (this.form.value.q21 == "zhurnalist") {
      this.p++;
    }
    else if (this.form.value.q21 == "rezhisser"){
      this.x++;
    }
    if (this.form.value.q22 == "bibliograph") {
      this.i++;
    }
    else if (this.form.value.q22 == "auditor"){
      this.k++;
    }
    if (this.form.value.q23 == "pharmazevt") {
      this.i++;
    }
    else if (this.form.value.q23 == "uriskonsult"){
      this.c++;
    }
    if (this.form.value.q24 == "genetic") {
      this.i++;
    }
    else if (this.form.value.q24 == "architector"){
      this.x++;
    }
    if (this.form.value.q25 == "seller") {
      this.c++;
    }
    else if (this.form.value.q25 == "operatorps"){
      this.k++;
    }
    if (this.form.value.q26 == "socialworker") {
      this.c++;
    }
    else if (this.form.value.q26 == "predprinimatel"){
      this.p++;
    }
    if (this.form.value.q27 == "teachervus") {
      this.c++;
    }
    else if (this.form.value.q27 == "musicionispolnitel"){
      this.x++;
    }
    if (this.form.value.q28 == "economist") {
      this.k++;
    }
    else if (this.form.value.q28 == "menedzher"){
      this.x++;
    }
    if (this.form.value.q29 == "corrector") {
      this.k++;
    }
    else if (this.form.value.q29 == "dirizher"){
      this.x++;
    }
    if (this.form.value.q30 == "inspectortamozhni") {
      this.p++;
    }
    else if (this.form.value.q30 == "drawermodel"){
      this.x++;
    }
    if (this.form.value.q31 == "telephonost") {
      this.r++;
    }
    else if (this.form.value.q31 == "ornitolog"){
      this.k++;
    }
    if (this.form.value.q32 == "agronom") {
      this.r++;
    }
    else if (this.form.value.q32 == "topograph"){
      this.c++;
    }
    if (this.form.value.q33 == "forester") {
      this.r++;
    }
    else if (this.form.value.q33 == "headteacher"){
      this.p++;
    }
    if (this.form.value.q34 == "masterporemonty") {
      this.r++;
    }
    else if (this.form.value.q34 == "xoreograph"){
      this.x++;
    }
    if (this.form.value.q35 == "historic") {
      this.i++;
    }
    else if (this.form.value.q35 == "inspectorgai"){
      this.k++;
    }
    if (this.form.value.q36 == "antropolog") {
      this.i++;
    }
    else if (this.form.value.q36 == "ecscursovod"){
      this.c++;
    }
    if (this.form.value.q37 == "virusolog") {
      this.i++;
    }
    else if (this.form.value.q37 == "actor"){
      this.x++;
    }
    if (this.form.value.q38 == "oficiant") {
      this.c++;
    }
    else if (this.form.value.q38 == "tovaroved"){
      this.p++;
    }
    if (this.form.value.q39 == "mainbuxgalter") {
      this.k++;
    }
    else if (this.form.value.q39 == "inspectorugolovnogorozuska"){
      this.p++;
    }
    if (this.form.value.q40 == "parikmaxermodeler") {
      this.x++;
    }
    else if (this.form.value.q40 == "psycologist"){
      this.c++;
    }
    if (this.form.value.q41 == "pchelovod") {
      this.r++;
    }
    else if (this.form.value.q41 == "kommersant"){
      this.p++;
    }
    if (this.form.value.q42 == "sudya") {
      this.c++;
      this.toggle=true;
    }
    else if (this.form.value.q42 == "stenograpthist"){
      this.k++;
      this.toggle=true;
    }
    this.savedResult = {
      r: this.r,
      i: this.i,
      c: this.c,
      k: this.k,
      p: this.p,
      x: this.x
    }

    this.r = 0;
    this.i = 0;
    this.c = 0;
    this.k = 0; 
    this.p = 0;
    this.x = 0;
  }
  
}