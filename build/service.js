"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Animal = void 0;
var inversify_1 = require("inversify");
var types_1 = require("./types");
var Animal = /** @class */ (function () {
    function Animal() {
        this.species = 'unknown species';
    }
    Animal.prototype.eats = function (food) {
        if (food === void 0) { food = 'generic food'; }
        return "eats some ".concat(food);
    };
    Animal = __decorate([
        (0, inversify_1.injectable)()
    ], Animal);
    return Animal;
}());
exports.Animal = Animal;
var Dog = /** @class */ (function () {
    function Dog(animal) {
        this.animal = animal;
        this.animal.species = "Canine";
    }
    Dog.prototype.wagTail = function () {
        var statement = "The Dog (".concat(this.animal.species, ") wags its tails and ").concat(this.animal.eats('kibble'));
        return statement;
    };
    Dog = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(types_1.TYPES.ANIMAL)),
        __metadata("design:paramtypes", [Object])
    ], Dog);
    return Dog;
}());
exports.Dog = Dog;
