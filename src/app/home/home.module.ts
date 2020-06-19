import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { AnimalListComponent } from './componentes/animales/animal-list/animal-list.component';
import { AnimalComponent } from './componentes/animales/animal/animal.component';
import { AnimalService } from './services/animal.service';


@NgModule({
  declarations: [
    HomeComponent,
    AnimalesComponent,
    AnimalListComponent,
    AnimalComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    AnimalService
  ],
  bootstrap: [HomeComponent]
}) 
export class HomeModule { }
