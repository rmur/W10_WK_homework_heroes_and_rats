var Hero = function(name){
  this.name = name;
  this.favouriteFood = "Pizza";
  this.health = 100;
  this.tasks = [];
}

Hero.prototype.introduce = function(){
  return "Hi I am " + this.name +"!";
}

Hero.prototype.eat =function(food){
  if (food.name == this.favouriteFood){
  this.health += (food.replenishmentValue *1.5);}
  else {this.health += food.replenishmentValue;}
  return this.health; 
}

module.exports = Hero;