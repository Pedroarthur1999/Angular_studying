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

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponentComponent,
    TerceiroComponentComponent,
    MultiplicaPorPipe,
    TwoWayDataBindingComponent,
    ListaCelularesComponent
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
