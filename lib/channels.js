Channels = new Mongo.collection('channels');

if (Meteor.isServer) {
  Meteor.publish('channels', function() {
    return Channels.find();
  });
}