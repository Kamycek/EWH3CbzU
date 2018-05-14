const nazwaKursu = document.querySelector('#mainTitleK').innerText;
//console.log(nazwaKursu);
let pytaniaOdpowiedzi;
let arr;
const reg =/\s/mg;
switch(nazwaKursu){
    case "Algorytmika Internetu":
       arr=[['gdzieznalazłazastosowaniemetodasympleks','wmetodachoptymalizacji'],['któryzwymienionychproblemówalgorytmicznychniejestzwiązanyzsieciąwww','sposobyimplementacjialgorytmu'],['wktórejzwyszukiwarekinternetowychzostałzastosowanyalgorytmpagerank?','google'],['któryzponiżejwymienionychnaukowcówzajmowałsięregułamidodawaniaiodejmowaniaorazsposobamirozwiązywaniarównaniakwadratowego','muhamedalchwarizmi'],['conazywamyalgorytmiką?','jesttoobszardociekań,wiedzyidoświadczeńdotyczącychalgorytmów'],['jakąfunkcjerealizujealgorytmpagerank?','indeksujestronyinternetoweprzypisującimwartośćbędącąjednocześnieinformacjąoichjakości,przezcopodczaswyszukiwaniastronyolepszejjakościsąwyświetlanewpierwszejkolejnościnaliście'],['któryzpodanychponiżejproblemów,opisujeruchupakietówwsieci','lider'],['zaznacztąodpowiedzi,któracharakteryzujedobryalgorytm','jestpoprawny,mawłasnośćstop,dajewynikwrozsądnymczasie'],['conazywamyzłożonościączasowąalgorytmów','jesttoliczbakrokówpotrzebnadowykonaniaalgorytmu'],['wskaż,któryznaukowcówwykazał,żealgorytmnwdwpesymistycznymprzypadkuwykonujeoperacjiarytmetycznych','lame'],]
        break;
    case "Algorytmy poszukiwania i porządkowania. Elementy języka programowania":
        arr=[['ileporównańwykonujealgorytmporządkowaniaprzezwybór,zastosowanydociąguuporządkowanego,złożonegoz1000elementów?','tyle,ilewykonujenaciągunieuporządkowanym'],['cotojestwartownik?','element,którysłużydozatrzymywaniaprzeszukiwanianakońcuciągu.'],['którazponiższychmetodasortowaniawykonujewnajgorszymprzypadkumniejniżn2porównań,gdzienjestliczbąsortowanychelementów.','sortowanieprzezscalanie'],['ileporównańzostaniewykonanychpodczasscalanianastępującychdwóchciagów:125712152030461011','8'],['jakajestnajmniejszaliczbameczów,jakąmusirozegrać16tenisistów,abywyłonićnajlepszegoidrugiegonajlepszegozawodnikaturnieju?','18'],['jakbędziewyglądałnastępującyciagelementówpozastosowaniudoniegopierwszegokrokuszybkiegoalgorytmusortowania.zakładamy,żepierwszyelementtegociagusłużydopodziałutegociagunadwapodciagi:6579241018','2514691078'],['ileporównańnależywykonać,abyznaleźćnajwiększąliczbęwśród100uporządkowanychniemalejącoliczb?','0'],['jakąwartośćbędziemiałazmiennaspowykonaniunastępującegociąguinstrukcji:ints=0intz=-1for(inti=1i100i++)if(z0){s=s+iz=-z}elsez=-z','sbędziesumąliczbparzystychmiędzy1i100'],['jakąwartośćbędziemiałazmiennaspowykonaniunastępującegociąguinstrukcji:ints=0for(inti=1i10i++)s=i-s','s=5'],['jakajestnajmniejszaliczbaporównańpotrzebnychdouporządkowania4liczb?','5'],['ilewynosisumakolejnychliczbnaturalnychod1do50?','1275'],['jakajestgłębokośćwywołańrekurencyjnychwalgorytmiesortowaniaprzezscalanie,zastosowanymdociąguo24elementach?','5'],['jakąwartośćbędziemiałazmiennakpowykonaniunastępującegociąguinstrukcji:for(inti=1i100i++)if(i==a[i])k=i','k=0'],['jakajestnajmniejszaliczbaporównaćpotrzebnychdoznalezieniajednocześnienajmniejszejinajwiększejliczbywśród35nieuporządkowanychliczby?','51'],['którazmetodsortowania,dowykonywaniaobliczeńpotrzebujedodatkowejpamięci,owielkościzbliżonejdodługościporządkowanegociagu,naprzechowywaniewynikówpośrednich?','mergesort'],['któryzpolskichmatematykówinicjowałpracedotycząceposzukiwaniaiporządkowaniaelementów?','hugosteinhaus'],['jakajestnajmniejszaliczbaporównańwykonywanychprzeznajszybszyalgorytmporządkowaniaciagówuporządkowanychwprzypadku,gdyciągjestuporządkowanyimanelementów?','n-1'],['jakajestnajmniejszaliczbaporównańpotrzebnychdoznalezieniadanejliczbywuporządkowanymzbiorzezłożonymz250liczb?','8'],['któryzponiższychalgorytmówniejestalgorytmemoptymalnym,czyliniejestmożliwienajszybszymalgorytmemdlaproblemu,któryrozwiązuje?','porządkowanieprzezwybór.'],['ilepytańwystarczyzadać,bywgrzewodgadywanieliczbyodnaleźćliczbęukrytąwprzedziale[125,182]?','6'],]
        break;
    case "Czy wszystko można policzyć na komputerze?":
        arr=[['ktojestautoremsentencjiprzedstawionejponiżej?mówisięczęsto,żeczłowiekdotądniezrozumieczegośzanimnienauczytego-kogośinnego','donalde.knuth'],['któryzwymienionychponiżejstarożytnychmyślicielipodałalgorytmgenerującyliczbypierwsze?','erastotenes'],['któryzprzedstawionychponiżejalgorytmównienależydometodymetahaurystycznych?','algorytmznajdowanialiczbpierwszych'],['ileporównańnależywykonaćabywzbiorzenieuporządkowanymn-elementowymznaleźćwartośćnajmniejszą?','n-1'],['algorytmyojakiejzłożonościobliczeniowejwykonująsięnajdłużej?','n!'],['corozumiemypodpojęciemmetahaurystyka?','algorytmdorozwiązywaniaproblemówobliczeniowych,wykorzystującydorozwiązaniaproblemupewnychdefiniowanychprzeztenalgorytmpojęć,najczęściejstosowanydorozwiązywaniaproblemówoptymalizacji'],['jakijestnajwiększywspólnydzielnikliczb42i18?wskażprawidłowąodpowiedź','6'],['któryzwymienionychproblemówalgorytmicznychzaliczanyjestdołatwych?','problemposzukiwaniaelementówwzbiorze'],['którazmetodprogramistycznychdanajszybciejodpowiedźnapytanieczywzbiorzeuporządkowanymznajdujesięzdanawartość','metodaprzezpołowienie'],['wskażodpowiedź,którawstawionawmiejscekropekdazdanieprawdziwe.algorytmpodanyprzezstarożytnegomatematykaodpowiadającynapytaniejakijestnajwiększyodcinek,którymieścisięcałkowiciewdwóchodcinkachoróznejdługości?nosinazwę...','algorytmunwd'],]
        break;
    case "Do czego można wykorzystać język Javascript":
       arr=[['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=array()z.push("abc")z.push("d")z.push("e")alert(z[1])/script','d'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"s=0for(i=2i=10i=i+2){s=s+i}alert(s)/script','30'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=1functiona(){z=2}a()alert(z)/script','2'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z="abc"alert(z[1])/script','b'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"alert(3*(2+1))/script','9'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=1functiona(){varz=2}a()alert(z)/script','1'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"alert(3=4)/script','false'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z="abc"alert(z.indexof("d"))/script','-1'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=array()z.push("a")z.push("b")z.push("c")alert(z[1])/script','b'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"s=0for(i=1i5i=i+1){s=s*i}alert(s)/script','0'],]
        break;
    case "Fraktale wokół nas":
        arr=[['conazywamyfraktalem?zpodanychponiżejdefinicjiwybierznajbardziejwłaściwą.','toobiektsamopodobny,owymiarzeułamkowym'],['conazywamywymiaremhausdorffa','jesttowartośćniewymierna,któraopisujewjakisposóbfraktalwypełniaprzestrzeń'],['czydwaczworokąty,któremająproporcjonalnedosiebiebokibędądosiebiepodobne?poniższychodpowiedziwybierztą,którajestprawdziwa','istniejetakiprzypadek,żetakieczworokątybędądosiebie.podobne'],['cotoznaczy,żeobiektysąsamopodobne?wskażprawidłowąodpowiedź','obiektposiadastrukturę,którejkażdaczęśćprzypominacałość'],['któremuzponiżejwymienionychmatematykówprzypisujesięużycieporazpierwszywprowadzenienazwyfraktale','b.mandelbrot'],['wiedząc,żeprzybudowiesmokaheighwaayaprzy1poziomiebudowyjegokodwynosilnatomiastprzy2poziomiekodllp,wskażzpodanychponiżejodpowiedziilebędziewynosiłkodbudowysmokaprzy4poziomie','llpllpplllpplpp'],['wktórymkrokubudowanakrzywakochabędziefigurąsamopodobną?wskażprawidłowąodpowiedź','wnieskończoności'],['ilewynosiwymianfraktalnydlatrójkątasierpińskiego?wskażprawidłowąodpowiedź','1,586'],]
    case "Jak wnioskują maszyny":
        
        break;
    case "Język językowi nie równy":
        
        break;
    case "Mechaniczne dowodzenie twierdzeń":
        
    case "Między programowaniem a wnioskowaniem":
        
    case "O relacjach i algorytmach":
       
        break;
    case "Po co informatykom logika":
       
    case "Podstawy programowania okienkowego w środowisku Visual Studio":
        
        break;
    case "Pomysł, przepis, program … i co dalej?":
       
    case "Porządek wśród informacji kluczem do szybkiego wyszukiwania":
        
        break;
    case "Programowanie współbieżne w informatyce i nie tylko":
        
    case "Proste rachunki wykonywane za pomocą komputera":
        
        break;
    case "Przegląd podstawowych algorytmów":
       
        break;
    case "Razem można więcej – podstawy pracy zespołowej":
        
        break;
    case "Różnorodne algorytmy i ich komputerowe realizacje":
        
        break;
    case "Strukturalnie czy obiektowo – czyli droga do sukcesu":
        
        break;
    case "Struktury danych i ich zastosowanie":
        
        break;
    case "Techniki algorytmiczne przybliżone i dokładne":
        
        break;
    case "Wprowadzenie do algorytmiki i programowania - wyszukiwanie i porządkowanie informacji.":
        
        break;
    case "Wprowadzenie do programowania obiektowego":
        
        break;
    case "Zaawansowane algorytmy":
        
        break;
    case "Znajdowanie najkrótszych dróg i najkrótszych oraz najniższych drzew":
        
        break;
    default:
        console.log("Nie znaleziono kursu!");
}
let udzieloneOdpowiedzi = 0;
pytaniaOdpowiedzi = new Map(arr);
const testPyt = document.querySelectorAll('.testPyt');
for (let i=0; i<testPyt.length; i++) {
    let nazwaKlasy = "pytanie"+(i+1);
    testPyt[i].classList.add(nazwaKlasy)
}
const iloscPytan = testPyt.length;
for (let i =0; i<iloscPytan; i++){
    let nazwaKlasy = "pytanie"+(i+1);
    jednoPytanie(nazwaKlasy);
}

function jednoPytanie(klasa){
let selektorPyt = "."+klasa+" table tbody th";
pytanie = document.querySelector(selektorPyt).innerText;
pytanie = pytanie.replace(reg,"").toLowerCase();
pytanie = pytanie.replace(/&gt/mg,"");
pytanie = pytanie.replace(/&lt/mg,"");
pytanie = pytanie.replace(/;/mg,"");
pytanie = pytanie.replace(/</mg,"");
pytanie = pytanie.replace(/>/mg,"");
pytanie = pytanie.replace(/„/mg,"");
pytanie = pytanie.replace(/”/mg,"");
//console.log(pytanie);
let selektorOdp = "."+klasa+" .testQuest label";
let odp = document.querySelectorAll(selektorOdp);
for (let j=0; j<odp.length; j++) {
    let tresc = odp[j].innerHTML;
    tresc = tresc.replace(reg,"").toLowerCase();
    tresc = tresc.replace(/&gt/mg,"");
    tresc = tresc.replace(/&lt/mg,"");
    tresc = tresc.replace(/;/mg,"");
    tresc = tresc.replace(/</mg,"");
    tresc = tresc.replace(/>/mg,"");
    let id = odp[j].htmlFor;
    if(pytaniaOdpowiedzi.get(pytanie)==tresc){
        udzieloneOdpowiedzi+=1;
        document.getElementById(id).checked = true;
        console.log("Udzielono "+udzieloneOdpowiedzi+"/"+iloscPytan+" odpowiedzi."); 
    }
    //console.log(tresc);
    //console.log(id);
}
}