const startMenu = document.querySelector('.startMenu');
document.addEventListener('click', (e) => {
  if(e.target.closest('#start') && !startMenu.classList.contains('startMenuOpen')){
    startMenu.classList.add('startMenuOpen');
  }else if(!e.target.closest('.startMenu')){
    startMenu.classList.remove('startMenuOpen');
  }
});

const calendar = document.querySelector('.calendar');
document.addEventListener('click', (e) => {
  if(e.target.closest('#clock') && !calendar.classList.contains('calendarOpen')){
    calendar.classList.add('calendarOpen');
  }else if(!e.target.closest('.calendar')){
    calendar.classList.remove('calendarOpen');
  }
});

const searchMenu = document.querySelector('.searchMenu');
document.addEventListener('click', (e) => {
  if(e.target.closest('#search') && !searchMenu.classList.contains('searchMenuOpen')){
    searchMenu.classList.add('searchMenuOpen');
  }else if(!e.target.closest('.searchMenu')){
    searchMenu.classList.remove('searchMenuOpen');
  }
});

const powerSupplyMenu = document.querySelector('.powerSupplyMenu');
document.addEventListener('click', (e) => {
  if(e.target.closest('#powerSupply') && !powerSupplyMenu.classList.contains('powerSupplyMenuOpen')){
    powerSupplyMenu.classList.add('powerSupplyMenuOpen');
  }else if(!e.target.closest('.powerSupplyMenu')){
    powerSupplyMenu.classList.remove('powerSupplyMenuOpen');
  }
});

let inputFile = document.querySelector('#inputFile');
inputFile.addEventListener('change', (e) => {
let file = e.target.files;
const reader = new FileReader();
reader.readAsDataURL(file[0]);
reader.onload = () => {
  wallpaper.src = reader.result;
}
},false);

document.cookie = 'max-age=3600';
document.cookie = 'yourName='
let yourName ;
console.log(yourName);
console.log(document.cookie);
if(yourName === null){
  yourName = window.prompt('名前を入力してください');
  document.cookie = 'yourName= '+ encodeURIComponent(yourName);
  console.log(`入力されました。${yourName}`);
}else {
  yourName = decodeURIComponent(document.cookie).split(';');
  yourName.forEach(function(value) {

    //cookie名と値に分ける
    var content = value.split('=');
    
    console.log( content[1] );
  })
  console.log(yourName);
}
console.log(document.cookie)


function twoDight (num) {
  let ret;
  if(num < 10){
    ret = `0${num}`;
  }else{
    ret = num;
  }
  return ret;
}
function twoDightHours (num) {
  let ret;
  if(0 < num  && num < 10){
    ret = `0${num}`;
  }else{
    ret = num;
  }
  return ret;
}
function showClock(){
  let now = new Date();
  let nowYear = twoDight(now.getFullYear());
  let nowMonth = twoDight(now.getMonth() + 1);
  let nowDate = twoDight(now.getDate());
  let nowHour = twoDightHours(now.getHours());
  let nowMin = twoDight(now.getMinutes());
  let time = `${nowHour}:${nowMin}`;
  let date = `${nowYear}/${nowMonth}/${nowDate}`;
  document.querySelector('#time').innerHTML = time;
  document.querySelector('#date').innerHTML = date;
}
showClock();
setInterval('showClock()',1000);

const powerOff = document.querySelector('#powerOff')
const windowClose = () => {
  const result = confirm('これまでの内容は削除されます。\n本当にシャットダウンしますか？');
  if(result === true){
    window.close();
  }
}
powerOff.addEventListener('click', windowClose);

const reboot = document.querySelector('#reboot');
const windowReload = () =>{
  const result = confirm('これまでの内容は削除されます。\n本当に再起動しますか？');
  if(result === true){
    window.location.reload();
  }
}
reboot.addEventListener('click', windowReload);


/*let appsWindow = document.querySelector('.appsWindow');
appsWindow.style.position = 'absolute'
let onmousemove = (event) => {
  let x = event.clientX;
  let y = event.clientY;
  let width = appsWindow.offsetWidth;
  let height = appsWindow.offsetHeight;
  appsWindow.style.top = `${y - height / 2}px`;
  appsWindow.style.left = `${x - width / 2}px`;
}
appsWindow.onmousedown = () => {
  console.log('タップされたZOY');
  document.addEventListener('mousemove', onmousemove);
}*/