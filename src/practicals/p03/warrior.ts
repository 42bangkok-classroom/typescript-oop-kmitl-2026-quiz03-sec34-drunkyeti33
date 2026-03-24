import { Character } from "./character";

export class Warrior extends Character {
  weapon: string = "";
  constructor(name: string, weapon: string, health: number = 100) {
    super(name, health);
    this.weapon = weapon;
  }
  getWeapon() {
    return this.weapon;
  }

  receiveDamage(damage: number) {
    return (this.health = this.health - damage * 0.9);
  }
}
