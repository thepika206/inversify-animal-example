import { Container } from "inversify";
import { Dog, Animal } from "./service";
import { TYPES } from "./types";

const container = new Container()
container.bind(TYPES.ANIMAL).to(Animal)
container.bind(TYPES.DOG).to(Dog)

export { container }