export class User {
    firstname?:string
    lastname?:string
    private age?:number
    static BIRTH_YEAR: number = 2000
    
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

getFullName(){
    return this.firstname + " "  + this.lastname
}
}
