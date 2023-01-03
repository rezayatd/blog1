import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeHeaderComponent } from './components/home/header/header.component';
import { AboutHeaderComponent } from './components/about/header/header.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { PreviewComponent } from './components/home/preview/preview.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Item1Component } from './components/about/item1/item1.component';
import { Item2Component } from './components/about/item2/item2.component';
import { OurTeamComponent } from './components/about/our-team/our-team.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/form/form.component';
import { ContactCardsComponent } from './components/contact/cards/cards.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PricingCard1Component } from './components/pricing/pricing-card1/pricing-card1.component';
import { PricingCard2Component } from './components/pricing/pricing-card2/pricing-card2.component';
import { PricingCard3Component } from './components/pricing/pricing-card3/pricing-card3.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqAccordion1Component } from './components/faq/faq-accordion1/faq-accordion1.component';
import { FaqAccordion2Component } from './components/faq/faq-accordion2/faq-accordion2.component';
import { FaqContactUsComponent } from './components/faq/faq-contact-us/faq-contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeHeaderComponent,
    AboutHeaderComponent,
    FeaturesComponent,
    PreviewComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    Item1Component,
    Item2Component,
    OurTeamComponent,
    ContactComponent,
    ContactFormComponent,
    ContactCardsComponent,
    PricingComponent,
    PricingCard1Component,
    PricingCard2Component,
    PricingCard3Component,
    FaqComponent,
    FaqAccordion1Component,
    FaqAccordion2Component,
    FaqContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
