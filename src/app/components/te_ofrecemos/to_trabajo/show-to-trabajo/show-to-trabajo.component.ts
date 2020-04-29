import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { TeofrecemosService } from 'src/app/services/teofrecemos.service';
import { Subscriber} from 'rxjs';
import { TeOfrecemos } from 'src/app/models/TeOfrecemos';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddToBecaComponent}from 'src/app/components/te_ofrecemos/to_beca/add-to-beca/add-to-beca.component';
import{EditHistoriaVidaTextoComponent}from 'src/app/components/historiasVida/historia-vida-texto/historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { EditToTrabajoComponent } from '../edit-to-trabajo/edit-to-trabajo.component';
import { AddToTrabajoComponent } from '../add-to-trabajo/add-to-trabajo.component';

@Component({
  selector: 'app-show-to-trabajo',
  templateUrl: './show-to-trabajo.component.html',
  styleUrls: ['./show-to-trabajo.component.css']
})
export class ShowToTrabajoComponent implements OnInit {

  teofrecemos:TeOfrecemos[];

  dataSource=null;
  constructor(private snackBar:MatSnackBar,private teofrecemosService: TeofrecemosService, private router: Router,private dialog: MatDialog) {
    this.teofrecemosService.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();
    });
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.teofrecemosService.getTeOfrecemosTrabajo().subscribe(data =>{
      this.teofrecemos = data;
      this.charge();
    });
  }

  charge(){
    this.teofrecemosService.getTeOfrecemosTrabajo().subscribe(data=>{
      this.teofrecemos=data;
    });
  }

  edit_Trabajo(teOfrecemos: TeOfrecemos){
    this.teofrecemosService.formData=teOfrecemos;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditToTrabajoComponent,dialogConfig);

   localStorage.setItem("id_teOfrecemos", teOfrecemos.id_teOfrecemos .toString());
  }

  Delete(teOfrecemos: TeOfrecemos){
    if(confirm('Estas seguro de eliminar ? ')){
      this.teofrecemosService.deleteHVT(teOfrecemos)
      .subscribe(data=>{
        //.historiasHVT=this.historiasHVT.filter(p=>p.id_HVT!==historiaVidaTexto.id_HVT);
        this.charge();
        this.snackBar.open('Eliminado Correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });
     });
    }
   }

  AddTrabajo(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddToTrabajoComponent,dialogConfig);
  }
}
