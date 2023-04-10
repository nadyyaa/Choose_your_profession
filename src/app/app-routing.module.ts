import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProflistComponent } from './proflist/proflist.component';
import { TestsComponent } from './tests/tests.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotFoundError } from 'rxjs';
import { HomeComponent } from './home/home.component';
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
import { HollandComponent } from './tests/holland/holland.component';
import { ContactComponent } from './contact/contact.component';
import { KarnauhComponent } from './tests/karnauh/karnauh.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'proflist', component:ProflistComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'proflist/IT', component: ITComponent },
  { path: 'proflist/Economic', component: EconomicComponent },
  { path: 'proflist/Medicine', component: MedicineComponent },
  { path: 'proflist/Science', component: ScienceComponent },
  { path: 'proflist/Technic', component: TechnicComponent },
  { path: 'proflist/Transport', component: TransportComponent },
  { path: 'proflist/Creativity', component: CreativityComponent },
  { path: 'proflist/Service', component: ServiceComponent },
  { path: 'proflist/Teachers', component: TeachersComponent },
  { path: 'proflist/Jurisprudence', component: JurisprudenceComponent },
  { path: 'tests/Holland', component: HollandComponent },
  { path: 'tests/Karhauh', component: KarnauhComponent },
  { path: '**', component: NotFoundError },

]




@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
