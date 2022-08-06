import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PreheaderComponent } from './components/preheader/preheader.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products-component/products/products.component';
import { ProductCardComponent } from './components/products-component/product-card/product-card.component';
import { OfferButtonComponent } from './components/products-component/offer-button/offer-button.component';
import { LastShowCardComponent } from './components/products-component/last-show-card/last-show-card.component';
import { ProductService} from './services/product.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreheaderComponent,
    HeroComponent,
    ProductsComponent,
    ProductCardComponent,
    OfferButtonComponent,
    LastShowCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
