const nazwaKursu = document.querySelector('#mainTitleK').innerText;
//console.log(nazwaKursu);
let pytaniaOdpowiedzi;
let arr;
const reg =/\s/mg;
switch(nazwaKursu){
        /*Algorytmika i programowanie*/
    case "Algorytmika Internetu": //10/10
    arr=[['gdzieznalazłazastosowaniemetodasympleks','wmetodachoptymalizacji'],['gdzieznalazłazastosowaniemetodasympleks','wmetodachoptymalizacji'],['któryzwymienionychproblemówalgorytmicznychniejestzwiązanyzsieciąwww','sposobyimplementacjialgorytmu'],['któryzwymienionychproblemówalgorytmicznychniejestzwiązanyzsieciąwww','sposobyimplementacjialgorytmu'],['wktórejzwyszukiwarekinternetowychzostałzastosowanyalgorytmpagerank?','google'],['wktórejzwyszukiwarekinternetowychzostałzastosowanyalgorytmpagerank?','google'],['któryzponiżejwymienionychnaukowcówzajmowałsięregułamidodawaniaiodejmowaniaorazsposobamirozwiązywaniarównaniakwadratowego','muhamedalchwarizmi'],['któryzponiżejwymienionychnaukowcówzajmowałsięregułamidodawaniaiodejmowaniaorazsposobamirozwiązywaniarównaniakwadratowego','muhamedalchwarizmi'],['conazywamyalgorytmiką?','jesttoobszardociekań,wiedzyidoświadczeńdotyczącychalgorytmów'],['conazywamyalgorytmiką?','jesttoobszardociekań,wiedzyidoświadczeńdotyczącychalgorytmów'],['jakąfunkcjerealizujealgorytmpagerank?','indeksujestronyinternetoweprzypisującimwartośćbędącąjednocześnieinformacjąoichjakości,przezcopodczaswyszukiwaniastronyolepszejjakościsąwyświetlanewpierwszejkolejnościnaliście'],['jakąfunkcjerealizujealgorytmpagerank?','indeksujestronyinternetoweprzypisującimwartośćbędącąjednocześnieinformacjąoichjakości,przezcopodczaswyszukiwaniastronyolepszejjakościsąwyświetlanewpierwszejkolejnościnaliście'],['któryzpodanychponiżejproblemów,opisujeruchupakietówwsieci','lider'],['któryzpodanychponiżejproblemów,opisujeruchupakietówwsieci','lider'],['zaznacztąodpowiedzi,któracharakteryzujedobryalgorytm','jestpoprawny,mawłasnośćstop,dajewynikwrozsądnymczasie'],['zaznacztąodpowiedzi,któracharakteryzujedobryalgorytm','jestpoprawny,mawłasnośćstop,dajewynikwrozsądnymczasie'],['conazywamyzłożonościączasowąalgorytmów','jesttoliczbakrokówpotrzebnadowykonaniaalgorytmu'],['conazywamyzłożonościączasowąalgorytmów','jesttoliczbakrokówpotrzebnadowykonaniaalgorytmu'],['wskaż,któryznaukowcówwykazał,żealgorytmnwdwpesymistycznymprzypadkuwykonujeoperacjiarytmetycznych','lame'],['wskaż,któryznaukowcówwykazał,żealgorytmnwdwpesymistycznymprzypadkuwykonujeoperacjiarytmetycznych','lame'],]
        break;
    case "Algorytmy poszukiwania i porządkowania. Elementy języka programowania"://10/10
    arr=[['ileporównańwykonujealgorytmporządkowaniaprzezwybór,zastosowanydociąguuporządkowanego,złożonegoz1000elementów?','tyle,ilewykonujenaciągunieuporządkowanym'],['ileporównańwykonujealgorytmporządkowaniaprzezwybór,zastosowanydociąguuporządkowanego,złożonegoz1000elementów?','tyle,ilewykonujenaciągunieuporządkowanym'],['cotojestwartownik?','element,którysłużydozatrzymywaniaprzeszukiwanianakońcuciągu.'],['cotojestwartownik?','element,którysłużydozatrzymywaniaprzeszukiwanianakońcuciągu.'],['którazponiższychmetodasortowaniawykonujewnajgorszymprzypadkumniejniżn2porównań,gdzienjestliczbąsortowanychelementów.','sortowanieprzezscalanie'],['którazponiższychmetodasortowaniawykonujewnajgorszymprzypadkumniejniżn2porównań,gdzienjestliczbąsortowanychelementów.','sortowanieprzezscalanie'],['ileporównańzostaniewykonanychpodczasscalanianastępującychdwóchciagów:125712152030461011','8'],['ileporównańzostaniewykonanychpodczasscalanianastępującychdwóchciagów:125712152030461011','8'],['jakajestnajmniejszaliczbameczów,jakąmusirozegrać16tenisistów,abywyłonićnajlepszegoidrugiegonajlepszegozawodnikaturnieju?','18'],['jakajestnajmniejszaliczbameczów,jakąmusirozegrać16tenisistów,abywyłonićnajlepszegoidrugiegonajlepszegozawodnikaturnieju?','18'],['jakbędziewyglądałnastępującyciagelementówpozastosowaniudoniegopierwszegokrokuszybkiegoalgorytmusortowania.zakładamy,żepierwszyelementtegociagusłużydopodziałutegociagunadwapodciagi:6579241018','2514691078'],['jakbędziewyglądałnastępującyciagelementówpozastosowaniudoniegopierwszegokrokuszybkiegoalgorytmusortowania.zakładamy,żepierwszyelementtegociagusłużydopodziałutegociagunadwapodciagi:6579241018','2514691078'],['ileporównańnależywykonać,abyznaleźćnajwiększąliczbęwśród100uporządkowanychniemalejącoliczb?','0'],['ileporównańnależywykonać,abyznaleźćnajwiększąliczbęwśród100uporządkowanychniemalejącoliczb?','0'],['jakąwartośćbędziemiałazmiennaspowykonaniunastępującegociąguinstrukcji:ints=0intz=-1for(inti=1i100i++)if(z0){s=s+iz=-z}elsez=-z','sbędziesumąliczbparzystychmiędzy1i100'],['jakąwartośćbędziemiałazmiennaspowykonaniunastępującegociąguinstrukcji:ints=0intz=-1for(inti=1i100i++)if(z0){s=s+iz=-z}elsez=-z','sbędziesumąliczbparzystychmiędzy1i100'],['jakąwartośćbędziemiałazmiennaspowykonaniunastępującegociąguinstrukcji:ints=0for(inti=1i10i++)s=i-s','s=5'],['jakąwartośćbędziemiałazmiennaspowykonaniunastępującegociąguinstrukcji:ints=0for(inti=1i10i++)s=i-s','s=5'],['jakajestnajmniejszaliczbaporównańpotrzebnychdouporządkowania4liczb?','5'],['jakajestnajmniejszaliczbaporównańpotrzebnychdouporządkowania4liczb?','5'],['ilewynosisumakolejnychliczbnaturalnychod1do50?','1275'],['ilewynosisumakolejnychliczbnaturalnychod1do50?','1275'],['jakajestgłębokośćwywołańrekurencyjnychwalgorytmiesortowaniaprzezscalanie,zastosowanymdociąguo24elementach?','5'],['jakajestgłębokośćwywołańrekurencyjnychwalgorytmiesortowaniaprzezscalanie,zastosowanymdociąguo24elementach?','5'],['jakąwartośćbędziemiałazmiennakpowykonaniunastępującegociąguinstrukcji:for(inti=1i100i++)if(i==a[i])k=i','k=0'],['jakąwartośćbędziemiałazmiennakpowykonaniunastępującegociąguinstrukcji:for(inti=1i100i++)if(i==a[i])k=i','k=0'],['jakajestnajmniejszaliczbaporównaćpotrzebnychdoznalezieniajednocześnienajmniejszejinajwiększejliczbywśród35nieuporządkowanychliczby?','51'],['jakajestnajmniejszaliczbaporównaćpotrzebnychdoznalezieniajednocześnienajmniejszejinajwiększejliczbywśród35nieuporządkowanychliczby?','51'],['którazmetodsortowania,dowykonywaniaobliczeńpotrzebujedodatkowejpamięci,owielkościzbliżonejdodługościporządkowanegociagu,naprzechowywaniewynikówpośrednich?','mergesort'],['którazmetodsortowania,dowykonywaniaobliczeńpotrzebujedodatkowejpamięci,owielkościzbliżonejdodługościporządkowanegociagu,naprzechowywaniewynikówpośrednich?','mergesort'],['któryzpolskichmatematykówinicjowałpracedotycząceposzukiwaniaiporządkowaniaelementów?','hugosteinhaus'],['któryzpolskichmatematykówinicjowałpracedotycząceposzukiwaniaiporządkowaniaelementów?','hugosteinhaus'],['jakajestnajmniejszaliczbaporównańwykonywanychprzeznajszybszyalgorytmporządkowaniaciagówuporządkowanychwprzypadku,gdyciągjestuporządkowanyimanelementów?','n-1'],['jakajestnajmniejszaliczbaporównańwykonywanychprzeznajszybszyalgorytmporządkowaniaciagówuporządkowanychwprzypadku,gdyciągjestuporządkowanyimanelementów?','n-1'],['jakajestnajmniejszaliczbaporównańpotrzebnychdoznalezieniadanejliczbywuporządkowanymzbiorzezłożonymz250liczb?','8'],['jakajestnajmniejszaliczbaporównańpotrzebnychdoznalezieniadanejliczbywuporządkowanymzbiorzezłożonymz250liczb?','8'],['któryzponiższychalgorytmówniejestalgorytmemoptymalnym,czyliniejestmożliwienajszybszymalgorytmemdlaproblemu,któryrozwiązuje?','porządkowanieprzezwybór.'],['któryzponiższychalgorytmówniejestalgorytmemoptymalnym,czyliniejestmożliwienajszybszymalgorytmemdlaproblemu,któryrozwiązuje?','porządkowanieprzezwybór.'],['ilepytańwystarczyzadać,bywgrzewodgadywanieliczbyodnaleźćliczbęukrytąwprzedziale[125,182]?','6'],['ilepytańwystarczyzadać,bywgrzewodgadywanieliczbyodnaleźćliczbęukrytąwprzedziale[125,182]?','6'],]
        break;
    case "Czy wszystko można policzyć na komputerze?"://10/10
    arr=[['ktojestautoremsentencjiprzedstawionejponiżej?mówisięczęsto,żeczłowiekdotądniezrozumieczegośzanimnienauczytego-kogośinnego','donalde.knuth'],['ktojestautoremsentencjiprzedstawionejponiżej?mówisięczęsto,żeczłowiekdotądniezrozumieczegośzanimnienauczytego-kogośinnego','donalde.knuth'],['któryzwymienionychponiżejstarożytnychmyślicielipodałalgorytmgenerującyliczbypierwsze?','erastotenes'],['któryzwymienionychponiżejstarożytnychmyślicielipodałalgorytmgenerującyliczbypierwsze?','erastotenes'],['któryzprzedstawionychponiżejalgorytmównienależydometodymetahaurystycznych?','algorytmznajdowanialiczbpierwszych'],['któryzprzedstawionychponiżejalgorytmównienależydometodymetahaurystycznych?','algorytmznajdowanialiczbpierwszych'],['ileporównańnależywykonaćabywzbiorzenieuporządkowanymn-elementowymznaleźćwartośćnajmniejszą?','n-1'],['ileporównańnależywykonaćabywzbiorzenieuporządkowanymn-elementowymznaleźćwartośćnajmniejszą?','n-1'],['algorytmyojakiejzłożonościobliczeniowejwykonująsięnajdłużej?','n!'],['algorytmyojakiejzłożonościobliczeniowejwykonująsięnajdłużej?','n!'],['corozumiemypodpojęciemmetahaurystyka?','algorytmdorozwiązywaniaproblemówobliczeniowych,wykorzystującydorozwiązaniaproblemupewnychdefiniowanychprzeztenalgorytmpojęć,najczęściejstosowanydorozwiązywaniaproblemówoptymalizacji'],['corozumiemypodpojęciemmetahaurystyka?','algorytmdorozwiązywaniaproblemówobliczeniowych,wykorzystującydorozwiązaniaproblemupewnychdefiniowanychprzeztenalgorytmpojęć,najczęściejstosowanydorozwiązywaniaproblemówoptymalizacji'],['jakijestnajwiększywspólnydzielnikliczb42i18?wskażprawidłowąodpowiedź','6'],['jakijestnajwiększywspólnydzielnikliczb42i18?wskażprawidłowąodpowiedź','6'],['któryzwymienionychproblemówalgorytmicznychzaliczanyjestdołatwych?','problemposzukiwaniaelementówwzbiorze'],['któryzwymienionychproblemówalgorytmicznychzaliczanyjestdołatwych?','problemposzukiwaniaelementówwzbiorze'],['którazmetodprogramistycznychdanajszybciejodpowiedźnapytanieczywzbiorzeuporządkowanymznajdujesięzdanawartość','metodaprzezpołowienie'],['którazmetodprogramistycznychdanajszybciejodpowiedźnapytanieczywzbiorzeuporządkowanymznajdujesięzdanawartość','metodaprzezpołowienie'],['wskażodpowiedź,którawstawionawmiejscekropekdazdanieprawdziwe.algorytmpodanyprzezstarożytnegomatematykaodpowiadającynapytaniejakijestnajwiększyodcinek,którymieścisięcałkowiciewdwóchodcinkachoróznejdługości?nosinazwę...','algorytmunwd'],['wskażodpowiedź,którawstawionawmiejscekropekdazdanieprawdziwe.algorytmpodanyprzezstarożytnegomatematykaodpowiadającynapytaniejakijestnajwiększyodcinek,którymieścisięcałkowiciewdwóchodcinkachoróznejdługości?nosinazwę...','algorytmunwd'],]    
        break;
    case "Do czego można wykorzystać język Javascript"://10/10
    arr=[['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=array()z.push("abc")z.push("d")z.push("e")alert(z[1])/script','d'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=array()z.push("abc")z.push("d")z.push("e")alert(z[1])/script','d'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"s=0for(i=2i=10i=i+2){s=s+i}alert(s)/script','30'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"s=0for(i=2i=10i=i+2){s=s+i}alert(s)/script','30'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=1functiona(){z=2}a()alert(z)/script','2'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=1functiona(){z=2}a()alert(z)/script','2'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z="abc"alert(z[1])/script','b'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z="abc"alert(z[1])/script','b'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"alert(3*(2+1))/script','9'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"alert(3*(2+1))/script','9'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=1functiona(){varz=2}a()alert(z)/script','1'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=1functiona(){varz=2}a()alert(z)/script','1'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"alert(3=4)/script','false'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"alert(3=4)/script','false'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z="abc"alert(z.indexof("d"))/script','-1'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z="abc"alert(z.indexof("d"))/script','-1'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=array()z.push("a")z.push("b")z.push("c")alert(z[1])/script','b'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"z=array()z.push("a")z.push("b")z.push("c")alert(z[1])/script','b'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"s=0for(i=1i5i=i+1){s=s*i}alert(s)/script','0'],['cobędziewynikiemwykonanianastępującegoskryptu:scripttype="text/javascript"s=0for(i=1i5i=i+1){s=s*i}alert(s)/script','0'],]   
        break;
    case "Fraktale wokół nas"://8/8
    arr=[['conazywamyfraktalem?zpodanychponiżejdefinicjiwybierznajbardziejwłaściwą.','toobiektsamopodobny,owymiarzeułamkowym'],['conazywamyfraktalem?zpodanychponiżejdefinicjiwybierznajbardziejwłaściwą.','toobiektsamopodobny,owymiarzeułamkowym'],['conazywamywymiaremhausdorffa','jesttowartośćniewymierna,któraopisujewjakisposóbfraktalwypełniaprzestrzeń'],['conazywamywymiaremhausdorffa','jesttowartośćniewymierna,któraopisujewjakisposóbfraktalwypełniaprzestrzeń'],['czydwaczworokąty,któremająproporcjonalnedosiebiebokibędądosiebiepodobne?poniższychodpowiedziwybierztą,którajestprawdziwa','istniejetakiprzypadek,żetakieczworokątybędądosiebie.podobne'],['czydwaczworokąty,któremająproporcjonalnedosiebiebokibędądosiebiepodobne?poniższychodpowiedziwybierztą,którajestprawdziwa','istniejetakiprzypadek,żetakieczworokątybędądosiebie.podobne'],['cotoznaczy,żeobiektysąsamopodobne?wskażprawidłowąodpowiedź','obiektposiadastrukturę,którejkażdaczęśćprzypominacałość'],['cotoznaczy,żeobiektysąsamopodobne?wskażprawidłowąodpowiedź','obiektposiadastrukturę,którejkażdaczęśćprzypominacałość'],['któremuzponiżejwymienionychmatematykówprzypisujesięużycieporazpierwszywprowadzenienazwyfraktale','b.mandelbrot'],['któremuzponiżejwymienionychmatematykówprzypisujesięużycieporazpierwszywprowadzenienazwyfraktale','b.mandelbrot'],['wiedząc,żeprzybudowiesmokaheighwaayaprzy1poziomiebudowyjegokodwynosilnatomiastprzy2poziomiekodllp,wskażzpodanychponiżejodpowiedziilebędziewynosiłkodbudowysmokaprzy4poziomie','llpllpplllpplpp'],['wiedząc,żeprzybudowiesmokaheighwaayaprzy1poziomiebudowyjegokodwynosilnatomiastprzy2poziomiekodllp,wskażzpodanychponiżejodpowiedziilebędziewynosiłkodbudowysmokaprzy4poziomie','llpllpplllpplpp'],['wktórymkrokubudowanakrzywakochabędziefigurąsamopodobną?wskażprawidłowąodpowiedź','wnieskończoności'],['wktórymkrokubudowanakrzywakochabędziefigurąsamopodobną?wskażprawidłowąodpowiedź','wnieskończoności'],['ilewynosiwymianfraktalnydlatrójkątasierpińskiego?wskażprawidłowąodpowiedź','1,586'],['ilewynosiwymianfraktalnydlatrójkątasierpińskiego?wskażprawidłowąodpowiedź','1,586'],]   
        break;
    case "Jak wnioskują maszyny"://8/8
    arr=[['jedenzalgorytmów,bardzoskutecznyipowszechniestosowanywinformatyceisztucznejinteligencjinazywanyjestmetodąrezolucjiidziałanakoniunkcjachklauzul.zponiższychpodpowiedziwskażtą,któradefiniujepojęcieklauzuli.','klauzulatoalternatywazmiennychzdaniowychlubichnegacji'],['jedenzalgorytmów,bardzoskutecznyipowszechniestosowanywinformatyceisztucznejinteligencjinazywanyjestmetodąrezolucjiidziałanakoniunkcjachklauzul.zponiższychpodpowiedziwskażtą,któradefiniujepojęcieklauzuli.','klauzulatoalternatywazmiennychzdaniowychlubichnegacji'],['ilebędziezawieraławartościtablicalogicznadlanzmiennych,gdzien=8','256'],['ilebędziezawieraławartościtablicalogicznadlanzmiennych,gdzien=8','256'],['jaknazywamywlogiceprzedstawioneponiżejzapytanie?~cytryna','nagacją'],['jaknazywamywlogiceprzedstawioneponiżejzapytanie?~cytryna','nagacją'],['conazywamytautologią?','jesttoformuła,którazawszeprzyjmujewartośćprawdy'],['conazywamytautologią?','jesttoformuła,którazawszeprzyjmujewartośćprawdy'],['naczympolegametodarezolucji?wskażpoprawnąodpowiedź','metodatapoleganaprzechodniościimplikacji,czylijeżeli(p=q)oraz(q=r)tomamyprawotwierdzić,że(p=r)'],['naczympolegametodarezolucji?wskażpoprawnąodpowiedź','metodatapoleganaprzechodniościimplikacji,czylijeżeli(p=q)oraz(q=r)tomamyprawotwierdzić,że(p=r)'],['zponiżejwymienionychzdańwybierzto,którecharakteryzujemodelowaniewinformatyce.','identyfikacjacechobiektu'],['zponiżejwymienionychzdańwybierzto,którecharakteryzujemodelowaniewinformatyce.','identyfikacjacechobiektu'],['zaponiższychodpowiedziwskażtą,któracharakteryzujepojęcierachunekzdań','badaprawdziwośćzdańzłożonychnapodstawiezdańskładowychiwkonsekwencjiokreślapoprawnośćwnioskowania'],['zaponiższychodpowiedziwskażtą,któracharakteryzujepojęcierachunekzdań','badaprawdziwośćzdańzłożonychnapodstawiezdańskładowychiwkonsekwencjiokreślapoprawnośćwnioskowania'],['dlapodanegoponiżejprzykładuzaznaczpoprawnąodpowiedź¬(porq)=¬p','wnioskowaniejestpoprawnedlakażdejwartościzmiennychlogicznychpiq'],['dlapodanegoponiżejprzykładuzaznaczpoprawnąodpowiedź¬(porq)=¬p','wnioskowaniejestpoprawnedlakażdejwartościzmiennychlogicznychpiq'],]
        break;
    case "Język językowi nie równy"://10/10
    arr=[['któraponiżejwymienionychjęzykówprogramowaniamożemynazwaćjęzykiemimperatywnym:','pascal'],['któraponiżejwymienionychjęzykówprogramowaniamożemynazwaćjęzykiemimperatywnym:','pascal'],['wktórymrokupowstałkomputerosborne–1,uznawanyzaprotoplastęlaptopa:','1981'],['wktórymrokupowstałkomputerosborne–1,uznawanyzaprotoplastęlaptopa:','1981'],['programowaniewlogicetojedenzparadygmatówprogramowania,którazponiższychodpowiedzicharakteryzujetenparadygmat:','weryfikowanierelacjiiformułlogicznych'],['programowaniewlogicetojedenzparadygmatówprogramowania,którazponiższychodpowiedzicharakteryzujetenparadygmat:','weryfikowanierelacjiiformułlogicznych'],['pierwszyrodzajarchitekturykomputeracharakteryzującysiętym,żeniewyodrębniasięwnimoddzielnejpamięcidladanychirozkazów,zostałopracowanyw1945roku.zaznacznazwiskonaukowca,którybyłwspółtwórcątejarchitektury','john(jános)vonneumann'],['pierwszyrodzajarchitekturykomputeracharakteryzującysiętym,żeniewyodrębniasięwnimoddzielnejpamięcidladanychirozkazów,zostałopracowanyw1945roku.zaznacznazwiskonaukowca,którybyłwspółtwórcątejarchitektury','john(jános)vonneumann'],['któryzniżejwymienionychjęzykówprogramowaniajestnowsząwersjąjęzykapascal:','delphi'],['któryzniżejwymienionychjęzykówprogramowaniajestnowsząwersjąjęzykapascal:','delphi'],['któryzwymienionychponiżejkomputerówpowstałnajwcześniej:','eniac'],['któryzwymienionychponiżejkomputerówpowstałnajwcześniej:','eniac'],['smalltalktojęzykprogramowaniaspełniającyparadygmaty:','programowaniaobiektowego'],['smalltalktojęzykprogramowaniaspełniającyparadygmaty:','programowaniaobiektowego'],['wskażjęzykspełniającyparadygmatyprogramowaniafunkcyjnego','sml'],['wskażjęzykspełniającyparadygmatyprogramowaniafunkcyjnego','sml'],['zponiższychodpowiedziwskażtą,którawstawionawmiejscekropekdazdanieprawdziwe.fortranto','językwysokiegopoziomu'],['zponiższychodpowiedziwskażtą,którawstawionawmiejscekropekdazdanieprawdziwe.fortranto','językwysokiegopoziomu'],['zaznaczpoprawnąodpowiedź.twórcąjęzykaprogramowaniaalgol60był:','peternaur'],['zaznaczpoprawnąodpowiedź.twórcąjęzykaprogramowaniaalgol60był:','peternaur'],]
        break;
    case "Mechaniczne dowodzenie twierdzeń"://10/10
    arr=[['wskażktórezpodanychinterpretacjisąprawdziwedladanejformuły.(p→~q)∧(q∨r)','pr'],['wskażktórezpodanychinterpretacjisąprawdziwedladanejformuły.(p→~q)∧(q∨r)','pr'],['conazywamytermemwlogicepierwszegorzędu','jesttowyrażenieskładającesięzezmiennych,symbolifunkcyjnychodowolnejargumentowościzpośródustalonegozbioru'],['conazywamytermemwlogicepierwszegorzędu','jesttowyrażenieskładającesięzezmiennych,symbolifunkcyjnychodowolnejargumentowościzpośródustalonegozbioru'],['cooznaczażeformuławlogicepierwszegorzędujestformułąpodstawowa?','jesttoformułanieposiadającazmienne'],['cooznaczażeformuławlogicepierwszegorzędujestformułąpodstawowa?','jesttoformułanieposiadającazmienne'],['kiedyformułajesttautologią?','wtedygdyformułajestprawdziwawkażdejinterpretacji'],['kiedyformułajesttautologią?','wtedygdyformułajestprawdziwawkażdejinterpretacji'],['którazponiżejwymienionychpodpowiedzijestpodstawowymelementemzwiązanym','calculus'],['którazponiżejwymienionychpodpowiedzijestpodstawowymelementemzwiązanym','calculus'],['dlaprzedstawionejponiżejinterpretacjiwskażteformuły,któresąprawdziwe.p=false,q=true','p→q'],['dlaprzedstawionejponiżejinterpretacjiwskażteformuły,któresąprawdziwe.p=false,q=true','p→q'],['conazywamyklauzulawlogice?','jesttozbiórliterałów'],['conazywamyklauzulawlogice?','jesttozbiórliterałów'],['którazwymienionychponiżejpodpowiedziprzedstawiaimplikacje','p→q'],['którazwymienionychponiżejpodpowiedziprzedstawiaimplikacje','p→q'],['conazywamysystemamieksperckimi?','sątosystemykomputerowektóreemulująprocespodejmowaniadecyzjiprzezczłowieka'],['conazywamysystemamieksperckimi?','sątosystemykomputerowektóreemulująprocespodejmowaniadecyzjiprzezczłowieka'],['conazywamymodelamiformuły','sątowszystkieinterpretacjektóresąprawdziwedladanejformuły'],['conazywamymodelamiformuły','sątowszystkieinterpretacjektóresąprawdziwedladanejformuły'],]   
        break;
    case "Między programowaniem a wnioskowaniem"://10/10
    arr=[['którezponiżejwymienionychjęzykówprogramowaniarealizująparadygmatprogramowaniadeklaratywnego?','lips'],['którezponiżejwymienionychjęzykówprogramowaniarealizująparadygmatprogramowaniadeklaratywnego?','lips'],['czywjęzykuprologlubkatalogmożnazdefiniowaćregułęwpostaciw:-alubb?','tak,możnazdefiniowaćtakąregułęaleniewsposóbbezpośredni'],['czywjęzykuprologlubkatalogmożnazdefiniowaćregułęwpostaciw:-alubb?','tak,możnazdefiniowaćtakąregułęaleniewsposóbbezpośredni'],['naczympolegaparadygmatprogramowaniaimperatywnego?','paradygmatprogramowania,któryopisujeproceswykonywaniajakosekwencjęinstrukcjizmieniającychstanprogramu'],['naczympolegaparadygmatprogramowaniaimperatywnego?','paradygmatprogramowania,któryopisujeproceswykonywaniajakosekwencjęinstrukcjizmieniającychstanprogramu'],['naczympolegametodawstępująca?wybierzpoprawnąodpowiedź.','zaczynającodfaktówgenerujemywszystkiemożliwewnioski'],['naczympolegametodawstępująca?wybierzpoprawnąodpowiedź.','zaczynającodfaktówgenerujemywszystkiemożliwewnioski'],['wiedząc,żewregułowychjęzykachoprogramowanąrzeczywistościprzedstawiasięzapomocąfaktówireguł,wskażzponiższychwypowiedzidefinicjęreguł','mówiąjaknależywnioskowaćonowychzależnościach'],['wiedząc,żewregułowychjęzykachoprogramowanąrzeczywistościprzedstawiasięzapomocąfaktówireguł,wskażzponiższychwypowiedzidefinicjęreguł','mówiąjaknależywnioskowaćonowychzależnościach'],['którazponiższychodpowiedzijestprawidłowymsposobemmodelowaniawoparciuareguły?','identyfikacjaprzedmiotów(obiektów)-określeniepojęćiatrybutów-określeniewystępującychrelacji'],['którazponiższychodpowiedzijestprawidłowymsposobemmodelowaniawoparciuareguły?','identyfikacjaprzedmiotów(obiektów)-określeniepojęćiatrybutów-określeniewystępującychrelacji'],['zwrotistniejex…wlogiceklasycznejnazywanyjestkwantyfikatorem.dojakiejgrupyjestonzaliczany?','egzystencjalny'],['zwrotistniejex…wlogiceklasycznejnazywanyjestkwantyfikatorem.dojakiejgrupyjestonzaliczany?','egzystencjalny'],['naczympolegarekurencjawjęzykachregułowych','poleganaustaleniunowegofaktuoobiekciewykorzystującpewnejużwnioskowanieotymobiekcie'],['naczympolegarekurencjawjęzykachregułowych','poleganaustaleniunowegofaktuoobiekciewykorzystującpewnejużwnioskowanieotymobiekcie'],['która,zponiższychwypowiedzijestdefinicjąreguływjęzykuprolog?','r1(t1,…,tn1):-r2(s1,…sn2),…,rk(u1,…,unk)'],['która,zponiższychwypowiedzijestdefinicjąreguływjęzykuprolog?','r1(t1,…,tn1):-r2(s1,…sn2),…,rk(u1,…,unk)'],['wskażzpodanychponiżejodpowiedzicojestpodstawowąstrukturadanychwjęzykuprolog','listy'],['wskażzpodanychponiżejodpowiedzicojestpodstawowąstrukturadanychwjęzykuprolog','listy'],]
        break;
    case "O relacjach i algorytmach"://8/8
    arr=[['conazywamyiloczynem(produktem)kartezjańskimzbiorówxiy?','zbiórwszystkichuporządkowanychparelementównależącychdozbioruxizbioruy'],['conazywamyiloczynem(produktem)kartezjańskimzbiorówxiy?','zbiórwszystkichuporządkowanychparelementównależącychdozbioruxizbioruy'],['jakarelacjęprzedstawiamacierzzamieszczonaponiżej?|0111||1100||1011|r=|1010|','symetryczną'],['jakarelacjęprzedstawiamacierzzamieszczonaponiżej?|0111||1100||1011|r=|1010|','symetryczną'],['conazywamymacierząsymetryczną?wskażprawidłowąodpowiedź','macierzsymetrycznatotakamacierz,którapooperacjitranspozycjidatąsamąmacierz'],['conazywamymacierząsymetryczną?wskażprawidłowąodpowiedź','macierzsymetrycznatotakamacierz,którapooperacjitranspozycjidatąsamąmacierz'],['kiedymożemypowiedzieć,żerelacjajestrelacjąporządkuczęściowego?','wtedygdyrelacjajestzwrotna,asymetrycznaiprzechodnia'],['kiedymożemypowiedzieć,żerelacjajestrelacjąporządkuczęściowego?','wtedygdyrelacjajestzwrotna,asymetrycznaiprzechodnia'],['conazywamyrelacjadwuczłonowąnailoczyniekartezjańskimdwóchzbiorówxxy','jesttodowolnypodzbiórtegoiloczynu'],['conazywamyrelacjadwuczłonowąnailoczyniekartezjańskimdwóchzbiorówxxy','jesttodowolnypodzbiórtegoiloczynu'],['kiedypowiemy,żerelacjajestrelacjąprzechodniości?','jeżelidladowolnychelementówx,y,zex,,zfaktu,żexjestwrelacjizyiyjestwrelacjizz,wynika,żexjestwrelacjizz'],['kiedypowiemy,żerelacjajestrelacjąprzechodniości?','jeżelidladowolnychelementówx,y,zex,,zfaktu,żexjestwrelacjizyiyjestwrelacjizz,wynika,żexjestwrelacjizz'],['którezpodanychponiżejzdańjestniezgodnezzasadatworzeniadiagramuhassego?','grafnarysowaćtak,abywszystkiejegostrzałkibyłyskierowanewdół'],['którezpodanychponiżejzdańjestniezgodnezzasadatworzeniadiagramuhassego?','grafnarysowaćtak,abywszystkiejegostrzałkibyłyskierowanewdół'],['wskażmacierzpowstałąwwynikutranspozycjimacierzya=[(123),(456),(789)]','b=[(147),(258),(369)]'],['wskażmacierzpowstałąwwynikutranspozycjimacierzya=[(123),(456),(789)]','b=[(147),(258),(369)]'],]
        break;
    case "Po co informatykom logika"://9/9
    arr=[['którezponiższychzdańopisujeprawodemorganaczylijesttożsamezwyrażeniemp٨q','¬(¬pv¬q)'],['którezponiższychzdańopisujeprawodemorganaczylijesttożsamezwyrażeniemp٨q','¬(¬pv¬q)'],['dojakiegoalgorytmuposłużyłzmodyfikowanyalgorytmmnożeniarosyjskichchłopów','szybkiegopotęgowaniabinarnego(binpower)'],['dojakiegoalgorytmuposłużyłzmodyfikowanyalgorytmmnożeniarosyjskichchłopów','szybkiegopotęgowaniabinarnego(binpower)'],['któryzprzedstawionychponiżejspójników,niezaliczasiędogrupymetalogicznej?','¬'],['któryzprzedstawionychponiżejspójników,niezaliczasiędogrupymetalogicznej?','¬'],['conazywamyformułamispełnianymiwlogice?','toformuła,któramówi,żeistniejetakiewartościowaniezmiennych,dlaktórychformułastajesięprawdziwa'],['conazywamyformułamispełnianymiwlogice?','toformuła,któramówi,żeistniejetakiewartościowaniezmiennych,dlaktórychformułastajesięprawdziwa'],['ktojestautoremsentencjiprzedstawionejponiżej?wszystkocodasiępowiedzieć......dasiępowiedziećwprostysposób','ludwikwittgenstein'],['ktojestautoremsentencjiprzedstawionejponiżej?wszystkocodasiępowiedzieć......dasiępowiedziećwprostysposób','ludwikwittgenstein'],['jednązesztuk,jakąmusiałnasamympoczątkuswoichstudiówopanowaćnaśredniowiecznychuniwersytetachżakbyłalogika.wskażdziedzinęwchodzącąwskładtejnauki.','dialektyka'],['jednązesztuk,jakąmusiałnasamympoczątkuswoichstudiówopanowaćnaśredniowiecznychuniwersytetachżakbyłalogika.wskażdziedzinęwchodzącąwskładtejnauki.','dialektyka'],['corozumiemypodpojęciemzdaniawlogiceklasycznej?','towypowiedźktórejmożnaprzypisaćwartośćprawdylubfałszu'],['corozumiemypodpojęciemzdaniawlogiceklasycznej?','towypowiedźktórejmożnaprzypisaćwartośćprawdylubfałszu'],['jednązpierwszychosób,którezajęłysięlogikąjakonaukąbyłarystoteles,wswoimdzieleużyłonpojęciasylogizm.wskażdefinicjętegopojęcia.','jesttownioskowanieodwóchprzesłankach,przyczymobieprzesłankizawierająwspólnyelement,akażdyelementwnioskuzawartyjestwdokładniejednejprzesłance'],['jednązpierwszychosób,którezajęłysięlogikąjakonaukąbyłarystoteles,wswoimdzieleużyłonpojęciasylogizm.wskażdefinicjętegopojęcia.','jesttownioskowanieodwóchprzesłankach,przyczymobieprzesłankizawierająwspólnyelement,akażdyelementwnioskuzawartyjestwdokładniejednejprzesłance'],['kiedymożnaokreślićzlogicznegopunktuwidzenia,żeponiższawypowiedźjestprawdziwa?osobywrażliweimłodeniepowinnyoglądaćtegofilmu.','niemogąoglądaćtegofilmuosobywrażliwektóresąmłode'],['kiedymożnaokreślićzlogicznegopunktuwidzenia,żeponiższawypowiedźjestprawdziwa?osobywrażliweimłodeniepowinnyoglądaćtegofilmu.','niemogąoglądaćtegofilmuosobywrażliwektóresąmłode'],]
        break;
    case "Podstawy programowania okienkowego w środowisku Visual Studio"://10/10
    arr=[['własnekontrolkimożnatworzyćnapodstawieklasy:','usercontrol'],['któryfragmentprogramujestbłędnydlaklasytest:classtest{intpole1protectedstringpole2publicdoublepole3privatecharpole4voidmetoda1(){}publicvoidmetoda2(){}protectedvoidmetoda3(){}privatevoidmetoda4(){}}','testtmp=newtest()tmp.metoda1()'],['poleceniethrowsłużydo:','generowaniawyjątku'],['istniejedeklaracjaklasyonazwietest:classtest{intpole1protectedstringpole2publicdoublepole3privatecharpole4voidmetoda1(){}publicvoidmetoda2(){}protectedvoidmetoda3(){}privatevoidmetoda4(){}},któreskładoweklasytestzostanąprzekazanewprzypadkudziedziczeniaztejklasy:','pole2,pole3,metoda2,metoda3'],['wjęzykuc#funkcjematematycznesądostępnejako:','metodystatyczneklasymath'],['wartościpseudolosowe,wjęzykuc#,możnauzyskać:','wywołującstatycznąmetodęnext()klasyrandom'],['wybierzprawdziwezdanie:','projektowanieformularza,wvisualstudio,todeklarowanieklasydziedziczącejzsystemowejklasyform'],['wybierzprawidłowoopisanezachowanieklasyoznaczonejmodyfikatoremabstract:','niemożnatworzyćobiektównapodstawietejklasy,klasadziedziczącazklasyabstrakcyjnejmusizaimplementowaćmetodyabstrakcyjne'],['dowprowadzaniawartościprzezużytkownika,możemynaformularzuwykorzystaćobiektklasy:','textbox'],['podstawowewłasnościklasyto:','identyfikator(nazwa),atrybutyimetody'],['cechyzachowaniaskładowejklasywymuszaneprzezmodyfikatorprotectedto:','składowazachowujesięjakprywatnaijestdziedziczona'],['wybierzprawidłowoopisaneskutkioznaczeniametodymodyfikatoremvirtual:','jeżelimetodazostanieodziedziczonatomożnazmienićjejimplementację'],['składowaklasy,którejniepoprzedzimyżadnymmodyfikatoremdostępu,zachowujesięjakoznaczonamodyfikatorem:','private'],['wybierzprawidłowoopisaneprzeznaczeniedelegatów:','delegatjestkonteneremnametodyotakiejsamejsygnaturze(zwracanytypilistaparametrów)-wywołującdelegatwykonujemywszystkiemetodywnimzawarte'],['wybierzprawdziwezdanie:','modyfikatoroverrideoznaczaimplementacjęodziedziczonejmetody,którawklasiebazowejbyławirtualnalubabstrakcyjna'],['metodainicjalizecomponentto:','metodaklasyform,wywołanawjejkonstruktorze(zawierakodtworzeniakontrolekumieszczonychnaformularzu)'],['wybierzzdanieprawdziwe:','metodaabstrakcyjnajesttylkosygnaturąbezimplementacji'],['wybierzprawidłowoopisanewykorzystanieinterfejsów:','interfejszawierazbiórsygnaturmetod(bezimplementacji),klasamożeimplementowaćwieleinterfejsów,czyliimplementowaćzawartewnichmetody'],['wjęzykuc#każdaklasadziedziczyz:','systemowejklasyobject'],['któradeklaracjajestpoprawnadlametodyobsługującejzdarzenie:','privatevoidmetoda2(objectsender,eventargse)'],]        
        break;
    case "Pomysł, przepis, program … i co dalej?"://10/10
    arr=[['którezdaniejestprawdziwe','wydawanieresztynapodstawiezbiorudowolnychnominałówniemusidaćpoprawnegowyniku'],['istotąhermetyzacjijest:','zapewnienie,żebydostępdopólklasymiałytylkojejmetody'],['którezpodanychzdańjestprawdziwe','napodstawiedeklaracjiklasymożnatworzyćwieleobiektów'],['którezpodanychzadańjestprawdziwe?','wprogramieobiektowymniemożemydeklarowaćzmiennychifunkcjiglobalnych'],['metodakonstruktoramusibyćoznaczonamodyfikatoremdostępu?','public'],['którezpodanychzdańjestprawdziwe?','klasamusiposiadaćmetodękonstruktora'],['wskażpoprawnądeklaracjęklasyonazwieelement,któradziedziczypoklasieonazwienominal','classelement:nominal{}'],['którymodyfikatorumożliwiadostępdopolalubmetodyklasynawetwtedygdynieistniejeżadenobiektdanejklasy?','static'],['którezpodanychzadańjestfałszywe?','metodaoznaczonamodyfikatoremdostępuprotectedmożebyćwywołanaprzezobiektyzewnętrzne'],['wskażpoprawnepolecenietworzeniaobiektunapodstawieklasyonazwieelement:','elementzm=newelement()'],]
        break;
    case "Porządek wśród informacji kluczem do szybkiego wyszukiwania"://9/9
    arr=[['któryzponiżejwymienionychalgorytmównajszybciejzrealizujezadanieporządkowaniazbioru','algorytmquicksort'],['ileporównańnależydokonaćabywzbiorzen–elementowymznaleźćwartośćminimaxstosującalgorytmdzielizwyciężaj','3n/2-2'],['jakiezadanierealizujeprzedstawionyponiżejzapomocąlistykrokówalgorytm?krok1dlaj=1,2,..,n-1wykonajkrok1…krok4,anastępniezakończalgorytmkrok2pmin-jkrok3dlai=j-1,j+2,…,njeżelid[i]d[pmin],topmin-ikrok4d[j]-d[pmin]','sortowanieprzezwybór'],['jakiejzłożonościobliczeniowejjestalgorytmsortowaniamargesort','logarytmicznej'],['stosującalgorytmwyszukiwaniaprzezpołowieniedlazbioruuporządkowanegoowielkościn=100000,ilenależymaksymalniewykonaćporównańabysprawdzićczyliczbalznajdujesięwzbiorze.','17'],['wskażzdanieprawdziwe.metodaprogramistycznadzielizwyciężajwykorzystywanawcelusprawdzeniaczyzadanawartośćznajdujesięwzbiorze,realizowanajestdlazbiorów…','uporządkowanych'],['ilenależyrozegraćdodatkowychmeczywturniejutenisowymabywyłonićdrugiegonajlepszegograczaturniejuwiedząc,żeliczbauczestnikówjestrównan=8','2'],['ileoperacjiporównanianależywykonaćabydlanieuporządkowanegozbiorudwudziestoelementowego,wyszukaćwartośćnajmniejszą?','19'],['któryzponiżejwymienionychalgorytmównajszybciejwyświetliwynikoperacjiwyszukiwaniawzbiorzenieuporządkowanymzadanejprzezużytkownikawartości','algorytmwyszukiwanialiniowegozwartownikiem'],]
        break;
    case "Programowanie współbieżne w informatyce i nie tylko":
    arr=[['kiedyprogramwspółbieżnyjestpoprawny?','kiedyspełniazarównowymogiwłasnościbezpieczeństwajakiżywotności'],['zponiższychpodpowiedziwybierzto,któreopisujepojęcieproceswujęciuprogramowaniawspółbieżnego.','toobiektydynamicznewykonująceciąginstrukcji'],['naczympolegaproblemzakleszczeniawprogramowaniuwspółbieżnym','wsystemienicsięniedzieje,aprocesyoczekująnazdarzeniektórenigdyniezajdzie'],['conazywamywykonaniemprogramówasynchronicznie?','wykonywanieprogramówprzezprocesyniezależnieodsiebie'],['którezwymienionychponiżejzdańsąwłasnościamibezpieczeństwaprogramówwspółbieżnych?','programmusibyćbezpiecznydlawszystkichmożliwychprzeplotów'],['którezponiższychzdańjestprawdziwe?','dwaróżneprocesymogąwykonywaćtensamprogram'],['jeżelidwaprocesywykonująwspółbieżnietensamprogramzwiększaniapięciokrotnegowartościxojeden,gdziewartośćpoczątkowaxjestrówna0.jakąwartośćmożeprzyjąćxpozakończeniuobydwuprocesów.wskażprawidłowąodpowiedź.','xzawszebędziemniejszebądźrówne10'],['wskażcechęprogramowaniawspółbieżnego.','bardzodobraelastycznośćistrukturaprogramu'],['którezprzedstawionychponiżejsposobówwykonaniaprogramówwspółbieżnychnależydokategoriiwykonanianierównoległego?','systemówprzeplocie'],['conazywamyprogramemwspółbieżnym?','jesttoprogramw,którymwieleczynnościmożeodbywaćsięjednocześnie'],]
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
    case "Jednofunkcyjne pochodne węglowodorów - Aldehydy"://10/10
    arr=[['związekowzorzec6h5–ch=ch–chowystępujewcynamonie.wskaż,którapróbapotwierdzijegonienasyconycharakter','reakcjazbromemwśrodowiskuccl4'],['nazwazwyczajowabenzeno-1,2-dikarboaldehyduto','aldehydftalowy'],['procesutlenieniaetylenuzachodziwsposóbnajbardziejselektywny,jeślikatalizatoramireakcjisąchlorekpalladu(ii)oraz___________.poanalizieponiższychrównańreakcjichemicznych,wskażnazwęsystematycznądrugiegokatalizatora(a,b,clubd).c2h4+pdcl2+h2o→ch3cho+pd+2hclpd+_____→cucl+pdcl2','chlorekmiedzi(ii)'],['etanalmożemyotrzymaćwwynikureakcjiuwodnienia_______wobecnościsiarczanu(vi)rtęci(ii)ikwasusiarkowego(vi)','etynu'],['odczynniktollensato','[ag(nh3)2]+'],['nazwasystematycznaaldehydumasłowegotoaldehyd','butanowy'],['produktemreakcjifenoluzformaldehydemjest','żywicafenylowo-formaldehydowaożółtejbarwie'],['prawidłowozapisanerównanieprzedstawiającepróbętrommerato','rcho+2cu(oh)2→rcooh+cu2o+2h2o'],['wskaż,wwynikuktórejreakcjiorazzjakiegozwiązkupowstajesubstancjaowzorze:ch3-ch2-ch2-ch2-cho','utlenianiapentan-1-olu'],['związekchemiczny,którywystępujewziarnachkawyorazwdojrzałychowocachto','etanal'],]
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
    let tresc = odp[j].innerText;
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
    console.log(tresc);
    //console.log(id);
}
}