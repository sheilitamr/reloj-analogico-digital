const digitalClock = document.getElementById('digital-clock');
const clockHoursElement = document.getElementById('hours');
const clockMinutesElement = document.getElementById('minutes');
const clockSecondsElement = document.getElementById('seconds');

const semanalDayElement = document.getElementById('semanal-day');
const numberDayElement = document.getElementById('number-day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return { hours, minutes, seconds };
};
const setClockText = () => {
  const { hours, minutes, seconds } = getTime();
  clockHoursElement.textContent = hours;
  clockMinutesElement.textContent = minutes;
  clockSecondsElement.textContent = seconds;
};
setInterval(() => {
  setClockText();
}, 1000);

setClockText();

const getDate = () => {
  const date = new Date();
  const semanalDay = date.getDay();
  const numberDay = date.getDate();
  const year = date.getFullYear();
  semanalDayElement.textContent = daysOfWeek[semanalDay];
  numberDayElement.textContent = numberDay;
  const month = date.getMonth();
  monthElement.textContent = months[month];
  yearElement.textContent = year;
};
getDate();
