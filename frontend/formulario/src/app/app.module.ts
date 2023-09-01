import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { DashboardComponent } from './inicio/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ServiceService } from './service.service'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule } from '@angular/material/dialog';
import { ListarComponent } from './auth/listar/listar.component';
import { UpdateComponent } from './auth/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    ListarComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
