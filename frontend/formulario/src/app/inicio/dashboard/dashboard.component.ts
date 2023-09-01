import Swal from 'sweetalert2';
import { ServiceService } from './../../service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  comunas: any[] = [];
  selectedComuna: string = '';
  nombre: string = ''; 

  
  nombreValido: boolean = true; 
  apellido: string = ''; 
  apellidoValido: boolean = true;
  telefono: string = '';  
  telefonoValido: boolean = true; 
 
  
  constructor(
    private ServiceService: ServiceService,
    private router: Router,
    public dialog: MatDialog
    
    
    
  ) { }
  ngOnInit() {
    this.obtenerComunas();
  }

  async obtenerComunas() {
    try {
      this.comunas = await this.ServiceService.getComunas();
    } catch (error) {
      console.error('Error al obtener las comunas:', error);
    }
  }

  validarComuna() {
    if (this.selectedComuna === '') {
      console.log('Debes seleccionar una comuna');
    } else {
      console.log('Comuna seleccionada:', this.selectedComuna);
    }
  }

  validarNombre() {
    if (this.nombre.trim() === '') {
      this.nombreValido = false;
    } else {
      this.nombreValido = true;
    }
  }
  
  validarApellido() {
    if (this.apellido.trim() === '') {
      this.apellidoValido = false;  
    } else {
      this.apellidoValido = true;
    }
  }

  validarTelefono() {
    const pattern = /^[0-9]+$/;
    this.telefonoValido = pattern.test(this.telefono) && this.telefono.length <= 9;
  }

  
  
  async enviarRegistro() {
    let request = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "telefono": this.telefono,
      "comuna": this.selectedComuna
    };
  
    try {
      let responseRegisterUser = await this.ServiceService.postRegisterUser(request).toPromise();
      console.log(responseRegisterUser);
  
      Swal.fire({
        icon: 'success',
        title: 'Usuario creado exitosamente',
        text: 'El usuario ha sido registrado correctamente.'
      });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  }

  loginUser() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px', 
      
    });
  
    
  }
}
