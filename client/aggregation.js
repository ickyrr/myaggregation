Template.hello.onCreated(function(){
  var self = this;

  self.autorun(function(){
    self.subscribe('theItems', Session.get('input'));
  });

});

Template.hello.events({
  'submit form': function(e){
    e.preventDefault();

    var input = $('input').val(); //this is not a search box, this just a test input for agg filters

    Session.set('input', input)
  }
});

Template.hello.helpers({
  items: function(){
    return tempItems.find();
  }
});
