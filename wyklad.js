const wyklady = document.querySelectorAll('.fRS a')
let wyklad;
let text = "";
for(let i=0;i<wyklady.length;i++){
    wyklad = wyklady[i].href;
    wyklad = wyklad.slice(wyklad.lastIndexOf(",")+1);
    text+=wyklad+",";
}
text = text.slice(0,text.lastIndexOf(","));
console.log(text);