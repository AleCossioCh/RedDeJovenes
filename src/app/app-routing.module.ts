import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMisionComponent } from './components/mision/edit-mision/edit-mision.component';
import { EditVisionComponent } from './components/vision/edit-vision/edit-vision.component';
import { EditObjetivoComponent } from './components/objetivo/edit-objetivo/edit-objetivo.component';
import {ShowHistoriaVidaTextoComponent} from './components/historiasVida/historia-vida-texto/historiaVidaTexto/show-historia-vida-texto/show-historia-vida-texto.component';
import {EditHistoriaVidaTextoComponent} from './components/historiasVida/historia-vida-texto/historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';

import {ShowHistoriaVidaVideoComponent} from './components/historiasVida/historia-vida-video/historiaVidaVideo/show-historia-vida-video/show-historia-vida-video.component';
import {EditHistoriaVidaVideoComponent} from './components/historiasVida/historia-vida-video/historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';
import{HomeComponent}from './components/home/home.component';
import{ShowHistoriaVidaAudioComponent}from './components/historiasVida/historia-vida-audio/historiaVidaAudio/show-historia-vida-audio/show-historia-vida-audio.component';
///////CONTACTANOS
import{ShowContactanosComponent} from './components/Contactanos/show-contactanos/show-contactanos.component';
///////CONVENIOS
import{ShowConvenioComponent} from './components/Convenio/show-convenio/show-convenio.component';
///////REFERENTES
import{ShowEducacionComponent} from './components/Referente/Educacion/show-educacion/show-educacion.component';
import{ShowSaludComponent} from './components/Referente/Salud/show-salud/show-salud.component';
import{ShowTrabajoComponent} from './components/Referente/Trabajo/show-trabajo/show-trabajo.component';
import{ShowViviendaComponent} from './components/Referente/Vivienda/show-vivienda/show-vivienda.component';
////////PODCAST
import{ShowPodcastComponent} from './components/Podcast/show-podcast/show-podcast.component';
////////TE OFECEMOS
import{ShowToTrabajoComponent}from './components/te_ofrecemos/to_trabajo/show-to-trabajo/show-to-trabajo.component';
import{ShowToBecaComponent}from './components/te_ofrecemos/to_beca/show-to-beca/show-to-beca.component';
import{ShowToViviendaComponent}from './components/te_ofrecemos/to_vivienda/show-to-vivienda/show-to-vivienda.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'edit_mision', component:EditMisionComponent},
  {path: 'edit_vision', component:EditVisionComponent},
  {path: 'edit_objetivos', component:EditObjetivoComponent},
  {path: 'showHVT', component:ShowHistoriaVidaTextoComponent},
  {path: 'editHVT', component:EditHistoriaVidaTextoComponent},
  {path: 'showHVV', component:ShowHistoriaVidaVideoComponent},
  {path: 'editHVV', component:EditHistoriaVidaVideoComponent},
  {path: 'showHVA', component:EditHistoriaVidaVideoComponent},
  {path: 'showContactanos', component:ShowContactanosComponent},
  {path: 'showConvenios', component:ShowConvenioComponent},
  {path: 'showRefEducacion', component:ShowEducacionComponent},
  {path: 'showRefSalud', component:ShowSaludComponent},
  {path: 'showRefTrabajo', component:ShowTrabajoComponent},
  {path: 'showRefVivienda', component:ShowViviendaComponent},
  {path: 'showPodcast', component:ShowPodcastComponent},
  {path: 'showToTrabajo', component:ShowToTrabajoComponent},
  {path: 'showToBeca', component:ShowToBecaComponent},
  {path: 'showToVivienda', component:ShowToViviendaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
