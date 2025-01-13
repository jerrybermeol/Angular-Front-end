import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../consumo.service';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from '../filter.pipe';  // Importa el Pipe para filtrar datos
import { FormsModule } from '@angular/forms';  // Importa FormsModule para ngModel


// @Component({
//   selector: 'app-consumo',
//   imports: [],
//   templateUrl: './consumo.component.html',
//   styleUrl: './consumo.component.css'
// })

@Component({
  selector: 'app-consumo',
  standalone: true,  // Marca el componente como autónomo
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css'],
  imports: [CommonModule, FormsModule, FilterPipe]  // Añadir FormsModule aquí

})

export class ConsumoComponent implements OnInit {
  consumoData: any;
  searchTerm: string = '';  // Para el filtro de búsqueda

  constructor(private consumoService: ConsumoService) { }

  ngOnInit(): void {
    this.consumoService.getConsumo().subscribe(data => {
      this.consumoData = data;
    }, error => {
      console.error('Error al obtener los datos', error);
      alert('Hubo un problema al cargar los datos. Por favor, intenta de nuevo más tarde.');
    });
  }
}
