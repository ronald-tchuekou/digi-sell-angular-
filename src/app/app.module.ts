import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { ImageComponent } from './banner/image/image.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { FeaturesProductsComponent } from './features-products/features-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    ImageComponent,
    WhyChooseComponent,
    FeaturesProductsComponent,
    NewProductsComponent,
    TestimoniesComponent,
    NewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
