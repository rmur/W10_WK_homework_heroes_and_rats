var Task = function(level, urgency, reward){
  this.level = level;
  this.urgency = urgency;
  this.reward = reward;
  this.completion = false;
}

Task.prototype.complete = function(){
  this.completion = true;
}
module.exports = Task;