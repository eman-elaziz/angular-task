import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PreheaderComponent } from './components/preheader/preheader.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OfferButtonComponent } from './components/offer-button/offer-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreheaderComponent,
    HeroComponent,
    ProductsComponent,
    ProductCardComponent,
    OfferButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
