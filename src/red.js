var redDancer = function(top, left, timeBetweenSteps, $node) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('red');

};


redDancer.prototype = Object.create(MakeDancer.prototype);
redDancer.prototype.constructor = redDancer;

redDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};