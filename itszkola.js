const nazwaKursu = document.querySelector('#mainTitleK').innerText;
//console.log(nazwaKursu);
let pytaniaOdpowiedzi;
let arr;
const reg =/\s/mg;
switch(nazwaKursu){
        /*Algorytmika i programowanie*/
    case "Algorytmika Internetu":
    
        break;
    case "Algorytmy poszukiwania i porządkowania. Elementy języka programowania":
        
        break;
    case "Czy wszystko można policzyć na komputerze?":
        
        break;
    case "Do czego można wykorzystać język Javascript":
       
        break;
    case "Fraktale wokół nas":
       
        break;
    case "Jak wnioskują maszyny":
        
        break;
    case "Język językowi nie równy":
        
        break;
    case "Mechaniczne dowodzenie twierdzeń":
        
        break;
    case "Między programowaniem a wnioskowaniem":
        
        break;
    case "O relacjach i algorytmach":
       
        break;
    case "Po co informatykom logika":
       
        break;
    case "Podstawy programowania okienkowego w środowisku Visual Studio":
        
        break;
    case "Pomysł, przepis, program … i co dalej?":
        
        break;
    case "Porządek wśród informacji kluczem do szybkiego wyszukiwania":
        
        break;
    case "Programowanie współbieżne w informatyce i nie tylko":
        
        break;
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
    /*Bazy danych*/
    case "Bazy danych - jak je ugryźć?":
        
        break;
    case "Dokumenty XML w relacyjnych bazach danych - czyli wojna światów I":
        
        break;
    case "Hurtownie danych - czyli jak zapewnić dostęp do wiedzy tkwiącej w danych":
        
        break;
    case "Język SQL - podstawy zapytań":
        
        break;
    case "Język SQL czyli jak rozmawiać z bazą danych":
        
        break;
    case "Mechanizmy wewnętrzne baz danych":
        
        break;
    case "Od chaosu do bazy danych":
        
        break;
    case "Odkrywanie struktur ukrytych w danych czyli eksploracja danych":
        
        break;
    case "Optymalizacja zapytań SQL":
        
        break;
    case "Podstawy projektowania i implementacji baz danych":
        
        break;
    case "Procedury, funkcje, wyzwalacze - programowanie w języku T-SQL":
        
        break;
    case "Tworzenie interfejsów do baz danych z wykorzystaniem technologii ADO.Net":
        
        break;
    case "Wykorzystanie XML w relacyjnych bazach danych":
        
        break;
    /*Bezpieczeństwo systemów informatycznych*/
    case "Cyberprzemoc – anonimowość w sieci":
        
        break;
    case "Cyberprzemoc – kompromitujące nagranie w sieci":
        
        break;
    case "Cyberprzemoc – prześmiewcze serwisy internetowe":
        
        break;
    case "Cyberprzemoc – twórca w sieci":
        
        break;
    case "Cyberprzemoc w grach internetowych":
        
        break;
    case "VPN – bezpieczne przeglądanie Internetu":
        
        break;
        /*Biologia*/
    case "Organizm człowieka":
        
        break;
        /*Chemia*/
    case "Jednofunkcyjne pochodne węglowodorów - Aldehydy":
        
        break;
    case "Jednofunkcyjne pochodne węglowodorów - Alkohole":
        
        break;
    case "Jednofunkcyjne pochodne węglowodorów - Ketony":
        
        break;
    case "Węglowodory - Alkany":
        
        break;
    case "Węglowodory - Alkeny":
        
        break;
    case "Węglowodory - Alkiny":
        
        break;
        /*Cyfrowe Igrzyska*/
    case "Bezpieczeństwo":
        
        break;
    case "Ekonomiczne aspekty działania mediów":
        
        break;
    case "Etyka i wartości":
        
        break;
    case "Język mediów":
        
        break;
    case "Kompetencje cyfrowe":
        
        break;
    case "Korzystanie z informacji":
        
        break;
    case "Kreatywne korzystanie z mediów":
        
        break;
    case "Mobilne bezpieczeństwo":
        
        break;
    case "Prawo w komunikacji i mediach":
        
        break;
    case "Relacje w środowisku medialnym":
        
        break;
        /*Fizyka*/
    case "Energia mechaniczna - o tym, że aby mieć coś trzeba się napracować":
        
        break;
    case "Fizyka atomowa i jądrowa - elementarna rzecz o elementarnych składnikach materii":
        
        break;
    case "Grawitacja - o oddziaływaniu między masami":
        
        break;
    case "Grawitacja i elementy astronomii - bliskie i nieco dalsze kosmiczne sąsiedztwo Ziemi":
        
        break;
    case "Magnetyzm, indukcja magnetyczna - jak elektrownie „robią” prąd":
        
        break;
    case "Mechanika bryły sztywnej - co się dzieje gdy ciało się obraca":
        
        break;
    case "Optyka i kwanty promieniowania - jak to się dzieje, że widzimy":
        
        break;
    case "Pole elektryczne - czy da się schwytać pioruny":
        
        break;
    case "Prąd stały - dlaczego świeci żarówka":
        
        break;
    case "Ruch harmoniczny i fale mechaniczne - jak to się dzieje, że słyszymy":
        
        break;
    case "Ruch punktu materialnego - opis ruchu postępowego oraz jego przyczyn":
        
        break;
    case "Termodynamika - co się dzieje we wnętrzu substancji gdy ją ogrzewamy":
        
        break;
        /*Matematyka*/
    case "Ciągi liczbowe":
        
        break;
    case "Odkrywanie elementów stereometrii":
        
        break;
    case "Odkrywanie geometrii kół":
        
        break;
    case "Odkrywanie geometrii trójkąta":
        
        break;
    case "Wielomiany":
        
        break;
        /*Multimedia, grafika i technologie internetowe*/
    case "Cyfrowa synteza fotorealistycznych obrazów w środowisku 3D":
        
        break;
    case "Dlaczego możemy czuć się bezpieczni w sieci, czyli o szyfrowaniu informacji":
        
        break;
    case "Gimp - edycja grafiki i zdjęć":
        
        break;
    case "Graficzna obróbka zdjęć":
        
        break;
    case "Grafika fotorealistyczna - jak się ją tworzy w praktyce":
        
        break;
    case "Grafika komputerowa, czyli jak zrobić coś, czego nie potrafi aparat cyfrowy":
        
        break;
    case "Jak tworzyć nowoczesne strony internetowe?":
        
        break;
    case "Jak zrobić profesjonalny tutorial i film instruktażowy na Youtube":
        
        break;
    case "Metody kodowania i przechowywania sygnałów dźwiękowych":
        
        break;
    case "Miękkie aspekty bezpieczeństwa w Internecie":
        
        break;
    case "Nagrywanie i obróbka filmów":
        
        break;
    case "Obraz jako środek przekazu informacji":
        
        break;
    case "Obróbka i wizualizacja obrazów – jak poprawiać i przekształcać zdjęcia.":
        
        break;
    case "Parametry i usługi sieci dostępu do Internetu – teraz i w przyszłości":
        
        break;
    case "Podstawy kompresji wraz z zastosowaniami":
        
        break;
    case "Przegląd internetowych narzędzi edytorskich":
        
        break;
    case "Resposive Web Design. Wprowadzenie do projektowania nowoczesnych stron internetowych":
        
        break;
    case "Semantyczny Internet":
        
        break;
    case "Techniki Internetu":
        
        break;
    case "Techniki nagrywania, kształtowania i odtwarzania dźwięku":
        
        break;
    case "Techniki rejestracji, obróbki i wizualizacji obrazów ruchomych":
        
        break;
    case "Tworzenie serwisów internetowych":
        
        break;
    case "Ucz się szybko i skutecznie - pracuj metodą projektów":
        
        break;
    case "W poszukiwaniu treści multimedialnych":
        
        break;
    case "Witryna w Internecie – zasady tworzenia i funkcjonowania":
        
        break;
    case "Wpływ systemów wykrywania włamań na bezpieczeństwo informatyczne instytucji":
        
        break;
    case "Zabawa z grafiką z programem Sci lab":
        
        break;
        /*Prawo*/
    case "Prawo autorskie – najważniejsze definicje":
        
        break;
    case "Programy komputerowe jako szczególna kategoria utworów":
        
        break;
    case "Własność intelektualna":
        
        break;
        /*Sieci komputerowe*/
    case "Budowa i działanie sieci komputerowych":
        
        break;
    case "Komunikacja w sieciach komputerowych":
        
        break;
    case "Konfiguracja protokołów routingu statycznego i dynamicznego":
        
        break;
    case "Media transmisyjne w lokalnych sieciach komputerowych":
        
        break;
    case "Podstawy adresowania hostów w sieciach komputerowych":
        
        break;
    case "Podstawy adresowania IP w sieciach komputerowych":
        
        break;
    case "Podstawy bezpieczeństwa sieciowego":
        
        break;
    case "Podstawy budowy i działania sieci komputerowych":
        
        break;
    case "Podstawy działania routerów i routingu":
        
        break;
    case "Podstawy działania sieci bezprzewodowych":
        
        break;
    case "Podstawy działania wybranych usług sieciowych":
        
        break;
    case "Sieci komputerowe w powszechnym użyciu":
        
        break;
    case "Wybrane zagadnienia przetwarzania równoległego – superkomputery i klastry obliczeniowe":
        
        break;
    case "Zarządzanie sieciami LAN":
        
        break;
    case "Zarządzanie sieciami WAN":
        
        break;
        /*Tendencje w rozwoju informatyki*/
    case "Czy komputery będą robić biznes?":
        
        break;
    case "Dlaczego warto studiować informatykę":
        
        break;
    case "Informatyka - klucz do zrozumienia, kariery, dobrobytu":
        
        break;
    case "Informatyka medyczna":
        
        break;
    case "Komputery natury":
        
        break;
    case "Logiczne podejście do reprezentacji wiedzy w sztucznej inteligencji":
        
        break;
    case "Naśladowanie ludzkiego mózgu w komputerze":
        
        break;
    case "Obliczeniowa teoria wyboru społecznego":
        
        break;
    case "Od abaków do maszyny ENIAC i Internetu":
        
        break;
    case "Od złamania Enigmy do współczesnej kryptologii":
        
        break;
    case "Przeszłość i przyszłość informatyki":
        
        break;
    case "Wprowadzenie do SI":
        
        break;
    case "Wstęp do biometrii":
        
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
pytanie = pytanie.replace(/<([^>]+>)/ig,"");
pytanie = pytanie.replace(/<br>/mg,"");
pytanie = pytanie.replace(/&gt/mg,"");
pytanie = pytanie.replace(/&lt/mg,"");
pytanie = pytanie.replace(/;/mg,"");
pytanie = pytanie.replace(/„/mg,"");
pytanie = pytanie.replace(/”/mg,"");
    
//console.log(pytanie);
let selektorOdp = "."+klasa+" .testQuest label";
let odp = document.querySelectorAll(selektorOdp);
for (let j=0; j<odp.length; j++) {
    let tresc = odp[j].innerHTML;
    tresc = tresc.replace(/<([^>]+>)/ig,"");
    tresc = tresc.replace(reg,"").toLowerCase();
    tresc = tresc.replace(/<br>/mg,"");
    tresc = tresc.replace(/&gt/mg,"");
    tresc = tresc.replace(/&lt/mg,"");
    tresc = tresc.replace(/;/mg,"");
    tresc = tresc.replace(/„/mg,"");
    tresc = tresc.replace(/”/mg,"");
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