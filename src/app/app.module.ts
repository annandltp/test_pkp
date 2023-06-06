import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductViewModel } from './viewmodels/product.viewmodel';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProductViewModel],
  bootstrap: [AppComponent],
})
export class AppModule {}
