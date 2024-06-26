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
// メイン
const p = Math.PI;
            const division = document.getElementById("timeRate");
            division.value=1;
            function input(value) {
                const inputedValue = value;
                division.value = inputedValue;
            }
            function liveScreen(enteredValue) {
                if (!division.value) {
                    division.value = "";
                }
                division.value += enteredValue;
            }
            function delScreen(){
                division.value=division.value.substring(0, 0)
                division.value='';
            }
            
            function start(){
                translate();
                    // y = 274.5;
                    // x = 671;
                document.getElementById("startButton").disabled = true;
                document.getElementById("addBallButton").disabled = false;
            }
            // canvas
            const canvas = document.querySelector('.canvas'); // Canvasの取得
            const context = canvas.getContext('2d');
            canvas.style.border = "3px solid";

            const balls = [];
            
            balls.push({x:150, y:150, r: 30, periodx: 1, periody: 1, color: 'blue', v0:10 , v2:0, t0: 0, t: 0});
            balls.push({x:350, y:350, r: 30, periodx: 1, periody: -1, color: 'red', v0:10 , v2:0, t0: 0, t: 0});

            const addBallX = document.getElementById("setBallX");
            const addBallY = document.getElementById("setBallY");
            const addBallAngle = document.getElementById("setBallAngle");
            const addBallV0 = document.getElementById("setBallV0");
            const addBallV2 = document.getElementById("setBallV2");
            const addBallRadius = document.getElementById("setBallRadius");
            const addBallColor = document.getElementById("setBallColor");
            function addBall(){
                if(!addBallX.value){
                    addBallX.value=671;
                }if(!addBallY.value){
                    addBallY.value=274.5;
                }if(!addBallAngle.value){
                    addBallAngle.value=315;
                }if(!addBallV0.value){
                    addBallV0.value=10;
                }if(!addBallV2.value){
                    addBallV2.value=0;
                }if(!addBallRadius.value){
                    addBallRadius.value=30;
                }if(!addBallColor.value){
                    addBallColor.value='white';
                }
                addBallX.set = parseInt(addBallX.value);
                addBallY.set = parseInt(addBallY.value);
                addBallAngle.setSin = Math.sin((parseInt(addBallAngle.value)/180)*p);
                addBallAngle.setCos = Math.cos((parseInt(addBallAngle.value)/180)*p);
                addBallV0.set=parseInt(addBallV0.value);
                addBallV2.set=parseInt(addBallV2.value);
                addBallRadius.set=parseInt(addBallRadius.value);
                addBallColor.set=addBallColor.value;
                balls.push({x:addBallX.set, y:addBallY.set, r:addBallRadius.set, periodx:addBallAngle.setSin, periody:addBallAngle.setCos, color:addBallColor.set, v0: addBallV0.set, v2:addBallV2.set, t0: Date.now()/1000, t:0});
            }
            
            function translate() {
                context.clearRect(0,0,canvas.width, canvas.height);
                for(const b of balls){
                    b.t = ((Date.now()/1000)-b.t0)*division.value;
                if (b.x-b.r < 0) {
                    if (b.v0+b.v2*b.t > 0){
                    b.periodx = Math.sin(p/2);
                    }else{
                    b.periodx = -Math.sin(p/2);
                    }
                    }if (canvas.width < b.x+b.r) {
                    if (b.v0+b.v2*b.t > 0){
                    b.periodx = -Math.sin(p/2);
                    }else{
                    b.periodx = Math.sin(p/2);
                    }
                    }if (b.y-b.r< 0) {
                    if (b.v0+b.v2*b.t > 0){
                    b.periody= Math.cos(p/4);
                    }else{
                    b.periody= -Math.cos(p/4);
                    }
                    }if (canvas.height< b.y+b.r) {
                    if (b.v0+b.v2*b.t > 0){
                    b.periody = -Math.cos(p/4);
                    }else{
                    b.periody = Math.cos(p/4);
                    }
                    }
                    /*この辺に小球の衝突を演算したい。*/
                b.x=b.x+b.periodx*(b.v0*division.value+b.v2*b.t);
                b.y=b.y+b.periody*(b.v0*division.value+b.v2*b.t);
                }
                for(const b of balls){
                context.fillStyle = b.color;
                context.beginPath();
                context.arc(b.x,b.y,b.r,0,2*Math.PI);
                context.fill();
                }
                requestAnimationFrame(translate);
            }
            function test() {
                alert(addBallX);
            }
// キー入力
window.addEventListener(
        "keydown",
        (event) => {
                if (event.defaultPrevented) {
                        return;
                }
                switch (event.key) {
                        case "1":
                                ringTrigger();
                                break;
                        case "2":
                                ringTrigger();
                                break;
                        case "3":
                                ringTrigger();
                                break;
                        case "4":
                                ringTrigger();
                                break;
                        case "5":
                                ringTrigger();
                                break;
                        case "6":
                                ringTrigger();
                                break;
                        case "7":
                                ringTrigger();
                                break;
                        case "8":
                                ringTrigger();
                                break;
                        case "9":
                                ringTrigger();
                                break;
                         case "0":
                                ringTrigger();
                                break;
                         case ".":
                                ringTrigger();
                                break;
                        case "Entter":
                                ringTrigger();
                                addBall();
                                break;
                        default:
                                return;
                }
                event.preventDefault();
        },
        true,
);
