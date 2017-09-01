var Hero = function(name){
  this.name = name;
  favouriteFood = "Pizza";
  health = 100;
  tasks = [];
}

Hero.prototype.introduce = function(){
  return "Hi I am " + this.name +"!";
}

module.exports = Hero;