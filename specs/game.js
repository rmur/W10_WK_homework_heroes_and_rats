var assert = require("assert");
var Hero = require("../hero.js");
var Food = require("../food.js");
var Task = require("../task.js");

describe("Heroes and Rats game", function(){

  beforeEach( function(){
    donatello = new Hero("Donatello");
    save_world = new Task(1, 10, 50);
    pizza = new Food("Pizza", 30);

  })


})