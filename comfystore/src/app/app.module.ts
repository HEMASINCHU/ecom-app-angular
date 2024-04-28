import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/product.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductFilterPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot({ productDetail: productReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
