console.log("PRODUCER"); 

const Kafka = require( 'node-rdkafka');

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {
  topic: 'first-kafka-topic'
});

function queueMessage (object){
    var sentMessage = JSON.stringify(object);
    const success =stream.write(sentMessage);
    if(success){
        console.log(`message sent successfully ${sentMessage}`);
    }
    else {
        console.log("the code is wrong..!");
    }
}

module.exports = queueMessage;