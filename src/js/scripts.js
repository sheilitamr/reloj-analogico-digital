const digitalClock = document.getElementById('digital-clock');
const clockHoursElement = document.getElementById('hours');
const clockMinutesElement = document.getElementById('minutes');
const clockSecondsElement = document.getElementById('seconds');

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
