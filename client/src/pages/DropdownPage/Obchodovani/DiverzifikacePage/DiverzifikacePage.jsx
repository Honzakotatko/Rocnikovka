import "../../../Stylesheet/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="container">
      <div id="header_img">
        <div className="header">
          <div>
          <div id="logo"></div>
          </div>
        </div>
      </div>
      <div className="topnav">
        <div className="navLeftCont">
          <div className="navChild">
            <Link to="/">
              <p className="navP">Domovská stránka</p>
            </Link>
          </div>
          <div className="navChild">
            <Link to="/trade">
              <p className="navP">Obchodování</p>
            </Link>
            <div className="dropdown">
              <Link to="/technologie">
                <p className="dropdownChild">Technologie</p>
              </Link>
              <Link to="/diverzifikace0">
                <p className="dropdownChild">Diverzifikace</p>
              </Link>
              <Link to="/rizika0">
                <p className="dropdownChild">Rizika</p>
              </Link>

              <Link to="/analyza">
                <p className="dropdownChild">Analýza</p>
              </Link>
              <Link to="/nacasovani">
                <p className="dropdownChild">Načasování</p>
              </Link>
              <Link to="/psychologie">
                <p className="dropdownChild">Psychologie</p>
              </Link>
              <Link to="/strategie0">
                <p className="dropdownChild">Strategie</p>
              </Link>
            </div>
          </div>
          <div className="navChild">
            <Link to="/invest">
              <p className="navP">Investování</p>
            </Link>
            <div className="dropdown">
              <Link to="/cil">
                <p className="dropdownChild">Cíl</p>
              </Link>
              <Link to="/strategie">
                <p className="dropdownChild">Strategie</p>
              </Link>
              <Link to="/diverzifikace">
                <p className="dropdownChild">Diverzifikace</p>
              </Link>
              <Link to="/rizika">
                <p className="dropdownChild">Rizika</p>
              </Link>
              <Link to="/monitorovani">
                <p className="dropdownChild">Monitorování</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="navRightCont">
          <div className="navChild">
            <Link to="/question" style={{ float: "right" }}>
              <p className="navP">Dotazy</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="leftcolumnVysvetlivky">
          <div className="card">
            <h2>Diverzifikace portfolia</h2>
            <h5>Vydání titulku, 24. dubna, 2024</h5>
            <div className="fakeimg">
            Diverzifikace portfolia v obchodování na burze je základním prvkem pro řízení rizika a dosažení dlouhodobé stability a udržitelného růstu. 
            Tento koncept spočívá ve spreadování investic do různých typů aktiv a trhů, aby se minimalizovala závislost na jediném zdroji příjmů a snížilo se riziko v případě neúspěchu jednotlivých obchodů.<br></br>
            Hlavním cílem diverzifikace portfolia je snížit vystavení obchodníka jednotlivým tržním nebo aktivním rizikům. 
            To se děje tím, že se obchody rozloží do širokého spektra aktiv, která mají různé výkonnostní charakteristiky a reagují odlišně na tržní události. 
            Pokud jedna obchodní pozice vykazuje špatné výsledky, může to být vyváženo úspěšným výkonem jiných obchodů v portfoliu.<br></br>
            Diverzifikace portfolia může zahrnovat různé typy aktiv, jako jsou akcie, dluhopisy, komodity, forex a další. 
            Rovněž může být diverzifikováno geograficky nebo sektorem, aby se minimalizovalo riziko spojené s regionálními nebo odvětvovými specifiky.<br></br>
            Důležité je si uvědomit, že diversifikace portfolia nemusí eliminovat veškeré riziko, ale může pomoci snížit jeho dopad na celkové portfolio. 
            Je důležité pečlivě vyvážit různé faktory, jako jsou výnosnost, likvidita a riziko, při tvorbě diverzifikovaného portfolia, aby se dosáhlo optimální rovnováhy mezi růstem a ochranou kapitálu.
            </div>
            <p>Shrnutí</p>
            <p>
            Diverzifikace portfolia je klíčovým prvkem pro snížení rizika a dosažení dlouhodobé stability v obchodování na burze, který spočívá ve spreadování investic do různých typů aktiv a trhů s cílem minimalizovat závislost na jediném zdroji příjmů a snížit dopad neúspěšných obchodů.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="cardVysvetlivky">
            <h2>Portfolio</h2>
            <div className="fakeimg">
            Může zahrnovat různá aktiva, jako jsou akcie, dluhopisy, nemovitosti nebo komodity. 
            Diverzifikace portfolia je klíčovým prvkem, umožňuje rozložit riziko a minimalizovat dopady negativních událostí. 
            Správné řízení portfolia vyžaduje pravidelné zhodnocování a přizpůsobení se změnám na trhu a osobním cílům. 
            Je důležité mít jasno v tom, jaké jsou vaše investiční cíle a toleranci k riziku, a na základě toho upravit své portfolio.
            </div>
          </div>
        </div>

        <div className="leftcolumnClanky">
          <div className="card">
            <h2>Rozmanitost aktiv</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="fakeimg">
              Rozmanitost aktiv je klíčovým prvkem pro úspěšné obchodování na burze. 
              Pro obchodníky je důležité rozložit své investice do různých typů aktiv, aby maximalizovali svůj potenciál na zisk a minimalizovali riziko.<br></br>
              Různé typy aktiv zahrnují akcie, dluhopisy, komodity, forex a další. Každý typ aktiva má své vlastní charakteristiky a reaguje odlišně na tržní události. 
              Díky rozmanitosti portfolia mohou obchodníci lépe využít různých tržních trendů a příležitostí.<br></br>
              Rozmanitost aktiv také umožňuje obchodníkům snadněji řídit riziko. 
              Pokud jedno aktivum vykazuje pokles v hodnotě, může být tento pokles vyvážen růstem jiných aktiv v portfoliu. 
              Tím se snižuje celkové riziko portfolia a zvyšuje jeho stabilita.<br></br>
              Je důležité, aby obchodníci pečlivě vyvážili různé faktory, jako jsou výnosnost, likvidita a riziko, při vytváření rozmanitého portfolia. 
              Díky tomu mohou dosáhnout optimální rovnováhy mezi růstem a ochranou kapitálu, což je klíčem k dlouhodobému úspěchu na burze.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Rozmanitost aktiv je klíčovým prvkem pro úspěšné obchodování na burze, umožňujícím obchodníkům maximalizovat ziskový potenciál a minimalizovat riziko prostřednictvím investic do různých typů aktiv, jako jsou akcie, dluhopisy, komodity a forex.
            </p>
          </div>
          <div className="card">
            <h2>Dlouhodobá vs. krátkodobá diverzifikace</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="fakeimg">

              Dlouhodobá versus krátkodobá diverzifikace: Jak se liší a jaká je vhodná pro obchodníky?<br></br>
              Obchodníci se často potýkají s otázkou, jak nejlépe rozložit své investice, aby maximalizovali svůj potenciální zisk a minimalizovali riziko. 
              Diverzifikace je klíčem k dosažení těchto cílů, a existují dva hlavní přístupy: dlouhodobá a krátkodobá diverzifikace.<br></br>
              Dlouhodobá diverzifikace se zaměřuje na vytvoření portfolia s dlouhodobým výhledem. 
              Obchodníci, kteří upřednostňují tento přístup, hledají širokou škálu aktiv, která mají potenciál růst dlouhodobě. 
              To může zahrnovat akcie silných a stabilních společností, dluhopisy s dlouhodobou dobrou bonitou, nemovitosti a další investiční nástroje. 
              Cílem je minimalizovat riziko spojené s výkyvy trhu a dosáhnout stabilního růstu přes čas.<br></br>
              Na druhou stranu, krátkodobá diverzifikace se soustředí na rozložení investic s krátkodobým horizontem. Obchodníci využívající tento přístup často vyhledávají rychlejší zisky nebo se zaměřují na specifické krátkodobé obchodní příležitosti. 
              Mohou využívat krátkodobé obchody, deriváty nebo strategie s krátkodobým časovým horizontem. Cílem je využít krátkodobé výkyvy trhu a dosáhnout rychlých zisků.<br></br>
              Každý z těchto přístupů má své výhody a nevýhody a vhodnost každého záleží na strategii a cílech daného obchodníka. Dlouhodobá diverzifikace může poskytnout stabilitu a pomalejší, 
              ale trvalejší růst, zatímco krátkodobá diverzifikace může nabídnout možnost rychlejších zisků, ale s vyšším rizikem. Je důležité, aby každý obchodník pečlivě zvážil své strategie a cíle před rozhodnutím, jak se diverzifikovat.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Dlouhodobá diverzifikace je zaměřena na vytvoření stabilního portfolia s dlouhodobým růstem, zatímco krátkodobá diverzifikace se soustředí na rychlejší zisky a využívání krátkodobých obchodních příležitostí, přičemž vhodnost každého přístupu závisí na individuální strategii a cílech obchodníka.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Jan Koťátko &copy; 2024</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/origo.master.18" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/honzig_/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/XdDemoliti46800" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}
