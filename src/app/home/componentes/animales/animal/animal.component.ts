import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../services/animal.service';
import { NgForm } from '@angular/forms';
import { Animal } from '../../../modelos/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  constructor(public animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAnimales();
    this.resetForm();
  }


  onSubmit(animalForm: NgForm)
  {
    if (animalForm.value.$key == null)
      this.animalService.insertAnimal(animalForm.value)
    else 
      this.animalService.updateAnimal(animalForm.value);
    this.resetForm(animalForm);
  }

  resetForm(animalForm?: NgForm)
  {
    if(animalForm != null)
    animalForm.reset();
    this.animalService.selectedAnimal = new Animal();
  }

}
