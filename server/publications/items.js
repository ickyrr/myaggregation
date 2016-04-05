Meteor.publish("theItems", function(groupBy) {
ReactiveAggregate(this, Items, [
    {
        $group: {
            '_id': groupBy,
            "totalBalance": {$sum: "$balance"}
        }
    }
], { clientCollection: "tempItems" });
});
