import { Component, OnInit } from '@angular/core';
import { StepperIndicatorComponent } from "../../components/stepper-indicator/stepper-indicator.component";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerIntl, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import 'moment/locale/es';
@Component({
  selector: 'app-course-register',
  standalone: true,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    provideMomentDateAdapter(),
  ],
  imports: [StepperIndicatorComponent, ReactiveFormsModule, FormsModule, CommonModule, RouterLink, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './course-register.component.html',
  styleUrl: './course-register.component.scss'
})

export class CourseRegisterComponent {
   // Variable para determinar si tiene convenio
   tieneConvenio: boolean = false;

   // Variable para capturar la selección del tipo de convenio
   categoriaConvenio: string = '';
 
   // Variable para capturar la selección del tipo de servicio
   tipoServicio: string = '';

  //-------------------------------------- UNIDAD  RESPONSABLE ---------------------------------------

  dvdrsOptions = [
    'Centro de Vinculación y Desarrollo Regional Unidad Tampico',
    'Centro de Vinculación y Desarrollo Regional Culiacán',
    'Centro de Vinculación y Desarrollo Regional Unidad Cajeme',
    'Centro de Vinculación y Desarrollo Regional Unidad Cancún',
    'Centro de Vinculación y Desarrollo Regional Unidad Campeche',
    'Centro de Vinculación y Desarrollo Regional Durango',
    'Centro de Vinculación y Desarrollo Regional Unidad Los Mochis',
    'Centro de Desarrollo y Vinculación Regional Unidad Mazatlán',
    'Centro de Vinculación y Desarrollo Regional Unidad Morelia',
    'Centro de Vinculación y Desarrollo Regional Unidad Tlaxcala',
    'Centro de Vinculación y Desarrollo Regional Unidad Oaxaca',
    'Centro de Vinculación y Desarrollo Regional Unidad Tijuana'
  ];

  cittasOptions = [
    'Centro de Innovación e Integración de Tecnologías Avanzadas Chihuahua',
    'Centro de Innovación e Integración de Tecnologías Avanzadas Puebla',
    'Centro de Innovación e Integración de Tecnologías Avanzadas Veracruz'
  ];

  dateFormatString = "YYYY/MMM/dd";

  // Esta función actualiza las opciones del segundo select
  onUnidadChange(event: any) {
    const selectedUnidad = event.target.value;
    const secondSelect = document.getElementById('unidad-secundaria') as HTMLSelectElement;
    
    // Limpia las opciones actuales
    secondSelect.innerHTML = '';

    // Crea una nueva opción por defecto
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Seleccionar unidad específica';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    secondSelect.add(defaultOption);

    // Agrega las opciones correspondientes
    let options: string[] = []; 
    if (selectedUnidad === 'dvdrs') {
      options = this.dvdrsOptions;
    } else if (selectedUnidad === 'cittas') {
      options = this.cittasOptions;
    }

    // Añade las nuevas opciones al segundo select
    options.forEach(optionText => {
      const option = document.createElement('option');
      option.text = optionText;
      secondSelect.add(option);
    });
  }

 //-------------------------------------- AUTORES  ---------------------------------------

  personas: string[] = [
    'Juan Pérez',
    'María Gómez',
    'Carlos López',
    'Ana Martínez',
    'Jorge Rodríguez'
  ];

  selectedPersona: string = '';
  seleccionados: { nombre: string, rol: string }[] = [];

  // Método para agregar personas a la tabla
  addPersona() {
    if (this.selectedPersona) {
      const personaExistente = this.seleccionados.find(p => p.nombre === this.selectedPersona);

      if (!personaExistente) {
        this.seleccionados.push({ nombre: this.selectedPersona, rol: 'Autor' }); // Por defecto como 'Autor'
        this.selectedPersona = ''; // Limpiar la selección
      }
    }
  }

  // Método para eliminar personas de la tabla
  removePersona(index: number) {
    this.seleccionados.splice(index, 1);
  }
  

   //-------------------------------------- CRONOGRAMA  ---------------------------------------
   
  cronograma = new FormGroup({
    fechaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required),
    horasTotales: new FormControl('', [Validators.required, Validators.min(1)]),
    horaInicio: new FormControl('', Validators.required),
    horaFin: new FormControl('', Validators.required),
    dias: new FormGroup({
      lunes: new FormControl(false),
      martes: new FormControl(false),
      miercoles: new FormControl(false),
      jueves: new FormControl(false),
      viernes: new FormControl(false),
      sabado: new FormControl(false),
      domingo: new FormControl(false),
    })
  });
  
// Evento para actualizar fecha y forzar la detección de cambios
onFechaChange(controlName: string, event: any) {
  const fecha = event.target.value;
  this.cronograma.get(controlName)?.setValue(fecha);
  this.cronograma.get(controlName)?.updateValueAndValidity();  // Forzar detección de cambios
  console.warn(this.cronograma.get(controlName)?.value);
}

  generarCronograma() {
    const formValues = this.cronograma.value;
    var x = (this.cronograma.get("fechaInicio")?.value);


    // Ahora puedes usar estas variables en tu lógica
    const fechaInicio = formValues.fechaInicio;
    const fechaFin = formValues.fechaFin;
    const horasTotales = formValues.horasTotales;
    const horaInicio = formValues.horaInicio;
    const horaFin = formValues.horaFin;
    const diasSeleccionados = formValues.dias;

    console.log(fechaInicio, fechaFin, horasTotales, horaInicio, horaFin, diasSeleccionados);
  }

}