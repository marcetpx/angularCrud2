import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private libros: Libro[] = [
    {
      id: 1,
      titulo: '1984',
      autor: 'George Orwell',
      año: 1949
    },
    {
      id: 2,
      titulo: 'El principito',
      autor: 'Antoine de Saint-Exupéry',
      año: 1943
    },
    {
      id: 3,
      titulo: 'Don Quijote',
      autor: 'Miguel de Cervantes',
      año: 1605
    }
  ];

  obtenerLibros(): Libro[] {
    return this.libros;
  }

  agregarLibro(libro: Libro): void {
    libro.id = this.libros.length + 1;
    this.libros.push(libro);
  }

  eliminarLibro(id: number): void {
    this.libros = this.libros.filter(libro => libro.id !== id);
  }

  actualizarLibro(libro: Libro): void {

    const posicion = this.libros.findIndex(
      l => l.id === libro.id
    );

    if (posicion !== -1) {
      this.libros[posicion] = libro;
    }
  }
}