import { inject, injectable } from "inversify";
import { DogInterface, AnimalInterface } from "./interface";
import { TYPES } from "./types";

@injectable()
class Animal implements AnimalInterface {
  species: string = 'unknown species'
  
  public eats(food: string = 'generic food'):string{
    return `eats some ${food}`
  }

}

@injectable()
class Dog implements DogInterface{
  public animal:AnimalInterface

  constructor( @inject(TYPES.ANIMAL) animal:AnimalInterface){
    this.animal = animal
    this.animal.species = "Canine"
    
  }

  public wagTail():string {
    let statement = `The Dog (${this.animal.species}) wags its tails and ${this.animal.eats('kibble')}`
    return statement
  }
}

export { Animal, Dog }