import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProflistComponent } from './proflist/proflist.component';
import { TestsComponent } from './tests/tests.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ITComponent } from './proflist/it/it.component';
import { EconomicComponent } from './proflist/economic/economic.component';
import { MedicineComponent } from './proflist/medicine/medicine.component';
import { ScienceComponent } from './proflist/science/science.component';
import { TechnicComponent } from './proflist/technic/technic.component';
import { TransportComponent } from './proflist/transport/transport.component';
import { CreativityComponent } from './proflist/creativity/creativity.component';
import { ServiceComponent } from './proflist/service/service.component';
import { TeachersComponent } from './proflist/teachers/teachers.component';
import { JurisprudenceComponent } from './proflist/jurisprudence/jurisprudence.component';
import { DataService } from './data.service';
import { HollandComponent } from './tests/holland/holland.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContactComponent } from './contact/contact.component';
import { KarnauhComponent } from './tests/karnauh/karnauh.component';

@NgModule({
  declarations: [
    AppComponent,
    ProflistComponent,
    TestsComponent,
    HomeComponent,
    ITComponent,
    EconomicComponent,
    MedicineComponent,
    ScienceComponent,
    TechnicComponent,
    TransportComponent,
    CreativityComponent,
    ServiceComponent,
    TeachersComponent,
    JurisprudenceComponent,
    HollandComponent,
    ContactComponent,
    KarnauhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    // MatSlideToggleModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
