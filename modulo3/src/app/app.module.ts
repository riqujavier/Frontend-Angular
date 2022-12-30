import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExpystudyComponent } from './componentes/expystudy/expystudy.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { PortfolioService } from './servicios/portfolio.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    ExpystudyComponent,
    SkillsComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PorfolioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PortfolioService,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
