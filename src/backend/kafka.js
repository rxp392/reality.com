const {Kafka} = require('kafkajs')
//require imports from node modules or gets from local relative path that is relative to __dirname
const kafka = new Kafka({
    clientId: 'message-tracker',
    brokers: ['localhost:9092']
})

// const producer = kafka.producer();
// producer.connect();
// producer.send({
//     topic: 'test-topic',
//     messages:[
//         {value : 'Hello KafkaJs for the fird time!'}
//     ]
// })

// producer.disconnect();


//kafka consumers part of a consumer group
//if there are more consumers than partitions some may be idle
//if there are multiple consumers they may only read data from some parititons
const consumer = kafka.consumer({groupId : 'test-consumer'})
consumer.connect();
consumer.subscribe({topic: 'test-topic' , fromBeginning : true});

consumer.run({
    eachMessage: async ({topic,partition,message,...rest}) => 
    {
        console.log('hello',{
            value: message.value.toString(),
        })
    }
})