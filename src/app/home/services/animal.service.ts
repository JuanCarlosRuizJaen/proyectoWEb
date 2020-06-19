import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Animal } from '../modelos/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animalList: AngularFireList<any>;
  selectedAnimal: Animal = new Animal();

  constructor(private firebase: AngularFireDatabase) { }

  getAnimales()
  {
    return this.animalList = this.firebase.list('Animales');
  }

  insertAnimal(animal: Animal)
  {
    this.animalList.push({
      arete: animal.arete,
      nombre: animal.nombre,
      raza: animal.raza,
      sexo: animal.sexo,
      edad: animal.edad
    });
  }

  updateAnimal(animal: Animal)
  {
    this.animalList.update(animal.$key, {
      arete: animal.arete,
      nombre: animal.nombre,
      raza: animal.raza,
      sexo: animal.sexo,
      edad: animal.edad
    });
  }

  deleteAnimal($key: string)
  {
    this.animalList.remove($key);
  }
}
