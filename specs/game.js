var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Task = require("../task");

describe("Heroes and Rats game", function(){

  beforeEach( function(){
    donatello = new Hero("Donatello");
    save_world = new Task(1, 10, 50);
    pizza = new Food("Pizza", 30);

  })

  it("Hero speaks" , function(){
    assert.strictEqual(donatello.introduce(), "Hi I am Donatello!")
  })


})