import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-expystudy',
  templateUrl: './expystudy.component.html',
  styleUrls: ['./expystudy.component.scss']
})
export class ExpystudyComponent implements OnInit {
  educacionList: any;
  experienceList: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.educacionList=data.educacion
      this.experienceList=data.experience
    })
  }

}
