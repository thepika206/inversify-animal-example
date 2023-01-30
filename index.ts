import "reflect-metadata"
import { DogInterface, AnimalInterface } from "./interface"
import { container } from "./inversify.config"
import { TYPES } from "./types"

const dog1 = container.get<DogInterface>(TYPES.DOG)
console.log(dog1.wagTail())
console.log(dog1.animal)