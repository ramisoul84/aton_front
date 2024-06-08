import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './_services/auth.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
