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
            <h2>Správné načasování vstupu a výstupu</h2>
            <h5>Vydání titulku, 24. dubna, 2024</h5>
            <div className="fakeimg">
            Tento nástroj se zaměřuje na identifikaci optimálních časových okamžiků pro otevření a uzavření obchodů, což může mít značný vliv na výsledný zisk či ztrátu.<br></br>
            Správné načasování vstupu do obchodu je založeno na analýze tržních signálů, trendů a indikátorů. 
            Obchodníci studují různé aspekty trhu, jako jsou cenové úrovně, objem obchodů, dynamika cenových změn a sentiment trhu, aby identifikovali vhodné časové okamžiky pro vstup do obchodu. 
            To může zahrnovat využití technických indikátorů, jako jsou například oscilátory, průměrné hodnoty a indikátory objemu, nebo fundamentální analýzu, jako je například analýza finančních výkazů společností nebo makroekonomických ukazatelů.<br></br>
            Stejně důležité je i správné načasování výstupu z obchodní pozice. 
            Obchodníci sledují tržní signály a indikátory, které mohou naznačovat změnu trendu nebo vyčerpání pohybu. 
            Tím se snaží uzavřít své pozice v optimálním čase a maximalizovat svůj zisk nebo minimalizovat ztrátu.<br></br>
            Je důležité si uvědomit, že správné načasování vstupu a výstupu vyžaduje pečlivou analýzu a důkladné sledování trhu. 
            Obchodníci by měli být schopni flexibilně reagovat na změny tržních podmínek a přizpůsobovat své obchodní strategie podle aktuální situace. 
            To zahrnuje schopnost odhadnout rizika a odměny spojené s každým obchodem a mít pevný plán pro řízení rizika.<br></br>
            Celkově je správné načasování vstupu a výstupu klíčovým prvkem úspěchu pro každého obchodníka na burze. 
            Porozumění tržním signálům a indikátorům, flexibilita v reakci na změny trhu a schopnost efektivně řídit rizika jsou nezbytné pro dosažení dlouhodobého úspěchu v obchodování.
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="cardVysvetlivky">
            <h2>Stop Loss a Take Profit</h2>
            <div className="fakeimg">
            Stop Loss a Take Profit jsou základními nástroji pro řízení rizika a zajištění zisků při obchodování na finančních trzích. <br></br>
            Stop Loss umožňuje obchodníkům automaticky uzavřít pozici, pokud cena aktiv dosáhne určeného bodu, což pomáhá minimalizovat ztráty. 
            Naopak Take Profit uzavírá pozici, když cena dosáhne určené úrovně, a tím zajišťuje zisk. 
            Tyto nástroje jsou klíčové pro ochranu investic a dosažení úspěchu v obchodování.
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
        </div>

        <div className="leftcolumnClanky">
          <div className="card">
            <h2>Reakce na aktuální události</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="fakeimg">
              Makroekonomické zprávy, výsledky společností, geopolitické události a centrální bankovní rozhodnutí mohou výrazně ovlivnit pohyb cen aktiv a tržní situaci.<br></br>
              Reakce na aktuální události vyžaduje rychlou analýzu informací a následné adaptování obchodní strategie. 
              Obchodníci musí být schopni rychle identifikovat obchodní příležitosti a přizpůsobit své pozice v souladu s nově vzniklou situací.
              Důležitým aspektem úspěšné reakce na aktuální události je příprava a plánování. 
              Obchodníci by měli mít předem definované strategie pro různé scénáře a být schopni rychle se rozhodovat podle předem stanovených kritérií.<br></br>
              Kromě toho je nezbytná také dostupnost relevantních informací. 
              Obchodníci by měli mít k dispozici aktuální zpravodajství a analytické nástroje, které jim umožní rychle získat potřebné informace a posoudit jejich vliv na trh.
              Celkově je schopnost efektivně reagovat na aktuální události nezbytná pro úspěch obchodníků na finančních trzích. 
              Tato schopnost vyžaduje rychlou analýzu, přípravu a plánování, a důkladnou znalost tržních podmínek. 
              </div>
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
          <div className="card">
            <h2>Sezónní obchodní načasování</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="fakeimg">
              Sezónní obchodní načasování se zaměřuje na identifikaci opakujících se vzorů a trendů v různých částech roku, které mohou ovlivnit pohyb cen aktiv.<br></br>
              Jedním z příkladů sezónních trendů může být zvýšená spotřebitelská poptávka po určitých produktech během prázdninových období nebo během specifických sezón v průběhu roku. 
              Například poptávka po energetických nápojích může vzrůst během letních měsíců, zatímco poptávka po sezónních oblečení může vzrůst před začátkem každé sezóny.<br></br>
              Obchodníci mohou využít sezónních trendů k identifikaci obchodních příležitostí a optimalizaci svých investičních strategií. 
              To může zahrnovat vstup do obchodu na základě předpokladu, že se sezónní trend opakuje, a výstup z obchodu, když sezónní trend dosáhne vrcholu.<br></br>
              Důležitým aspektem sezónního obchodního načasování je pečlivá analýza a sledování tržních dat. 
              Obchodníci by měli studovat historická data a sledovat aktuální tržní trendy, aby identifikovali potenciální sezónní vzory a předpověděli jejich budoucí vývoj.<br></br>
              Kromě toho je nezbytné mít vhodnou obchodní strategii pro využití sezónních trendů.
              To může zahrnovat použití technické analýzy k identifikaci vhodných vstupních a výstupních bodů nebo využití derivátů a dalších finančních nástrojů k minimalizaci rizika.
              Celkově je sezónní obchodní načasování zajímavou strategií pro obchodníky na finančních trzích, kteří jsou schopni identifikovat a využít sezónní trendy k dosažení zisku.
              </div>
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
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
