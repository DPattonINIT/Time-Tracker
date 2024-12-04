
// Id Section---------------------------------
let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');
let workHours =document.getElementById('workHours');
let workWeek = document.getElementById('workWeek');
let playHours = document.getElementById('playHours');
let playWeek = document.getElementById('playWeek');
let studyHours = document.getElementById('studyHours');
let studyWeek = document.getElementById('studyWeek');
let exerciseHours = document.getElementById('exerciseHours');
let exerciseWeek = document.getElementById('exerciseWeek');
let socialHours = document.getElementById('socialHours');
let socialWeek = document.getElementById('socialWeek');
let selfHours = document.getElementById('selfHours');
let selfWeek = document.getElementById('selfWeek');




function GetJSON(){
fetch('../data/data.json')
.then(
    response => response.json()
)
.then(
    data => console.log(data)
)
}
GetJSON();

function getWork(){

}

daily.addEventListener('mouseover', function(){
   GetJSON().then(timeFrames => {
workHours.innerText = daily
   })
});