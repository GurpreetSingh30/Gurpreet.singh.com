import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyIntroductionComponent } from './my-introduction/my-introduction.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyIntroductionComponent,
    MySkillsComponent,
    MyWorkComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    HomeComponent,
    DataprotectionComponent,
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule,   
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
