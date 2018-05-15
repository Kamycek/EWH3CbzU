let pytania = document.querySelectorAll('.test h4');
let odpowiedzi = document.querySelectorAll('.test p');
let tresc = "arr = [";
let pyt;
let odp;
const reg =/\W/mgi;
    for (var i = 0; i < pytania.length; i++) {
		pyt = pytania[i].innerHTML;
		pyt = pyt.replace(/<([^>]+>)/ig,"");
		pyt = pyt.replace(reg,"");
		odp = odpowiedzi[i].innerHTML;
        odp = odp.replace(/<([^>]+>)/ig,"");
		odp = odp.replace(reg,"");
        tresc += '[\''+pyt+'\',\''+odp+'\'],';
    }
tresc +="]";
tresc = tresc.toLowerCase();

tresc