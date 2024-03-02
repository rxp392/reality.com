const { Kafka, logLevel } = require('kafkajs');

const kafka = new Kafka({
  logLevel: logLevel.INFO,
  brokers: ['localhost:9092'],
  clientId: 'tests',
});

async function run() {
  const topic = 'test-topic';

//   const producer = kafka.producer();
//   await producer.connect();
//   await producer.send({
//     topic,
//     messages: [{ key: '1', value: 'TESTTTTTT VALUE' }],
//   });

//fromBeginning just defines the default behaviour if offset is not present
  let numberMessage = 0;
  const consumer = kafka.consumer({ groupId: 'consumer' });
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });
  const promise = new Promise((resolve) => {
    consumer.run({
      eachMessage: async (mesageData) => {
        console.log(`got message ${numberMessage++} offset ${mesageData.message.offset}`);
        console.log(mesageData.message.value.toString());
        resolve(true);
      },
    });
  });

  await promise;

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

//   await producer.disconnect();
  await consumer.disconnect();
}

run()