// const { Kafka, logLevel } = require('kafkajs');
// const fetch = require('node-fetch')

// const kafka = new Kafka({
//   logLevel: logLevel.INFO,
//   brokers: ['localhost:9092'],
//   clientId: 'tests',
// });

// async function run() {
//   const topic = 'sender-topic';

//   const producer = kafka.producer();
//   await producer.connect();
//   await producer.send({
//     topic,
//     messages: [{ key: '1', value: 'TESTTTTTT VALUE' }],
//   });

// //fromBeginning just defines the default behaviour if offset is not present
//   const consumer = kafka.consumer({ groupId: 'consumer' });
//   await consumer.connect();
//   await consumer.subscribe({ topic, fromBeginning: true });
//   const promise = new Promise((resolve) => {
//     consumer.run({
//       eachMessage: async (mesageData) => {
//         console.log(JSON.stringify(mesageData.message.value.toString()));
//         fetch("http://localhost:3000/notification", 
//         {method: 'POST',
//         mode: 'same-origin',
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({message: mesageData.message.value.toString()})
//         }).then(res => console.log("Notified Successfully")).catch((err) => console.log(err))
//       },
//     });
//   });


//   await promise.finally(() => console.log('hello'));

//   // await new Promise((resolve) => {
//   //   se tTimeout(resolve, 2000);
//   // });

// //   await producer.disconnect();
//   // await consumer.disconnect();
// }
// run()