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
  this.health += food.replenishmentValue;
  return this.health; 
}

module.exports = Hero;