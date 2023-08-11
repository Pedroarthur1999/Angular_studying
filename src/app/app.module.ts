import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente-component/primeiro-componente-component.component';
import { SegundoComponenteComponentComponent } from './segundo-componente-component/segundo-componente-component.component';
import { TerceiroComponentComponent } from './terceiro-component/terceiro-component.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { ListaCelularesComponent } from './lista-celulares/lista-celulares.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { ElementoPaiComponent } from './elemento-pai/elemento-pai.component';
import { ElementoFilhoComponent } from './elemento-filho/elemento-filho.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServicesTwoComponent } from './services-two/services-two.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponentComponent,
    TerceiroComponentComponent,
    MultiplicaPorPipe,
    TwoWayDataBindingComponent,
    ListaCelularesComponent,
    FontSizeComponent,
    ElementoPaiComponent,
    ElementoFilhoComponent,
    ComponentePersonalizadoComponent,
    ServiceOneComponent,
    ServicesTwoComponent,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
