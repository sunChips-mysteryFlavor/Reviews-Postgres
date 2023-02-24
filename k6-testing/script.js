import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 50 },
    { duration: '8m', target: 50 },
    { duration: '2m', target: 0 },
  ],
};

const rando = Math.round(Math.random() * 100000)

export default function () {
  http.get('http://localhost:3020/reviews/?product_id=100');
  sleep(1);
}