const sky = document.getElementById("sky");
const box = document.getElementById("box");

const select = document.getElementById("selector");

// 10-16 noon
// 4-10 inbetween
//16-19 inbwtween
// 19-23, 0-4 night

const now = new Date();
const currentHour = now.getHours();

let minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

const utcOfset = now.getTimezoneOffset();
const hourDifferent = utcOfset / 60;

const utcTime = now.getHours() + hourDifferent;

const times = {
  currentTime: currentHour + " : " + minute,
  londonTime: utcTime + " : " + minute,
  parisTime: utcTime + 1 + " : " + minute,
  newyorkTime: utcTime - 5 + " : " + minute
};

const timeElement = document.getElementById("time");
timeElement.innerText = times.currentTime;

const animation = selectValue => {
  // console.log(event);
  // const selectValue = event.target.value;

  timeElement.innerText = times[selectValue];
  const hour = times[selectValue][0] + times[selectValue][1];

  if (hour <= 4 || hour >= 19) {
    box.style.backgroundPosition = "top";
    sky.style.transform = "rotate(90deg)";
  } else if (hour > 4 && hour <= 8) {
    box.style.backgroundPosition = "50%";
    sky.style.transform = "rotate(45deg)";
  } else if (hour >= 16 && hour < 19) {
    box.style.backgroundPosition = "50%";
    sky.style.transform = "rotate(45deg)";
  } else {
    box.style.backgroundPosition = "bottom";
    sky.style.transform = "rotate(0deg)";
  }
};

select.addEventListener("change", event => {
  animation(event.target.value);
});
animation("currentTime");
