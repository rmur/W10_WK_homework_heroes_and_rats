var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Task = require("../task");

describe("Heroes and Rats game", function(){

  beforeEach( function(){
    donatello = new Hero("Donatello");
    saveWorld = new Task(99, 1, 500);
    eatPizza = new Task(5, 5, 20 );
    createNewTechnology = new Task(3, 10, 40);
    sleep = new Task( 2, 2, 0);
    workOut = new Task( 8, 6, 0);
    pizza = new Food("Pizza", 30);
    cheese = new Food("Cheese", 15);
    donatello.tasks.push(saveWorld);
    donatello.tasks.push(eatPizza);
    donatello.tasks.push(createNewTechnology);
    donatello.tasks.push(sleep);
    donatello.tasks.push(workOut);


  })

  it("Hero speaks" , function(){
    assert.strictEqual(donatello.introduce(), "Hi I am Donatello!");
  })

  it("Task completion method", function(){
    donatello.completeTask(saveWorld)
    assert.equal(donatello.checkTaskStatus(saveWorld), true);
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
    assert.deepEqual(donatello.tasks, [sleep, createNewTechnology, eatPizza,workOut, saveWorld]);
  })

  it("Tasks sort by urgency", function(){
    donatello.sortTasksByUrgency();
    assert.deepEqual(donatello.tasks, [saveWorld, sleep, eatPizza, workOut, createNewTechnology]);
  })

  it("Tasks sorty by reward", function(){
    donatello.sortTasksByReward();
    assert.deepEqual(donatello.tasks, [saveWorld, createNewTechnology, eatPizza,sleep, workOut])

  })

  it("Competed/ Unacomplished tasks are listed", function(){
    donatello.completeTask(saveWorld);
    donatello.completeTask(eatPizza);
    assert.deepEqual(donatello.listCompletedTasks("completed"), [saveWorld, eatPizza]);
  })


})