import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CidadesService } from './cidades.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';

@NgModule({
  declarations: [CidadesCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    CidadesCadastroComponent
  ],
  providers:[
    CidadesService
  ]
})
export class CidadesModule { }
