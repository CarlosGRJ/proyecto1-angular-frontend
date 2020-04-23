import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente {

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor() {
        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es mi primer componente";
        this.year = 2021;
        this.mostrarPeliculas = true;

        console.log("Componente mi-componente cargado!!");
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarPeliculas() {
        this.mostrarPeliculas = false;
    }

}