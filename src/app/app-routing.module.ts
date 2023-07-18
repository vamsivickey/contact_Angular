import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contactRegister/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [

  { path: '', component: ImageComponent, title:'Welcome | Contact Website' },
  { path: 'gettingAllContacts', component: AllContactsComponent, title:'Contact List' },
  { path: 'registerContact', component: ContactComponent, title:'New Contact List' },
  { path: 'registerContact/home', component: ImageComponent, title:'New Contact List' },
  { path: 'gettingAllContacts/home', component: ImageComponent, title:'New Contact List' },

  { path: 'registerContact/registerContact/home', component: ImageComponent, title:'New Contact List' },

  { path: 'gettingAllContacts/registerContact/home', component: ImageComponent, title:'New Contact List' },

  { path: 'home', component: ImageComponent, title:'New Contact List' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
