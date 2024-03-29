// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
//test commit
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left)

  this.$node.on('mouseover', function() {
    $(this).css({border : '100px solid black'})
  })

  this.$node.on('mouseleave', function() {
    $(this).css({border : '60px solid white'})
  })

};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};
//dancer.step();

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
//dancer.setPosition(top, left);