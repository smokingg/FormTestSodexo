import { Component } from '@angular/core';
import { ServiceService } from './../../service.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  usuariosRegistrados: any[] = [];
  usuarioSeleccionado: any;

  constructor(
    private ServiceService: ServiceService,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<UpdateComponent>
   ) { 
    console.log('UpdateComponent constructor');
   }

   ngOnInit() {
    this.validaUsuario();
  }
  async validaUsuario() {
    this.usuariosRegistrados = await this.ServiceService.getlistarNombres();
    console.log(this.usuariosRegistrados)
  }

  

  actualizarUsuario(usuario: any) {
   
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1200px', 
      data: { usuarioSeleccionado: usuario }
    });
    
  }
  
  eliminarUsuario(usuario: any) {
    const userId = usuario.id;
  
    this.ServiceService.deleteUser(userId).then(() => {
     
      Swal.fire({
        icon: 'success',
        title: 'Usuario eliminado',
        text: `El usuario "${usuario.nombre}" ha sido eliminado con éxito.`,
      });
  
      
      this.validaUsuario();
    }).catch(error => {
      console.error('Error al eliminar el usuario:', error);
  
      
      Swal.fire({
        icon: 'error',
        title: 'Error al eliminar',
        text: 'Ha ocurrido un error al eliminar el usuario.',
      });
    });
  }

  cerrarTabla(){
    this.dialogRef.close();
  }
  
}
