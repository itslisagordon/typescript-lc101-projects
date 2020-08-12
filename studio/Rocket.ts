import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
       this.name = name;
       this.totalCapacityKg = totalCapacityKg;
    }
    
    sumMass( items: Payload[] ): number {
        let totalMassKg: number = 0;
        
        for (let i = 0; i < items.length; i++) {
            totalMassKg += items[i].massKg;
        }

        return totalMassKg;
    }

    currentMassKg(): number {
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        
        return astronautMass + cargoMass;
    }

    canAdd(item: Payload): boolean {
        let canIAdd: boolean = false;
        
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            canIAdd = true;
        }
        
        return canIAdd;
    }

    addCargo(cargo: Cargo): boolean {
        let canAddCargo: boolean = false;
        
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            canAddCargo = true;
        }

        return canAddCargo;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let canAddAstronaut: boolean = false;
        
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            canAddAstronaut = true;
        }

        return canAddAstronaut;
    }

 }