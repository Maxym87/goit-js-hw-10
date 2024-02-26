// Описаний у документації
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input');
const inputDelay = document.querySelector('input[name="delay"]');
const inputState = document.querySelector('input[name="state"]');
const createNotBtn = document.querySelector('button');

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
