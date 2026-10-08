import { Service } from '@angular/core';

@Service()
export class Libro {}

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  año: number;
}