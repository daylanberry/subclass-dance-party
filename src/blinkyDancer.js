var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

// makeBlinkyDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };


makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};


//add step variable
//makeBlinkderDancer.prototype.step.call()
//makeBlinkyDancer.prototype