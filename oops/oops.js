class User{
    constructor(a,b){
        this.fname=a;
        this.lname=b;
    }
    fullname(){
        return this.fname+this.lname;
    }
    login()
    {
        return`login successfully $(this.fullname())`;
    }
}

class Paiduser extends User {
    constructor(b,c)
    {
        super(b,c);
        this.data=100;
    }
    message ()
    {
        return `${this.data}GB Free`;
    }
    login()
    {
        return `welcome ${this.fullname()}`;
    }
}
var user1=new User("ram","raj");
console.log(user1.fullname());
 var user2=new Paiduser ("mohan","lal");    
 console.log(user2.message())
console.log(user2.login());