import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from './../../service.service'; 
import Swal from 'sweetalert2';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  data: { usuarioSeleccionado: any };

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: { usuarioSeleccionado: any },
    private dialogRef: MatDialogRef<UpdateComponent>,
    private serviceService: ServiceService
  ) {
    this.data = dialogData;
  }

  async guardarUsuario() {
    const userId = this.data.usuarioSeleccionado.id;
    let request = {
      "nombre": this.data.usuarioSeleccionado.nombre,
      "apellido": this.data.usuarioSeleccionado.apellido,
      "telefono": this.data.usuarioSeleccionado.telefono,
      "comuna": this.data.usuarioSeleccionado.comuna
    };
  
    try {
      let responseRegisterUser = await lastValueFrom(this.serviceService.updateUser(userId, request));
      console.log(responseRegisterUser);
  
      Swal.fire({
        icon: 'success',
        title: 'Usuario Modificado',
        text: 'El usuario se ha sido Modificado correctamente.'
      }).then(() => {
        this.dialogRef.close(); // Cierra la ventana después de mostrar el mensaje
      });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  }
  
  
}
