export class Character {
    name?:string
    health:number = 100
    getName(){
        return this.name
    }
    receiveDamage(damage: number){
        return this.health = this.health - damage
    }
    getHealth(){
        return this.health
    }
}
