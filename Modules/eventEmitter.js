const EventEmitter = require('events');

module.exports = class extends EventEmitter.EventEmitter{
    constructor(){
        super();
    }
}