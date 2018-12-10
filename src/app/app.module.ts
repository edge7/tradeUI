import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualTrading} from './manualTrading.component';
import { HttpClientModule } from '@angular/common/http';
import {HTTPService} from './http.service';


const appRoutes: Routes = [
{ path: 'manual', component: ManualTrading },

];

@NgModule({
  declarations: [
    AppComponent,
    ManualTrading
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
          appRoutes,
      ),
    HttpClientModule
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { };
