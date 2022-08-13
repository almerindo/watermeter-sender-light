/* eslint-disable no-console */
import mqtt from 'mqtt';
import { eventReceiver } from '../../controllers/event/waterEventReceiver.controller';

const host = '200.100.0.107';
const port = '1883';
const clientId = `watermeter_gateway_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${host}:${port}`;
const URL_API = 'http://200.100.0.114';

const start = async (): Promise<void> => {
  const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'whitebeard',
    password: 'rews2002',
    reconnectPeriod: 1000,
  });

  const topic = 'mangueiras/watermeter/#';
  client.on('connect', () => {
    console.log('Connected');
    client.subscribe([topic], () => {
      console.log(`Subscribe to topic '${topic}'`);
    });
  });

  client.on('message', (topicRx, payload) => {
    const eventData = JSON.parse(payload.toString());
    console.log('Received Message:', topicRx, eventData);
    eventReceiver(eventData);
  });
};

export default start;
