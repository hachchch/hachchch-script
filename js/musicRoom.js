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
        window.addEventListener(
            "keydown",
            (event) => {
                if (event.defaultPrevented) {
                    return;
                }
                switch (event.key) {
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
