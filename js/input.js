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
// ボタン
const res = document.getElementById("commandResult");

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
              const resultInput = res.value;
              var i = res.value.length -1;
              if (res.value[i] == "↑") {
                  // alert("上");
              }else if (res.value[i] == "→") {
                  // alert("右");
              }else if (res.value[i] == "←") {
                  // alert("左");
              }else if (res.value[i] == "↓") {
                  // alert("下");
              }
              res.value = resultInput.substring(0, res.value.length -1);
              pressTrigger();
              if (res.value.length < 1){
                  stopRepeatTimer();
              }
              }
          let nIntervId;

              function repeatTimer() {
                      if (!nIntervId) {
                      nIntervId = setInterval(startMovement, 250);
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
