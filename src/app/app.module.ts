import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatecontactComponent } from './components/createcontact/createcontact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContacteditComponent } from './components/contactedit/contactedit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatecontactComponent,
    ContactListComponent,
    ContacteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
