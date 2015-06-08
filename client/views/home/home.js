<< << << < HEAD

//helper to find all channels in home
Template.home.helpers({
    channels: function() {
        return Channels.find();
    }
});

// Event Handler that inserts the channel on creation
Template.home.events({
    'submit form': function(event, instance) {
        // We dont want the browser to submit the form as don't want the form to reload the page.
        event.preventDefault();
        var name = instance.find('input').value;
        instance.find('input').value = '';

        Channels.insert({
            name: name
        });
    }
});
