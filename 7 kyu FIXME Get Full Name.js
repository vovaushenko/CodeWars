// https://www.codewars.com/kata/597c684822bc9388f600010f

class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName
  }
  
  getFullName(){
    let fullName = this.firstName+" "+this.lastName
    return fullName.trim()
  }
  
}
