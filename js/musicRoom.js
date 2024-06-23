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
function GAbgmRestart() {
          document.getElementById('GA').pause();
          document.getElementById('GA').currentTime = 0;
        }
        function MNbgmRestart() {
          document.getElementById('MN').pause();
          document.getElementById('MN').currentTime = 0;
        }
        function TWbgmRestart() {
          document.getElementById('TW').pause();
          document.getElementById('TW').currentTime = 0;
        }
        function KYbgmRestart() {
          document.getElementById('KY').pause();
          document.getElementById('KY').currentTime = 0;
        }
        function GAbgmPaused() {
                    document.getElementById("GA").pause();
                }
        function MNbgmPaused() {
                    document.getElementById("MN").pause();
                }
        function TWbgmPaused() {
                    document.getElementById("TW").pause();
                }
        function KYbgmPaused() {
                    document.getElementById("KY").pause();
                }
        function GAbgmStart() {
                    document.getElementById("GA").play();
                }
        function MNbgmStart() {
                    document.getElementById("MN").play();
                }
        function TWbgmStart() {
                    document.getElementById("TW").play();
                }
        function KYbgmStart() {
                    document.getElementById("KY").play();
                }
// ボタン
const q = [];
q.GA = "";
q.MN = "";
q.TW = "";
q.KY = "";

const switchImgGA = document.getElementById("GAButton");
function changeImgGA(){
switchImg.classList.toggle("on_Button");
q.GA += 'a';
}
switchImg.addEventListener("click",changeImg);

const switchImgMN = document.getElementById("MNButton");
function changeImgMN(){
q.MN += 'a';
switchImg.classList.toggle("on_Button");
}
switchImg.addEventListener("click",changeImg);

const switchImgTW = document.getElementById("TWButton");
function changeImgTW(){
switchImg.classList.toggle("on_Button");
q.TW += 'a';
}
switchImg.addEventListener("click",changeImg);

const switchImgKY = document.getElementById("KYButton");
function changeImgKY(){
switchImg.classList.toggle("on_Button");
q.KY += 'a';
}
switchImg.addEventListener("click",changeImg);
// ボタン関数
function GAButtonWork() {
  if (q.GA.length = 0){
    GAbgmPaused();
    pressTrigger();
}else{
    GAbgmStart();
    selectTrigger();
}
};
function MNButtonWork() {
  if (q.MN.length = 0){
    MNbgmPaused();
    pressTrigger();
}else{
    MNbgmStart();
    selectTrigger();
}
};
function TWButtonWork() {
  if (q.TW.length = 0){
    TWbgmPaused();
    pressTrigger();
}else{
    TWbgmStart();
    selectTrigger();
}
};
function KYButtonWork() {
  if (q.KY.length = 0){
    KYbgmPaused();
    pressTrigger();
}else{
    KYbgmStart();
    selectTrigger();
}
};
// キーバインド
        window.addEventListener(
            "keydown",
            (event) => {
                if (event.defaultPrevented) {
                    return;
                }
                switch (event.key) {
                    case "1":
                        GAbgmStart();
                        selectTrigger();
                        break;
                    case "2":
                        MNbgmStart();
                        selectTrigger();
                        break;
                    case "3":
                        TWbgmStart();
                        selectTrigger();
                        break;
                    case "4":
                        KYbgmStart();
                        selectTrigger();
                        break;
                    case "x":
                        GAbgmRestart();
                        MNbgmRestart();
                        TWbgmRestart();
                        KYbgmRestart();
                        pressTrigger();
                        break;
                    case "c":
                        GAbgmRestart();
                        MNbgmRestart();
                        TWbgmRestart();
                        KYbgmRestart();
                        pressTrigger();
                        break;
                    default:
                        return;
                }
                event.preventDefault();
            },
            true,
        );
