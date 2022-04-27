import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { EducacionComponent } from './educacion/education.component';
import { ProjectComponent } from './proyectos/project.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'about',
        component: AboutComponent ,
    },
    {
        path: 'experience',
        component: ExperienceComponent,
    },
    {
        path: 'education',
        component: EducacionComponent
    },
    {
        path: 'proyectos',
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