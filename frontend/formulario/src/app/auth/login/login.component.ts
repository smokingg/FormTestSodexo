import { Component } from '@angular/core';
import { ServiceService } from './../../service.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ListarComponent } from '../listar/listar.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  nombresUsuarios: string[] = [];

  constructor(
    private ServiceService: ServiceService,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>
    
    
    
  ) { }

  ngOnInit() {
    this.validaUsuario();
  }
  
  async validaUsuario() {
    let usuariosRegistrados = await this.ServiceService.getlistarNombres();
    this.nombresUsuarios = usuariosRegistrados.map((usuario: { nombre: any; }) => usuario.nombre);
    console.log(this.nombresUsuarios);
  }
  
  iniciarSesion() {
    const nombreUsuario = this.username;
    if (this.nombresUsuarios.includes(nombreUsuario)) {
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado',
        text: `El usuario "${nombreUsuario}" si existe.`,
      });
      const dialogRef = this.dialog.open(ListarComponent, {
        width: '1200px', 
        
      });
      this.dialogRef.close();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Usuario no registrado',
        text: `El usuario "${nombreUsuario}" no existe.`,
      });
    }
  }
}
