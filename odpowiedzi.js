let pytania = document.querySelectorAll('.test h4');
let odpowiedzi = document.querySelectorAll('.test p');
let tresc = "arr = [";
const reg =/\s/mg;
    for (var i = 0; i < pytania.length; i++) {
		pyt = pytania[i].innerHTML;
		pyt = pyt.replace(/<([^>]+>)/ig,"");
		pyt = pyt.replace(reg,"");
		odp = odpowiedzi[i].innerHTML;
        tresc += '[\''+pyt+'\',\''+odp+'\'],';
        tresc += '[\''+pytania[i].innerHTML+'\',\''+odpowiedzi[i].innerHTML+'\'],';
    }
tresc +="]";
tresc = tresc.replace(reg,"").toLowerCase();
tresc = tresc.replace(/<br>/mg,"");
tresc = tresc.replace(/&gt/mg,"");
tresc = tresc.replace(/&lt/mg,"");
tresc = tresc.replace(/;/mg,"");
tresc = tresc.replace(/„/mg,"");
tresc = tresc.replace(/”/mg,"");
tresc