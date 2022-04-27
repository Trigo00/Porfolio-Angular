import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducacionComponent } from './educacion/education.component';
import { ProjectComponent } from './proyectos/project.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    EducacionComponent,
    ProjectComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    SidebarComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
