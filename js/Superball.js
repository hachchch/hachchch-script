const division = document.getElementById("timeRate");
            division.value=750;
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
                division.value=100
            }
            var isStart=0;
            function start(){
                isStart = 1;
                if (isStart == 1){
                t = 0;
                startTime = 0;
                startTime = Date.now() / division.value;
                translate();
                    y = 274.5;
                    x = 671;
            }
            }
            // canvas
            const canvas = document.querySelector('.canvas'); // Canvasの取得
            const context = canvas.getContext('2d');
            canvas.style.border = "3px solid";

            let dateSave = 0;
            let x = 671;
            let y = 274.5;
            let rad = 0;
            let r = 30;
            let t = 0;
            let l = 0;
            let periodx = 1;
            let periody = 1;
            var startTime = 0; //アニメーション開始時間
            const bound= [];
            const p = Math.PI;
            bound.ctx='';
            function translate() {
                t = Date.now() / division.value - startTime;
                
                context.clearRect(0,0,canvas.width, canvas.height);//リセット
                context.beginPath();
                context.fillStyle = 'white';
                // 次の描画位置を計算
                if (x-r < 0) {
                    periodx = Math.sin(p/2);
                    }if (canvas.width < x+r) {
                    periodx = -Math.sin(p/2);
                    }if (y-r< 0) {
                    periody= Math.sin(p/2);
                    }if (canvas.height< y+r) {
                    periody = -Math.sin(p/2);
                    }else{
                    }
                y=y+periody*10
                x=x+periodx*10
                context.arc(x,y,r,rad,2*Math.PI);
                context.fill();
                requestAnimationFrame(translate);
            }
            function test() {
                //alert();
                alert(freeFallPeriod);
            }
