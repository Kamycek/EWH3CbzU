const nazwaKursu = document.querySelector('#mainTitleK').innerText;
//console.log(nazwaKursu);
let pytaniaOdpowiedzi;
let arr;
const reg =/\s/mg;
switch(nazwaKursu){
        /*Algorytmika i programowanie*/
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
        /*       Bezpieczeństwo systemów informatycznych     */
    case "Cyberprzemoc – anonimowość w sieci":
       arr=[['czykorzystajączinternetumogępozostaćcałkowicieanonimowy?','każdamojaaktywnośćimojedziałaniewsiecipozostawiajakiśślad,nawetgdykorzystamzespecjalnychtechnikmaskującychdziękicorazlepszymibardziejskutecznymtechnikomśledczymprawiezawszeudajesięzlokalizowaćkońcoweurządzenie,zktóregodokonanoszkody.'],['oczymnależypamiętaćprzywymyślaniubezpiecznegohasła?','dokażdegokontapowinniśmytworzyćinnehasło,żebyskuteczniezabezpieczyćsięprzedwłamaniemnanaszekonta.'],['ojakimurządzeniumożemypowiedzieć,żejestprzypadkowe?','hasłapowinnybyćzłożone,zconajmniej8znakówiskładaćsięzkombinacjiliter(najlepiejdużychimałych),cyfr,atakżeznakówspecjalnych(nawet,gdypolitykahasełtegoniewymaga).niepowinnyzawieraćinformacjiosobistych.'],['dlaczegofacebookiinneportaleinformującię,gdylogujeszsięwinnyniżzazwyczajsposób(np.innysprzęt,innalokalizacja)?','przypadkoweurządzeniatotakisprzęt,zktóregokorzystakażdy,np.wsklepach,bibliotekachiinnychpublicznychmiejscach,toteżtelefony,komputeryiinnesprzętyzastępcze.powinniśmyznichkorzystaćtylkowwyjątkowychokolicznościach.'],['conależyzrobićgdyktośwłamiesięnamojekontonaportaluspołecznościowym?','jesttokażdeurządzenie,którechoćnachwilęzejdziezmojegopolawidzenia(niewiemjakieoprogramowaniejesttamzainstalowane,jakmogąbyćwykorzystanedane,którenanimudostępnię).'],['cosięmożestać,gdyktośsięwłamienamojekontonaportaluspołecznościowym?','monitorowanienaszejaktywnościinaszegozachowanianadanymportaluspołecznościowymsłużyprzedewszystkimnaszemubezpieczeństwu.alert,któryotrzymujemyodadministratorówmożenasostrzec,żektośpróbujewłamaćsięnanaszekonto.'],['czyzawszepowinniśmysięwylogowaćzkontaportaluspołecznościowego,bankowego,pocztowegolubinnegoposkończonejpracy?','wartoskontaktowaćsięzadministratoremorazspróbowaćodzyskaćkonto.większośćportalispołecznościowychdajetakąmożliwość,czasamijednakmożezająćtotrochęczasu.gdyodzyskamykonto,trzebaprzedewszystkimzmienićhasłonanoweorazsprawdzić,jakieaktywnościnamoimkonciezostałypodjęte.'],['naczympolegapoczucieanonimowościwinternecie?','konsekwencjewłamaniasięnakontomogąbyćbardzopoważne.przedewszystkimktośuzyskujedostępdomoichprywatnychrozmów,kontaktów,zdjęćiinnychdanych.ponadtomożeskraśćmojątożsamość,mojekontonaportaluspołecznościowymlubwłamaćsięnamojekontobankowe.'],['czymjestmenadżerhaseł?','zawszepowinniśmypamiętaćowylogowaniusię,nawetgdykorzystamytylkozurządzeńosobistych.niestetyczasemmożemyzostawićtelefon,laptopczytabletniezablokowanyiktośuzyskadostępdonaszychkont.jeżelibędziemykorzystaćzopcjiwylogowania,wejdzienamtownawykigdyskorzystamyzprzypadkowegourządzenia,niezapomnimyotym.'],['oczymnależypamiętać,gdykorzystamyzprzypadkowegosprzętu?','poczucieanonimowościwsiecijestbardzopozorne.mimo,żeniezostawiamyswoichdanychosobowych,zostawiamywinternecieinneślady,np.adresipczyinnedanedotyczącemojejsieciczymojegosprzętu.jeżeliniewyrządzamnikomukrzywdy,stosujesiędopowszechnieobowiązującegoprawa,niktniebędziemniesprawdzałanikontrolował.'],]
        break;
    case "Cyberprzemoc – kompromitujące nagranie w sieci":
        arr=[['jakieznaczeniedlazintegrowaniaklasymająpodziałyuczniównaróżnegrupy,paczki?','takiepodziałysąnormalne,niemusząjednakwpływaćnegatywnienaatmosferęwklasie.normalnejest,żeniekażdegolubimytaksamoiniezkażdymlubimyspędzaćczas.ważnejestjednakto,żebybyćtolerancyjnymiotwartymnawszystkich,nietraktowaćnikogozgórylubgorzejodinnych.'],['ktomożebyćświadkiemcyberprzemocy,zwłaszczatej,któramamiejscewklasielubwszkole?','świadkamisąwszyscy,którzywiedząotym,cosiędziejewokółklasy,zwłaszczawinternecie.sąniminietylkoosobyzaangażowanewkonflikt,alecałaspołecznośćszkolna,wtymnauczyciele,częstopedagog,anawetrodzice,którzyzrozmówzdzieckiemwiedzą,cosiędziejewklasielubszkole.'],['jakiesąprzesłankicyberprzemocy?','cyberprzemocniekiedyjestgłupim,złośliwymżartem,którymożejednakprzerodzićsięwcośniekontrolowanego,przynieśćnegatywneskutki,ajejsprawcamożenawetzostaćpociągniętydoodpowiedzialnościkarnej.zanimjednaksprawęzgłosimynapolicjęlubprokuraturęwartoposzukaćinnychrozwiązań.'],['jakajestzależnośćmiędzycyberprzemocąanieporozumieniamiwklasie?','cyberprzemocczęstojestodzwierciedleniemkonfliktówinieporozumień,któredziejąsięwrealu.'],['cooznaczastwierdzenie,żeklasajestgrupąspołeczną?','klasajestgrupąspołeczną,ponieważ:uczniowiefunkcjonująwniejwoparciuookreślonezasadyróżniąsięzajmowanymipozycjamiirolami,alewzajemnienasiebieoddziałująmiędzyuczniamizachodząrelacjeocharakterzeformalnymlubnieformalnym.'],['czymjestbullying?','jesttozjawiskopolegającenadługotrwałymiintencjonalnymdziałaniusprawcylubgrupysprawców,któregocelemjestwyrządzeniekomuśkrzywdy,wyłączenielubwyizolowaniegozdanejgrupy.'],['czyjezachowanialubczyjapostawamanajwiększywpływnaskalęzjawiskacyberprzemocy?','najważniejsząrolęwprocesiecyberprzemocypełniąświadkowie,którzypoprzezszybkieiwłaściwereakcjemogązatrzymaćtenproces.'],['cooznacza,żejesteśświadkiemcyberprzemocy?','świadkiemcyberprzemocyjestsięzawsze,gdysięjąwidzi.możnabyćświadkiemczynnym,czylitym,którysięangażuje,lubbiernym,czylitakimconicnierobi.trzebajednakpamiętać,żebrakzaangażowaniaireagowanianacyberprzemoctosiła,którądajemysprawcy.'],['wjakisposóbmożnazgłosićproblemprzemocy,któradotyczyuczniazmojejklasylubszkoły?','każdąprzemoc,którąwidzimywartozgłosićnauczycielowi,wychowawcylubinnejosobiedorosłej,któramożepomócosobiedoświadczającejprzemocy.jeżeliniemamyodwagizgłosićtegoosobiście,możemyskorzystaćnp.zeskrzynekkontaktowych.'],['cooznaczastwierdzeniepozytywnaatmosferawklasie?','jesttoatmosfera,wktórejuczniowieczująsięzesobąbezpieczni,sąwobecsiebieotwarciikoleżeńscy.mimo,żeniewszyscysięprzyjaźniązesobą,każdystarasiębyćwobecsiebiewporządkuiniewyrządzaćinnymkrzywdy.'],]
        break;
    case "Cyberprzemoc – prześmiewcze serwisy internetowe":
        arr=[['czymjestprawodozapomnienia?','prawodozapomnieniaustanowiłtrybunałsprawiedliwościuniieuropejskiejiodnosisiędowyszukiwarekgoogle.umożliwianamusunięciezwynikówwyszukiwaniainformacjionas(zdjęć,filmów,danychosobowych),którekiedyśzostałyzamieszczonewinternecie.'],['czyzgłaszanienaruszeńinadużyćwinternecie,zwłaszczatychdotyczącemojejosobyjestskuteczneibezpieczne?','jeżeliktośwrzucabezmojejzgodytreściprezentującemójwizerunek,mojątwórczośćlubdotycząmojejosobymamprawozgłosićtodoadministratoraserwisuipoprosićousunięcie.przeważniejesttokilkakliknięć,wypełnienieformularzalubprzesłaniemaila.zdarzasięjednak,żeniektóreserwisybędąprosićoprzesłanieskanudokumentupotwierdzającegotożsamość.wtakichsytuacjachnależyprzeczytaćregulamin,czypozweryfikowaniutożsamościdokumentyzostanązniszczoneiskasowanie.'],['oczymnależypamiętaćwrzucającdointernetuzdjęciabliskiego,znajomegolubosobytrzeciej?','jeżelichcęwstawićczyjeśzdjęciadointernetu,bezwzględunaichcharakter(niemusząbyćośmieszająceanikompromitujące),należypamiętać,żerozpowszechnianiewizerunkubezczyjejśzgodyjestniezgodnezprawem.zanimopublikujęzdjęciajakiejśosoby,powinienemzapytaćozgodę.'],['naczympolegagłównazasadadziałaniaprawadozapomnienia?','korzystajączespecjalnychformularzymożemyzgłosićadresystron,naktórychpojawiałysięzdjęcia,filmy,daneosobowelubinnetreścinaruszająceprawaosobistedanejosoby.pootrzymaniuzgłoszeniawyszukiwarkapowinnazablokowaćwynikiwyszukiwaniainiepokazywaćtreści,którezostaływskazanewformularzu.niesąusuwanetreści-tylkowynikiwyszukiwania.'],['oczymnależypamiętaćwrzucającswojezdjęciadointernetu?','zdjęcia,którewrzucamdosiecimogąbyćoglądaneprzezwszystkich,np.mojąrodzinę,nauczycieli,rodzicówmojegochłopakalubdziewczyny,anawetmojegoprzyszłegopracodawcę,dlategoniepowinnybyćośmieszające,kompromitujące,czyprzedstawiającemniewnieprzyzwoitysposób.'],['jakmożnazgłosićzdjęcia/filmylubinnetreści,którenaruszajątwójwizerunek?','wszystkiestrony,portaleiserwisyspołecznościowemająmożliwośćzgłaszanianaruszeńwsieci.czasamijednakopcjetesąukryte.procedurazgłaszaniazajmujewieleczasu,atreściitakniesąusuwane.mimoto,wartodomagaćsięusuwaniazdjęć,naktórychzostałwykorzystanymójwizerunekbezzgody,ponieważgwarantujenamtoprawo.'],['copowinieneśzrobić,gdyspotkaszwsieciośmieszającezdjęciatwojegokolegi,koleżanki?','należypoinformowaćotymosobę,którajestnamateriałachbobyćmożektośzrobiłtobezjejwiedzyizgody.wartoteżsprawęodrazuzgłosićdoadministratora,którybędziemógłszybciejpodjąćinterwencję.'],['jakiedziałanianależypodjąć,gdyktośwrzucitwojekompromitującezdjęciedointernetu?','jeżeliznamosobę,któratozrobiławartozniąporozmawiaćipoprosićousunięcie.wartopowiedziećoswoichuczuciachidyskomforciespowodowanymopublikowaniemzdjęć.ważne,abyzgłosićdoadministratoraserwisunaruszenieipoprosićousunięcietreści.jeżelisytuacjasiępowtarzaizdjęciaciąglekrążąposieci,sprawęmogęzgłosićnapolicję.publikowaniewizerunkubezzgodyjestnaruszeniemprawa.'],['czymjestwizerunekwsieci?','wizerunekwsiecijestswegorodzajuwizytówką.sąnimimojezdjęcia,filmy,treści,któreudostępniamwsieci,zwłaszczazapośrednictwemportalispołecznościowych,atakżecałamojaaktywnośćwsiecinp.naforachczygrupachdyskusyjnych.toteżwszystkieinformacjewsieci,któremożnaznaleźćnamójtemat.'],['conależyzrobić,gdyktośwrzucizdjęcianaktórychjesteś,beztwojejzgody?','jeżeliwiemktotozrobiłtowartoznimporozmawiać,poprosićousunięciezdjęcia,ajeżelitegoniezrobi,samemuzwrócićsięzprośbąousunięciedoadministratoradanegoserwisu.'],]
        break;
    case "Cyberprzemoc – twórca w sieci":
        arr=[['jakiedziałaniawartopodjąć,zanimzaczniemytwórczośćwsieci?(zaznacz2prawidłoweodpowiedzi)','poszukaćwinternecietematów,któremogąbyćinteresującedlaużytkowników'],['conależyzrobić,gdynaszprofilspotkasięzfaląhejtulubbardzonegatywnakrytyką?','porozmawiaćznajbliższymionaszympomyśle,spróbowaćnaszychsiłwrealuiwystąpićnp.naforumklasylubszkoły'],['oczymnależypamiętaćdecydującsięnazałożeniebloga/kanału/stronyinternetowej,naktórejchceszpromowaćswojątwórczość?','wartozastanowićsięnadtym,jaktekomentarzewpływająnamnieijaksięznimiczuje.wwiększośćprzypadkówkomentarzemożnausunąć,aosoby,którejepiszązablokować.trzebajednakpamiętać,żetomożenierozwiązaćnaszychproblemów,atylkojepogłębić.'],['jakajestróżnicamiędzykonstruktywnąkrytykąahejtem?(zaznacz2prawidłoweodpowiedzi)','każdanaszaaktywność/twórczość,którąpokazujemywinternecie,możespotkaćsięzkrytyką,anawetfaląhejtu'],['naczympolegamoderacjawtórna?','celemkrytykijestpróbawpłynięcianaopinięosobykrytykowanejlubosóbstanowiącychpublicznośćdanejdyskusji,zaśhejtmanaceluwywołanienegatywnychemocjiuadresatówlubpubliczności'],['czyadministratorzyportalispołecznościowychbiorąodpowiedzialnośćzato,coznajdujesięnaichstronach?','krytykawyrażonajestwkulturalnysposób,zaśhejtzawierawsobiedużoagresjiiwulgaryzmów'],['conamdajebudowaniespołecznościwokółnaszejtwórczościwsieci?','moderacjawtórnależypostronieadministratoradanejspołeczności,platformylubstronyinternetowej.poleganareagowaniunazgłoszoneprzezużytkownikówtreściireagowaniewobecnich'],['conależyzrobić,gdyjesteśmyświadkamihejtuczyinnegorodzajucyberprzemocywinternecie?','nie,polskieprawoniewymuszaponoszeniaodpowiedzialnościzato,copojawiasięnastronachinternetowych.większośćserwisówzamieszczatakieinformacjewregulaminach,któretrzebazaakceptować,jeżelichcemykorzystaćzichusług.większośćznichpodejmujedziałaniadopierowtedy,gdyużytkownikzgłosiimnadużycia.'],['copowinieneśzrobić,gdywkomentarzachlubpostach,ktośzaczynacigrozić?','budowaniespołecznościumożliwiapodtrzymywaniekontaktówzrówieśnikami,nawiązywanienowychznajomości,wymienianiesięmyślami,poglądami,aleprzedewszystkimpozwalanareagowaniewobecnegatywnychiobraźliwychkomentarzy,zwłaszczatychzawierającychhejt,którepojawiająsięnanaszymprofilu.dziękipozytywnymwpisomłatwiejporadzićsobieztym,conieprzyjemne.'],['najakieustawieniapowinniśmyzwrócićuwagę,gdyrozpoczynamyudostępnianieswojejtwórczośćwsieci?','wartotozgłosićtoadministratoraserwisu,któryposprawdzeniutreścibędziemógłjeusunąćlubzablokować.czasamipomocnemogąbyćteżpozytywnekomentarze,którebędąprzeciwwagądlanegatywnychgłosów.'],]
        break;
    case "Cyberprzemoc w grach internetowych":
        arr=[['ktoiwjakisposóbstajesięczęściąspołecznościinternetowej?','każdy,ktozaczynagraćwjakąśgręinternetową,stajesięczęściąjejspołeczności,atymsamymstajesięzaniąodpowiedzialny.to,jakzachowujemysięwgrze,sposóbwjakirozmawiamyiodzywamysiędosiebiewpływanaspołeczność.'],['jakiekorzyściijakiekompetencjemogąbyćrozwijanedziękigrom?','grającwgrykomputerowemożemysięnauczyćnp.współpracy,działaniawjednymzespole,jednejdrużynie,logicznegomyślenia,czyradzeniasobiewtrudnychsytuacjach.'],['comożnazrobić,żebynasibliscyprzekonalisiędonaszegohobby,którymisąnp.grykomputerowe?','wartoporozmawiaćzeswoimibliskimiiwprowadzićichwświatmojejpasji,hobby.czasamimożenamtozająćtrochęczasu.wartopokazaćnaczympoleganaszapasja(gra),wyjaśnićjejreguły,zasady,atakżewskazaćumiejętnościikompetencje,jakierozwijamypoprzezpasje.'],['społecznośćinternetowawktórejfunkcjonujemyjestodzwierciedleniemnaszejrzeczywistości.conależyzrobić,gdyktośnaruszajejzasady?','naruszeniezasadspołecznościinternetowejnajlepiejzgłaszaćdoadministratorówserwisu,strony,gry,którybędziemógłzweryfikowaćtreści,usunąćjelubzablokować.'],['comożezrobićmoderator,jeśliużytkownikłamieregułyprzyjęteprzezspołeczność?','moderatorwzależnościodwagiprzewinieniamożeupomniećużytkownika,zablokowaćgonaokreślonyczaslubwprzypadkudużegonaruszeniazablokowaćgocałkowicie.'],['dlaczegograczeposługująsięwulgaryzmami?','wulgaryzmy,którepojawiająsięwgrachinternetowychsączęstowynikiemnaszychemocji,którebudzigra.czasamijestwnassporozłościlubagresji,awulgaryzmypomagająnamjąrozładować.wartojednakpanowaćnadsłownictwem,aemocjerozładowywaćwinnysposób.'],['cotojestflaminginternetowy?','seriawrogich,wulgarnychiczęstoobraźliwychwiadomościwysyłanychdojednegolubkilkuczłonkówspołeczności.'],['ktotworzykodeksspołecznościinternetowej?','każdaspołecznośćmaswójwłasnykodeks.ogólnyregulaminizasadygrysąprzeważnieokreślonenapoczątku,akceptujemyje,gdydołączamydogry.tocosiędziejewokółdanejspołecznościjestwynikiemzachowaniajejczłonków,tooniokreślająjejnormy,specyficznyjęzyk,hermetycznycharakter.'],['kiedygraniewgryczyczęstekorzystaniezinternetu,komputerastajesiędlanasniebezpieczne?','każdagrainternetowaczytezkażdyportalmaswójwłasnyregulamin,którytrzebazaakceptować.wsytuacjigdynaruszamyjegozasady,administratormożenasusunąć,zablokowaćlubograniczyćnasząaktywność.'],['dlaczegowulgaryzmywgrzeinternetowejlubnaportalachspołecznościowychmogąbyćniebezpieczne?','graniewgryinternetoweczykorzystaniezinternetumożebyćważnymelementemnaszegożycia.musimyjednakwiedzieć,żegdyzaczniemyzaniedbywaćswoichbliskichiswojeobowiązki,topowinniśmysięwylogowaćiwięcejczasuspędzaćpozasiecią.'],]
        break;
    case "VPN – bezpieczne przeglądanie Internetu":
        arr=[['siećvpnopartajestnaarchitekturze:','klient-serwer'],['certyfikatyuwierzytelnianiawykorzystujesięwrozwiązaniu:','l2tp'],['serwervpn:','musiposiadaćadrespubliczny'],['skrótvpnoznacza:','virtualprivatenetwork'],['abystworzyćserwervpnpotrzebnyjestnamrouterzfunkcją:','pptp/l2tp'],['abyskonfigurowaćvpnzapomocąpptpnarouterzemusimydodaćnastępującewyjątkidozapory:','protokółtpc,port1723iprotokółgre'],['openvpnto:','pakietoprogramowaniaumożliwiającypołączeniezserweramivpnnacałymświecie'],['vpnsłużydo:','tworzeniabezpiecznegopołączeniapomiędzydwomaróżnymisieciamiprywatnymi'],['administratorkonfigurującyrouter,napotkałbłąd“error633:themodem(orotherconnectingdevice)isalreadyinuseorisnotconfiguredproperly.informujeonnasże:','portprotokołutcpzostałźleskonfigurowany'],['podstawowymzałożeniemtechnologiivpnjest:','ukrycieprawdziwegoadresuipurządzeniawceluzwiększeniabezpieczeństwawsieciinternet'],]
        break;

     /*       Biologia     */

    case "Organizm człowieka":
        arr=[['wybierzszereg,wktórymwypisanowitaminyrozpuszczalnewtłuszczach:','a,d,e,k'],['rozrusznikiemsercanazywanyjest:','węzełzatokowo-przedsionkowy'],['tętnicetonaczynia,które:','transportująkrewzsercadonarządów'],['wtychodcinkachprzewodupokarmowegoniesąwytwarzaneenzymytrawienne:','przełyk,jelitogrube'],['białkatrawionesąw:','żołądku,dwunastnicy,jeliciecienkim'],['wsercuznajdująsięzastawkizapobiegającecofaniusiękrwi.wybierzzdanieprawidłowoopisującerozmieszczeniezastawekwsercu','międzyprawymprzedsionkiemiprawąkomorąznajdujesięzastawkatrójdzielna,międzylewymprzedsionkiemilewąkomorąznajdujesięzastawkadwudzielna,nagranicyobukomóritętnicznajdująsięzastawkipółksiężycowate'],['odcinekjelitacienkiego,doktóregouchodząprzewodytrzustkowyiwątrobowyto:','dwunastnica'],]
         break;
    /*       Chemia     */

    case "Jednofunkcyjne pochodne węglowodorów - Aldehydy":
        arr=[['związekowzorzecsub>6/sub>hsub>5/sub>–ch=ch–chowystępujewcynamonie.wskaż,którapróbapotwierdzijegonienasyconycharakter','reakcjazbromemwśrodowiskuccl4'],['nazwazwyczajowabenzeno-1,2-dikarboaldehyduto','aldehydftalowy'],['procesutlenieniaetylenuzachodziwsposóbnajbardziejselektywny,jeślikatalizatoramireakcjisąchlorekpalladu(ii)oraz___________.poanalizieponiższychrównańreakcjichemicznych,wskażnazwęsystematycznądrugiegokatalizatora(a,b,clubd).csub>2/sub>hsub>4/sub>+pdclsub>2/sub>+hsub>2/sub>o→chsub>3/sub>cho+pd+2hclpd+_____→cucl+pdclsub>2/sub>','chlorekmiedzi(ii)'],['etanalmożemyotrzymaćwwynikureakcjiuwodnienia_______wobecnościsiarczanu(vi)rtęci(ii)ikwasusiarkowego(vi)','etynu'],['odczynniktollensato','[ag(nhsub>3/sub>)sub>2/sub>]+'],['nazwasystematycznaaldehydumasłowegotoaldehyd','butanowy'],['produktemreakcjifenoluzformaldehydemjest','żywicafenylowo-formaldehydowaożółtejbarwie'],['prawidłowozapisanerównanieprzedstawiającepróbętrommerato','rcho+2cu(oh)sub>2/sub>→rcooh+cusub>2/sub>o+2hsub>2/sub>o'],['wskaż,wwynikuktórejreakcjiorazzjakiegozwiązkupowstajesubstancjaowzorze:chsub>3/sub>-chsub>2/sub>-chsub>2/sub>-chsub>2/sub>-cho','utlenianiapentan-1-olu'],['związekchemiczny,którywystępujewziarnachkawyorazwdojrzałychowocachto','etanal'],]
             break;

    case "Jednofunkcyjne pochodne węglowodorów - Alkohole":
        arr=[['kontrakcjato','zjawiskofizyczne,którepoleganazmniejszeniuobjętościroztworunaskutekoddziaływańmiędzyskładnikamimieszaniny'],['alkoholemonohydoksyloweulegająreakcji','wszystkieodpowiedzisąpoprawne'],['dodekan-1-olto','substancjastała'],['nazwasystematycznaspirytusudrzewnegotoalkohol','metylowy'],['wybierz,którenumeryponiższychreakcjichemicznychstanowiąmetodyotrzymywaniaalkoholi:1)addycjawodydoalkenów.2)redukcjaaldehydówiketonów.3)elektrofilowepodstawieniegrupy-ohwmiejscefluorowca.4)hydrolizaestrów:kwasowalubzasadowa.5)nukleofilowepodstawieniegrupy-ohwmiejscefluorowca','1,2,4,5'],['wybierzpoprawniewymienioneterminytak,byutworzyłyprawidłowezdania.alkoholemonohydroksyloweulegająreakcjidehydratacji.produktemtejreakcji___________są_________.katalizatorempowyższejreakcjichemicznejjest_________','eliminacji,alkeny,tlenekglinu'],['zaznacznazwęsystematycznązwiązku','but-3-en-2-ol'],['wybierzzdanienieprawdziwe','wrazzewzrostemliczbyatomówwęglawcząsteczce,temperaturatopnienia'],['obecnośćetanolumożemywykryćzapomocądichromianu(vii)potasu.dodającdoroztworustężonykwassiarkowy(vi)iprobówkęumieścimywzlewcezgorącąwodą,zaobserwujemyzmianęzabarwieniaz','pomarańczowejnazieloną'],['najwyższątemperaturęwrzeniaspośródniżejwymienionychzwiązkówwykazuje','etanol'],]
     break;

    case "Jednofunkcyjne pochodne węglowodorów - Ketony":
     arr=[['najwyższątemperaturęwrzenia,spośródniżejwymienionychzwiązków,wykazuje','etanol'],['wybierzzdaniefałszywe','ketonywykazująpozytywnywynikpróbytollensaitrommera'],['próbajodoformowasłużydoidentyfikacjimetyloketonów.jodoformtozwiązekchemicznyowzorzesumarycznym','chisub>3/sub>'],['ketonytopochodnewęglowodorów,posiadającegrupęfunkcyjną,którąnazywamygrupą','karbonylową'],['grupakarbonylowajestspolaryzowana,dlategomożedojśćdoprzyłączenia','wszystkieodpowiedzisąpoprawne'],['nazwasystematycznaketonuomasiecząsteczkowejrównej72uto','butanon'],['związekkarbonylowy,stanowiącyskładniklakierówizmywaczachdopaznokcito','propanon'],['hybrydyzacjaatomuwęglawgrupiekarbonylowejwketonachto','spsup>2/sup>'],]             
     break;

    case "Węglowodory - Alkany":
        arr=[['masacząsteczkowapewnegoalkanuwynosi44u.węglowodórtenzawiera_______%masowychczęściwęgla,ajegonazwato:___________.wktórympodpunkciepoprawniewymienionoelementybrakującewpowyższymzdaniu?','82propan'],['wzórogólnycykloalkanówto:','csub>n/sub>hsub>2n/sub>'],['związkichemiczneopodobnychwłaściwościach,należącedojednegozbioru,wktórymkażdynastępnyzwiązekchemicznyróżnisięodpoprzedniegoojednągrupęmetylenową-chsub>2/sub>sub-,to:','homologi'],['metan,pierwszyprzedstawicielszereguhomologicznegoalkanów,spalasięcałkowicieorazniecałkowicie.przynieograniczonymdopływiepowietrza,produktamitejreakcjichemicznejjestdwutlenekwęglaiwoda.jakikolormawówczaspłomień?','niebieski'],['alkanyzawierająceod1do4atomówwęglatoagazybcieczecsubstancjestałe.jeślizawierająod5do16atomówwęgla,sąacieczamibgazamicsubstancjamistałymi.węglowodorynasycone,posiadającepowyżej17atomówwęglatoagazybcieczecsubstancjestałe.wybierzodpowiedź,którapoprawnieuzupełnipowyższeinformacje.','aac'],['nauczycielprzeprowadziłnalekcjichemiidoświadczeniebadaniezachowaniametanuwobecwodybromowejiroztworumanganianu(vii)potasu.zadaniemuczniówbyłozapisanieobserwacjiiwniosków.któryzuczniówpoprawniewykonałzadanie?','uczeńi:roztwórwodybromowejmiałbarwępomarańczową,amanganianu(vii)potasufioletową.powlaniutychroztworówdometanu,niezaobserwowaliśmyzmian.reakcjachemicznaniezaszła,metanniejestreaktywny.'],['2-chloro-3,4-dimetylopentantoizomer:','2-chloro-2,3,3-trimetylobutanu'],]
     break;

    case "Węglowodory - Alkeny":
        arr=[['wybierzzdaniefałszywe:','alkanemjestbeta-karoten,którychroniskóręprzeddziałaniemszkodliwegopromieniowaniauv.'],['liczbawiązańsigma,wcząsteczce4-metylohept-2-enu,pomiędzyatomamiwęgla,wynosi:','7'],['przyłączenieatomupierwiastkachemicznegolubcząsteczkizwiązkuchemicznego,docząsteczkiocharakterzenienasyconym,to:','reakcjaaddycji'],['stopieńutlenieniaatomuwęglawcząsteczceetylenuwynosi:','-ii'],['hybrydyzacjatooperacjamatematycznaprzekształceniafunkcjifalowychnatakie,któreopisująelektronyenergetycznierównocenneizajmującegeometrycznierównoważneorbitale.walkenachwiązaniepodwójnesiętworzy,gdyorbitaleatomuwęglaulegająhybrydyzacji:','trygonalnej'],['wybierzprawidłowywzórpółstrukturalnyalkadienu:','ch2=ch-ch=ch2'],['zapisującrównaniereakcjichemicznejspalaniaetanu,dodajemydoniegocząsteczkę:','tlenu'],]
     break;

    case "Węglowodory - Alkiny":
        arr=[['wwynikupolimeryzacjitrzechcząsteczeketinupowstajezwiązekorganicznyonazwie:','benzen'],['wybierzpodpunkt,wktórympoprawniewymienionostosunekobjętościowypropynudotlenuwreakcjispalaniacałkowitego.','1:1'],['wwarunkachnormalnych,0,1molaacetylenustanowi:','6,02*10sup>22/sup>cząsteczeki2,6g'],['zaznaczzestaw,wktórympoprawniewymienionozwiązkiorganicznenależącedoszereguhomologicznegoalkinów.','csub>2/sub>hsub>2/sub>,csub>4/sub>hsub>6/sub>,csub>7/sub>hsub>12/sub>,csub>3/sub>hsub>4/sub>'],['wreakcjiaddycjicząsteczkichlorudoetynu,powstaje1,2-dichloroeten.reakcjakuczerowatoreakcjaprzyłączaniacząsteczkowodydoetynuwobecnościkwasusiarkowego(vi)orazsiarczanu(vi)rtęci(ii).propynznalazłzastosowaniewpalnikachgazowo-tlenowych,gdyżmożnagosprężać.wzórogólnyszereguhomologicznegoalkinówto:cnh2n-1.wiedząc,żeptoprawda,aftofałsz,zaznaczjednązczterechmożliwości:','pppf'],['ilewiązańsigmaiilewiązańpiznajdujesięwcząsteczceheks-2,4-diynu?','11sigmaoraz4pi'],['którypodpunktpoprawnieuzupełniponiższezdanie?wiązaniepotrójnewalkinachpowstajewmomenciehybrydyzacji_____________orbitaliatomuwęgla.','dygonalnejsp'],]
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