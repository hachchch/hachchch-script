const division = document.getElementById("timeRate");
            division.value=9;
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
                division.value=''
            }
            function start(){
                translate();
                    y = 274.5;
                    x = 671;
                document.getElementById("startButton").disabled = true;
            }
            // canvas
            const canvas = document.querySelector('.canvas'); // Canvasの取得
            const context = canvas.getContext('2d');
            canvas.style.border = "3px solid";
            
            let x = 671;
            let y = 274.5;
            let r = 30;
            let periodx = 1;
            let periody = 1;
            const p = Math.PI;
            function translate() {
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
                y=y+periody*division.value
                x=x+periodx*division.value
                context.arc(x,y,r,0,2*Math.PI);
                context.fill();
                requestAnimationFrame(translate);
            }
            function test() {
                //alert();
                alert(freeFallPeriod);
            }
