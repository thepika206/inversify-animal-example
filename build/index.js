"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var company = inversify_config_1.container.get(types_1.COMPANY);
console.log(company.getEmployee());
