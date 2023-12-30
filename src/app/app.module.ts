import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { StoreComponent } from './store/store.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

// import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    SingleproductComponent,
    StoreComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,

  ],
  providers: [
  //   { provide: APP_BASE_HREF, useValue: '/angular-demo/' },
  // { provide: LocationStrategy, useClass: PathLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
