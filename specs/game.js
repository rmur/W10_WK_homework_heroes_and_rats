var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Task = require("../task");

describe("Heroes and Rats game", function(){

  beforeEach( function(){
    donatello = new Hero("Donatello");
    save_world = new Task(99, 1, 500);
    eat_pizza = new Task(5, 5, 20 );
    createNewTechnology = new Task(3, 10, 40);
    sleep = new Task( 2, 2, 0);
    workOut = new Task( 8, 6, 0);
    pizza = new Food("Pizza", 30);
    cheese = new Food("Cheese", 15);
    donatello.tasks.push(save_world);
    donatello.tasks.push(eat_pizza);
    donatello.tasks.push(createNewTechnology);
    donatello.tasks.push(sleep);
    donatello.tasks.push(workOut);


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

  it("Tasks Sort by level", function(){
    donatello.sortTasksByLevel();
    assert.deepEqual(donatello.tasks, [sleep, createNewTechnology, eat_pizza,workOut, save_world]);
  })

  it("Tasks sort by urgency", function(){
    donatello.sortTasksByUrgency();
    assert.deepEqual(donatello.tasks, [save_world, sleep, eat_pizza, workOut, createNewTechnology]);
  })

  it("Tasks sorty by reward", function(){
    donatello.sortTasksByReward();
    assert.deepEqual(donatello.tasks, [save_world, createNewTechnology, eat_pizza,sleep, workOut])

  })


})