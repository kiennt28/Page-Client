// setInterval(showTime, 1000);

// function showTime() {
//   var time = new Date();
//   var hrs = time.getHours();
//   var min = time.getMinutes();
//   var sec = time.getSeconds();

//   if (hrs > 12) {
//     hrs = hrs - 12;
//   }
//   if (hrs == 0) {
//     hrs = 12;
//   }
//   if (min < 10) {
//     min = "0" + min;
//   }
//   if (sec < 10) {
//     sec = "0" + sec;
//   }
//   document.getElementById("clock_Display").innerHTML =
//     hrs + ":" + min + ":" + sec;
//   console.log(hrs);
// }

const countDownDate = new Date("January 1, 2022 23:00:00").getTime();
setInterval(showTime, 1000);

function showTime() {
  var now = new Date().getTime();
  // console.log(now);

  var distance = countDownDate - now;
  // console.log(distance);

  var days = Math.floor(distance / (24 * 60 * 60 * 1000));
  var hrs = Math.floor((distance / (60 * 60 * 1000)) % 24);
  var mins = Math.floor((distance / (60 * 1000)) % 60);
  var secs = Math.floor(distance / 1000) % 60;

  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs == 0) {
    hrs = 12;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById("clock_Display").innerHTML =
    days + "d:" + hrs + "h:" + mins + "m:" + secs + "s";
}
