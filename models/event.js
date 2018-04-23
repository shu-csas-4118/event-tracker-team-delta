
function Event() {
};

//prototype creates a class
Event.prototype.getEvents = function () {
    return[];
}

Event.prototype.getEventById = function(id) {
    return {id : 1 };
}

module.exports = Event;