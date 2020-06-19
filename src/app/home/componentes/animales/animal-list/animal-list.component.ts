import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../services/animal.service';
import { Animal } from '../../../modelos/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  animalList: Animal[];

  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.animalService.getAnimales()
    .snapshotChanges()
    .subscribe(item => {
      this.animalList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.animalList.push(x as Animal);
      });
    });
  }

  onEdit(animal: Animal){
    this.animalService.selectedAnimal = Object.assign({},animal);
  }

  onDelete($key: string){
    this.animalService.deleteAnimal($key);
  }

}
