export interface AnimalInterface {
  eats(food:string):string,
  species:string
}

export interface DogInterface {
  wagTail():string,
  animal:object
}