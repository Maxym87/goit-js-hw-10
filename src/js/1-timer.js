import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();

    if (selectedDates[0] < currentDate) {
      startBtn.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  let timerInterval = setInterval(() => {
    let delta = new Date(input.value) - new Date();
    startBtn.disabled = true;

    if (delta >= 0) {
      let timeObj = convertMs(delta);
      days.textContent = addLeadingZero(timeObj.days);
      hours.textContent = addLeadingZero(timeObj.hours);
      minutes.textContent = addLeadingZero(timeObj.minutes);
      seconds.textContent = addLeadingZero(timeObj.seconds);
    } else {
      clearInterval(timerInterval);
      startBtn.disabled = false;
      input.disabled = false;
    }
  }, 1000);
  startBtn.disabled = true;
  input.disabled = true;
});
