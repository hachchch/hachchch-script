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
