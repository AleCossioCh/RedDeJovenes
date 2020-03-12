import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ShowHistoriaVidaTextoComponent } from './components/historiasVida/historia-vida-texto/historiaVidaTexto/show-historia-vida-texto/show-historia-vida-texto.component';
import { EditHistoriaVidaTextoComponent } from './components/historiasVida/historia-vida-texto/historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';
import { AddHistoriaVidaTextoComponent } from './components/historiasVida/historia-vida-texto/historiaVidaTexto/add-historia-vida-texto/add-historia-vida-texto.component';
import { HistoriaVidaTextoComponent } from './components/historiasVida/historia-vida-texto/historia-vida-texto.component';
import { AddHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/add-historia-vida-audio/add-historia-vida-audio.component';
import { EditHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/edit-historia-vida-audio/edit-historia-vida-audio.component';
import { ShowHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/show-historia-vida-audio/show-historia-vida-audio.component';
import { HistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historia-vida-audio.component';
import { HistoriaVidaVideoComponent } from './components/historiasVida/historia-vida-video/historia-vida-video.component';
import { EditHistoriaVidaVideoComponent } from './components/historiasVida/historia-vida-video/historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';
import { AddHistoriaVidaVideoComponent } from './components/historiasVida/historia-vida-video/historiaVidaVideo/add-historia-vida-video/add-historia-vida-video.component';
import { ShowHistoriaVidaVideoComponent } from './components/historiasVida/historia-vida-video/historiaVidaVideo/show-historia-vida-video/show-historia-vida-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowHistoriaVidaTextoComponent,
    EditHistoriaVidaTextoComponent,
    AddHistoriaVidaTextoComponent,
    HistoriaVidaTextoComponent,
    AddHistoriaVidaAudioComponent,
    EditHistoriaVidaAudioComponent,
    ShowHistoriaVidaAudioComponent,
    HistoriaVidaAudioComponent,
    HistoriaVidaVideoComponent,
    EditHistoriaVidaVideoComponent,
    AddHistoriaVidaVideoComponent,
    ShowHistoriaVidaVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
