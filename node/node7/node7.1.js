const events = require('events');
const emitter = new events.EventEmitter();
const event_name = 'night';                          // event
const event_msg = 'i am so sleepy'

const handler = () =>{
    console.log(event_msg);
};

emitter.on(event_name,handler);

emitter.emit(event_name);