import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, "https://media.gq.com.mx/photos/5d73e8c2a18cf800091652cb/16:9/w_1920,c_limit/maxresdefault.jpg"),
            new Pelicula("Los vengadores Endgame", 2018, "https://as.com/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg"),
            new Pelicula("Batman vs Superman", 2015, "https://as.com/ocio/imagenes/2016/03/22/cine/1458639537_473504_1458639748_noticia_grande.jpg")
          ];
    }

    holaMundo() {
        return 'Hola Mundo desde un servicio de Angular';
    }

    getPeliculas() {
        return this.peliculas;
    }
}
