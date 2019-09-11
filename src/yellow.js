var yellowDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node.addClass('yellow');
};


yellowDancer.prototype = Object.create(MakeDancer.prototype);
yellowDancer.prototype.constructor = yellowDancer;

yellowDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};