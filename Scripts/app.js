
function GetJSON(){
fetch('../data/data.json').then(
    response => response.json()
).then(
    data => console.log(data)
)
}
GetJSON();

function getWork(){
    
}