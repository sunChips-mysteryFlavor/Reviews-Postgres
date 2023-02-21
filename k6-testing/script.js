import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '30s', target: 0 },
  ],
};

const rando = Math.round(Math.random() * 100000)

export default function () {
  http.get(`http://localhost:3020/reviews?product_id=${rando}`);
  sleep(1);
}