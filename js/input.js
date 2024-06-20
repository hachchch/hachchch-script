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
              if (!rember.remind){
              remember.remind = '';
              }
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
                  if (remember == ["dur"]){
                      kekka1();
                      forget();
                  }else if (remember == ["lulr"]){
                      kekka2();
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
var kekka1 = function(){
    var elem = document.getElementById("resultOfCommand");
    elem.innerHTML = "なんか成功しました。";
    selectTrigger();
}
var kekka2 = function(){
    var elem = document.getElementById("resultOfCommand");
    elem.innerHTML = "戻ります...";
    selectTrigger();
    window.location.href = "{https://hachchch.github.io/hachchch-script/}";
}
var kekkaHumei = function(){
    var elem = document.getElementById("resultOfCommand");
    cancelTrigger();
    elem.innerHTML = "コマンドは見つかりませんでした。";
}
