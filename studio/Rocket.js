"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMassKg = 0;
        for (var i = 0; i < items.length; i++) {
            totalMassKg += items[i].massKg;
        }
        return totalMassKg;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    };
    Rocket.prototype.canAdd = function (item) {
        var canIAdd = false;
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            canIAdd = true;
        }
        return canIAdd;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var canAddCargo = false;
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            canAddCargo = true;
        }
        return canAddCargo;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var canAddAstronaut = false;
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            canAddAstronaut = true;
        }
        return canAddAstronaut;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
