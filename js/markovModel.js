const input = document.getElementById("markovChainData");
const generated = document.getElementById("generatedText");
const chanceTextBox = document.getElementById("chanceTextBox");
const diagram = document.getElementById("diagram");
const counter = document.getElementById("counter");
let words = [];
function generate(n){
    if(input.value.length==0){
        alert("文字列が入力されていません！");
        }else{
        generated.innerHTML="<br>";
        words.length=0;
    /*使用されている文字を取得し、確率を計算する。*/
    let loopGenerateWord=0;
    while(loopGenerateWord<input.value.length){
    if(words.findIndex((element)=>element.word==input.value[loopGenerateWord])==-1){
    if(!input.value[loopGenerateWord+1]){
    words.push({
        word:input.value[loopGenerateWord],
        amount:1,
        chanceToOrigin:1,
        nextWord:"`"
    });
    }else{
        words.push({
        word:input.value[loopGenerateWord],
        amount:1,
        chanceToOrigin:1,
        nextWord:input.value[loopGenerateWord+1]
        });
    }
    }else{
    words[words.findIndex((element)=>element.word==input.value[loopGenerateWord])].amount++;
    if(!input.value[loopGenerateWord+1]){
        words[words.findIndex((element)=>element.word==input.value[loopGenerateWord])].nextWord+="`";
        }else{
    words[words.findIndex((element)=>element.word==input.value[loopGenerateWord])].nextWord+=input.value[loopGenerateWord+1];
        }
    }
    loopGenerateWord++;
    }
    //最後に改行を追加
    words.push({
        word:"<br>",
        amount:1,
        chanceToOrigin:1,
        nextWord:words[0].word
    });
    //原文が出現する確率の計算
    words.original=input.value+"`";
    let loopCheck=0;
    words.originalChance=1;
    while(loopCheck<words.original.length-1){
    let i=words.findIndex((element)=>element.word==words.original[loopCheck]);
    words[i].chanceToOrigin=words[i].chanceToOrigin*(1-(words[i].nextWord.replaceAll(words[i].nextWord[words[i].nextWord.indexOf(words.original[loopCheck+1])], "").length/words[i].amount));
    loopCheck++;
    }
    let loopCheck2=words.length-1;
    while(loopCheck2>=0){
    words.originalChance=words.originalChance*words[loopCheck2].chanceToOrigin;
    loopCheck2--;
    }
    chanceTextBox.innerHTML=words.originalChance*100+"%<br>または"+1/words.originalChance+"分の一";
    /*文章の生成(n回繰り返す)*/
    if(!n){
        console.log(words);
    }else{
    let loop=n;
    while(loop>=1){
        if(words.wordNext=="..."){
        words.wordNext=words[words.findIndex((element)=>element.word==generated.innerHTML[generated.innerHTML.length-1])].nextWord[Math.round(Math.random()*(words[words.findIndex((element)=>element.word==generated.innerHTML[generated.innerHTML.length-1])].nextWord.length-1))];
        }else{
        words.wordNext=words[0].word;
        }
        if(words.wordNext=="`"){
        generated.innerHTML+="<br>";
        loop--;
        }else{
        generated.innerHTML=generated.innerHTML+words[words.findIndex((element)=>element.word==words.wordNext)].word;
        words.wordNext="...";
        }
    }
    counter.innerHTML="";
    let cloneOfGenerated=generated.innerHTML;
    cloneOfGenerated=cloneOfGenerated.replaceAll("<br>"+input.value+"<br>","<b>"+input.value+"<br>");
    cloneOfGenerated=cloneOfGenerated.replaceAll("<br>"+input.value+"<b>","<br>"+input.value+"<>");
    cloneOfGenerated=cloneOfGenerated.replaceAll("<br>"+input.value+"<br>","<br>"+input.value+"<b>");
    let yourLuck=((generated.innerHTML.length-cloneOfGenerated.length)/n)-words.originalChance;
    if(generated.innerHTML.replaceAll(input.value,input.value+"!").length-generated.innerHTML.length!=0){
    counter.innerHTML+="文字列内での一致:"+(generated.innerHTML.replaceAll(input.value,input.value+"!").length-generated.innerHTML.length)+"回";
    if(generated.innerHTML.length-cloneOfGenerated.length!=0){
        counter.innerHTML+="<br>完全一致:"+(generated.innerHTML.length-cloneOfGenerated.length)+"回<br>";
        counter.innerHTML+="お前の運:"+yourLuck.toFixed(2);
    }
    }
    counter.innerHTML.length=counter.innerHTML.length-4;
    generated.innerHTML=generated.innerHTML.replaceAll(input.value,"<t class='wow'>"+input.value+"</t>");
    generated.innerHTML=generated.innerHTML.replaceAll('<br><t class="wow">'+input.value+"</t><br>","<br><t class='ohgod'>"+input.value+"</t><br>");
    generated.innerHTML=generated.innerHTML.replaceAll('<br><t class="wow">'+input.value+"</t><br>","<br><t class='ohgod'>"+input.value+"</t><br>");
    generated.innerHTML=generated.innerHTML.replace('<br>',"");
    }
    }
}
function chanceTo(a,b){
    let cti = words.findIndex((element)=>element.word==a);
    return (1-(words[cti].nextWord.replaceAll(b, "").length/words[cti].amount)).toFixed(2);
}
function showDiagram(){
    if(!words.original){
        diagram.innerHTML="文字列を入力して生成してください！！";
        }else{
        diagram.innerHTML="";
        let loopInDiagram=0;
        let loopAmount=0;
        while(loopInDiagram<words.length-1){
            if(!words[loopInDiagram].nextWord[loopAmount] || words[loopInDiagram].nextWord[loopAmount]=="`"){
                if(words[loopInDiagram].nextWord[loopAmount]=="`"){
                    diagram.innerHTML=diagram.innerHTML+"["+words[loopInDiagram].word+"]ー"+chanceTo(words[loopInDiagram].word,words[loopInDiagram].nextWord[loopAmount])+"→[終了]     ";
                    }else{
                diagram.innerHTML=diagram.innerHTML+"     ";
                    }
            }else{
    diagram.innerHTML=diagram.innerHTML+"["+words[loopInDiagram].word+"]";
    if(words[loopInDiagram+1].word!="<br>" && words[loopInDiagram+1].amount>=loopAmount+1){
    diagram.innerHTML=diagram.innerHTML+"ー"+chanceTo(words[loopInDiagram].word,words[loopInDiagram+1].word)+"→";
        }else{
        if(words[loopInDiagram+1].word!="<br>"){
            diagram.innerHTML=diagram.innerHTML+"ー"+chanceTo(words[loopInDiagram].word,words[words.findIndex((element)=>element.amount>=loopAmount+1)].word)+"→["+words[words.findIndex((element)=>element.amount>=loopAmount+1)].word+"]";
             }else if(words[loopInDiagram].amount==1){
            diagram.innerHTML=diagram.innerHTML+"ー"+chanceTo(words[loopInDiagram].word,words[loopInDiagram].nextWord[0])+"→["+words[loopInDiagram].nextWord[0]+"]";
            }
        }
        }
            loopInDiagram++;
            if(loopInDiagram==words.length-1 && words.findIndex((element)=>element.amount>=loopAmount+2)!=-1){
                loopAmount++;
                loopInDiagram=0;
                diagram.innerHTML=diagram.innerHTML+"<br>";
            }
        }
    }
}
