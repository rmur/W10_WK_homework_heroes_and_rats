var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Task = require("../task");

describe("Heroes and Rats game", function(){

  beforeEach( function(){
    donatello = new Hero("Donatello");
    save_world = new Task(1, 10, 50);
    pizza = new Food("Pizza", 30);
    cheese = new Food("Cheese", 15);

  })

  it("Hero speaks" , function(){
    assert.strictEqual(donatello.introduce(), "Hi I am Donatello!");
  })

  it("Task completion method", function(){
    save_world.complete();
    assert.equal(save_world.completion, true);
  })

  it("Eat and heal", function(){
    donatello.eat(cheese);
    assert.strictEqual(donatello.health, 115);
  })

  it("Favourite food gives 1,5 to health", function(){
    donatello.eat(pizza);
    assert.strictEqual(donatello.health,145);
  })


})