items = JSON.parse(Assets.getText("dummy.json"));

Meteor.startup(function(){

  var count = Items.find().count();

  if(count < 1){
    _.forEach(items, function(i){
        Items.insert(i);
    });
  }

});
