// 効果音
function ringTrigger() {
    document.getElementById('ClickSound').pause();
    document.getElementById('ClickSound').currentTime = 0;
    ring();
}
function ring() {
   document.getElementById("ClickSound").play();
}

function pressTrigger() {
    document.getElementById('PressSound').pause();
    document.getElementById('PressSound').currentTime = 0;
    press();
}
function press() {
   document.getElementById("PressSound").play();
}
function selectTrigger() {
    document.getElementById('SelectSound').pause();
    document.getElementById('SelectSound').currentTime = 0;
    select();
}
function select() {
   document.getElementById("SelectSound").play();
}

function cancelTrigger() {
    document.getElementById('CancelSound').pause();
    document.getElementById('CancelSound').currentTime = 0;
    cancel();
}
function cancel() {
   document.getElementById("CancelSound").play();
}
// ボタン
const res = document.getElementById("commandResult");
const remember = [];

          function input(value) {
              const inputedValue = value;
              res.value = inputedValue;
          }
          
          function liveScreen(enteredValue) {
              if (!res.value) {
                  res.value = "";
              }
              res.value += enteredValue;
          }

          function startMovement() {
              if (!remember.remind) {
                  remember.remind = "";
              }
              const resultInput = res.value;
              var i = res.value.length -1;
              if (res.value[i] == "↑") {
                  remember.remind += "u";
              }else if (res.value[i] == "→") {
                  remember.remind += "r";
              }else if (res.value[i] == "←") {
                  remember.remind += "l";
              }else if (res.value[i] == "↓") {
                  remember.remind += "d";
              }
              res.value = resultInput.substring(0, res.value.length -1);
              function forget (){
                  remember.remind = '';
              }
              pressTrigger();
              if (res.value.length < 1){
                  stopRepeatTimer();
                  if (remember.remind == ["uddr"]){
                      kekkaMeigen();
                      forget();
                  }else if (remember.remind == ["uuuu"]){
                      kekkaIndex2();
                      forget();
                  }else if (remember.remind == ["udrl"]){
                      kekkaIndex3();
                      forget();
                  }else if (remember.remind == ["lulr"]){
                      kekkaIndex();
                      forget();
                  }else if(remember.remind == [""]){
                      kekkaKuuhaku();
                      forget();
                  }else{
                      kekkaHumei();
                      forget();
                  }
              }
          }
          let nIntervId;

              function repeatTimer() {
                      if (!nIntervId) {
                      nIntervId = setInterval(startMovement, 150);
                  }
                }
function stopRepeatTimer() {
        clearInterval(nIntervId);
        // 変数から intervalID を解放
        nIntervId = null;
}
// キーボード
window.addEventListener(
        "keydown",
        (event) => {
                if (event.defaultPrevented) {
                        return;
                }
                switch (event.key) {
                        case "ArrowDown":
                                liveScreen('↓');
                                ringTrigger();
                                break;
                        case "ArrowUp":
                                liveScreen('↑');
                                ringTrigger();
                                break;
                        case "ArrowLeft":
                                liveScreen('←');
                                ringTrigger();
                                break;
                        case "ArrowRight":
                                liveScreen('→');
                                ringTrigger();
                                break;
                        case "s":
                                liveScreen('↓');
                                ringTrigger();
                                break;
                        case "w":
                                liveScreen('↑');
                                ringTrigger();
                                break;
                        case "a":
                                liveScreen('←');
                                ringTrigger();
                                break;
                        case "d":
                                liveScreen('→');
                                ringTrigger();
                                break;
                        case "Enter":
                                repeatTimer();
                                ringTrigger();
                                break;
                        case "Backspace":
                                res.value = resultInput.substring(0, res.value.length -1);
                                ringTrigger();
                                break;
                        default:
                                return;
                }
                event.preventDefault();
        },
        true,
);
// 結果
var kekkaKuuhaku = function(){
    var elem = document.getElementById("resultOfCommand");
    elem.innerHTML = "--";
    ringTrigger();
};
var kekkaMeigen = function(){
    var elem = document.getElementById("resultOfCommand");
    elem.innerHTML = "<a href='https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%8D%E3%82%B9%E3%83%88%E3%83%BB%E3%83%98%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%A6%E3%82%A7%E3%82%A4'>Never think that war, no matter how necessary, nor how justified, is not a crime.</a>";
    selectTrigger();
};
var kekkaIndex3 = function(){
    var elem = document.getElementById("resultOfCommand");
    elem.innerHTML = "index3.htmlへ...";
    selectTrigger();
    window.location.href = "https://hachchch.github.io/hachchch-script/Scripts/index3.html";
};
var kekkaIndex = function(){
    var elem = document.getElementById("resultOfCommand");
    elem.innerHTML = "index.htmlへ...";
    selectTrigger();
    window.location.href = "https://hachchch.github.io/hachchch-script/index.html";
};
var kekkaIndex2 = function(){
    var elem = document.getElementById("resultOfCommand");
    elem.innerHTML = "index2.htmlへ...";
    selectTrigger();
    window.location.href = "https://hachchch.github.io/hachchch-script/Scripts/index2.html";
};
var kekkaHumei = function(){
    var elem = document.getElementById("resultOfCommand");
    cancelTrigger();
    elem.innerHTML = "コマンドは見つかりませんでした。";
};
