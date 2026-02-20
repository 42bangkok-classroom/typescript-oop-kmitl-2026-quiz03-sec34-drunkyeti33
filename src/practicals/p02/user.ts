export class User {
    firstname?:string
    lastname?:string
    private age?:number
    BIRTH_YEAR: number
    
    setFirstname(firstname:string){
        return this.firstname = firstname
    }
setLastname(lastname:string){
    return this.lastname = lastname
}
setAge(age:number){
    return this.age = age
}
getAge(){
    return this.age
}
BIRTH_YEAR = 2025 - this.age
getFullName(){
    return this.firstname + ' ' + this.lastname
}
}
