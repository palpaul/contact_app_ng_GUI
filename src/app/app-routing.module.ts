import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { CreatecontactComponent } from './components/createcontact/createcontact.component';
import { ContacteditComponent } from './components/contactedit/contactedit.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

const routes: Routes = [
  {path:"",redirectTo:"contacts",pathMatch:"full"},
  {path:"create-contact",component:CreatecontactComponent},
  {path:"edit/:id",component:ContacteditComponent},
  {path:"contacts",component:ContactListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
