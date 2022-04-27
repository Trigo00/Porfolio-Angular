import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { EducacionComponent } from './educacion/education.component';
import { ProjectComponent } from './proyectos/project.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent ,
    },
    {
        path: 'experience',
        component: ExperienceComponent,
    },
    {
        path: 'Educacion',
        component: EducacionComponent
    },
    {
        path: 'Proyectos',
        component: ProjectComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}