import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  ocultarEdit0  () {
    const x = document.getElementById("proyect1") ;
    if (x!.contentEditable == "true") {
      x!.contentEditable = "false";
    
    } else {
      x!.contentEditable = "true";
    }
  }
  

  ocultarEdit  () {
  const x = document.getElementById("proyect2") ;
  if (x!.contentEditable == "true") {
    x!.contentEditable = "false";
  
  } else {
    x!.contentEditable = "true";
  
  }
}

 eliminarElemento(){
	let imagen = document.getElementById('proyect1');	
	if (!imagen){
		alert("El elemento selecionado no existe");
	} else {
		let padre = imagen.parentNode;
		padre!.removeChild(imagen);
	}
}


eliminarElemento2(){
	let imagen = document.getElementById('proyect2');	
	if (!imagen){
		alert("El elemento selecionado no existe");
	} else {
		let padre = imagen.parentNode;
		padre!.removeChild(imagen);
	}
}



}
