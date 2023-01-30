"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var dog1 = inversify_config_1.container.get(types_1.TYPES.DOG);
console.log(dog1.wagTail());
console.log(dog1.animal);
