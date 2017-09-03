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

Hero.prototype.checkTaskStatus = function(taskToCheck){
  for (task of this.tasks){
    if (task == taskToCheck){
      return task.completion;
    }
  }
}

Hero.prototype.sortTasksByLevel = function(){
  return this.tasks.sort( function(a, b){
    return a.level - b.level;
  })
}

Hero.prototype.sortTasksByUrgency = function(){
  return this.tasks.sort(function(a,b){
    return a.urgency - b.urgency;
  })
}

Hero.prototype.sortTasksByReward = function(){
  return this.tasks.sort( function(a,b){
    return b.reward - a.reward;
  })
}

Hero.prototype.completeTask = function(taskComplete){
  for(task of this.tasks){
    if (task = taskComplete){
      task.completion = true;
    }
  }
}

Hero.prototype.listCompletedTasks = function(value){
  completedTasks = [];
  unaccomplishedTasks = [];
  for(task of this.tasks){
    if (task.completion == true ){
      completedTasks.push(task);
    } else {unaccomplishedTasks.push(task)}
  }
  if (value == "completed"){
  return completedTasks;
  } else { 
    return unaccomplishedTasks ;
  }  
}


module.exports = Hero;