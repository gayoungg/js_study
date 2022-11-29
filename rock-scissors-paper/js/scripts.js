var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

var userInput = prompt('가위, 바위, 보!');

if (userInput !== SCISSORS  && userInput !== ROCK && userInput !== PAPER){
alert('가위, 바위, 보 중 하나를 입력하세요. ');
}
else{



var comInput;

//Math.random()은 0부터 1사이의 값을 리턴함.
var rnd = Math.random();

if (rnd < 0.33){
comInput = SCISSORS;
}

else if (rnd < 0.66){
comInput = ROCK;
}

else{
comInput = PAPER;
}

/*
if (userInput === 'SCISSORS'){
if (comInput === 'SCISSORS'){
alert('컴퓨터: ' + comInput + ' - 컴퓨터와 비겼습니다. ');
}else if(comInput === 'ROCK'){
alert('컴퓨터: ' + comInput + ' - 컴퓨터에게 졌습니다... ');
}else {
alert('컴퓨터: ' + comInput + ' - 컴퓨터에게 이겼습니다! ');
}
}



else if (userInput === 'ROCK'){
if (comInput === 'SCISSORS'){
alert('컴퓨터: ' + comInput + ' - 컴퓨터에게 이겼습니다! ');
}else if(comInput === 'ROCK'){
alert('컴퓨터: ' + comInput + ' - 컴퓨터와 비겼습니다. ');
}else {
alert('컴퓨터: ' + comInput + ' - 컴퓨터에게 졌습니다... ');
}
}

else{
if (comInput === 'SCISSORS'){
alert('컴퓨터: ' + comInput + ' - 컴퓨터에게 졌습니다... ');
}else if(comInput === 'ROCK'){
alert('컴퓨터: ' + comInput + ' - 컴퓨터에게 이겼습니다! ');
}else {
alert('컴퓨터: ' + comInput + ' - 컴퓨터와 비겼습니다. ');
}
}
*/


switch(userInput){
    case SCISSORS:
        switch(comInput){
        case SCISSORS:
            alert('컴퓨터: ' +comInput +' - 컴퓨터와 비겼습니다. ');
            break;
 case ROCK:
            alert('컴퓨터: ' +comInput +' - 컴퓨터에게 졌습니다. ');
            break;
 default:
            alert('컴퓨터: ' +comInput +' - 컴퓨터에게 이겼습니다. ');
            break;
}

break;

 case ROCK:
    switch(comInput){
        case SCISSORS:
            alert('컴퓨터: ' +comInput +' - 컴퓨터에게 이겼습니다. ');
            break;
 case ROCK:
            alert('컴퓨터: ' +comInput +' - 컴퓨터와 비겼습니다. ');
            break;
 default:
            alert('컴퓨터: ' +comInput +' - 컴퓨터에게 졌습니다. ');
            break;
}
break;

 default:
    switch(comInput){
        case SCISSORS:
            alert('컴퓨터: ' +comInput +' - 컴퓨터에게 졌습니다. ');
            break;
 case ROCK:
            alert('컴퓨터: ' +comInput +' - 컴퓨터에게 이겼습니다. ');
            break;
 default:
            alert('컴퓨터: ' +comInput +' - 컴퓨터와 비겼습니다. ');
            break;
}
break;

}

}



