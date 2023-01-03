import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'faq', component: FaqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
