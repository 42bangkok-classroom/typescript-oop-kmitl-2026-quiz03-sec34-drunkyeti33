import { Character } from "./character";

export class Warrior extends Character {
  name?:string
  weapon?:string
  health:number
  constructor(name:string,weapon:string,health:number){
    super()
    this.name = name
    this.weapon = weapon
    this.health = health
  }
  getWeapon(){
    return this.weapon}

    receiveDamage(damage: number){
    return this.health = this.health - damage*0.9
  }
  // TODO: implement class properties, constructor with super(...), and methods
}
