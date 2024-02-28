import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import successSvg from '../img/success.svg';

const form = document.querySelector('.form');
const input = document.querySelector('input');
const inputDelay = document.querySelector('input[name="delay"]');
const inputsState = document.querySelectorAll('input[name="state"]');
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

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(inputDelay.value);
  const state = [...inputsState].find(input => input.checked).value;
  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Ok',
        titleColor: '#FFFFFF',
        messageColor: '#FFF',
        iconUrl: successSvg,
        position: 'topRight',
        backgroundColor: '#59A10D',
        timeout: 3000,
        progressBar: false,
        close: false,
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        iconUrl: cross,
        position: 'topRight',
        timeout: 3000,
        progressBar: false,
        close: false,
        titleColor: '#FFF',
        messageColor: '#FFF',
        backgroundColor: '#FF544B',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
