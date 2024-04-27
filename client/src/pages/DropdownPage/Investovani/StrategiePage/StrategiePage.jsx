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
        <div className="leftcolumnClanky">
          <div className="card">
            <h2>Alokace aktiv</h2>
            <h5>Vydání titulku, 25. dubna, 2024</h5>
            <div className="fakeimg">
              Alokace aktiv je strategie, kterou mnozí investoři používají k efektivnímu řízení svých investičních portfolií. 
              Tato strategie spočívá ve správném rozdělení investic mezi různé typy aktiv, jako jsou akcie, dluhopisy, nemovitosti a hotovostní rezervy, s cílem dosáhnout optimální rovnováhy mezi rizikem a výnosem.<br></br>
              Jedním z hlavních důvodů, proč je důležité mít správnou alokaci aktiv, je snížení rizika. 
              Rozložením investic do různých tříd aktiv můžete minimalizovat dopad negativních událostí na celkové portfolio. 
              Například pokles hodnoty akcií může být vyvážen stabilními výnosy z dluhopisů nebo nemovitostí.<br></br>
              Dalším důvodem pro správnou alokaci aktiv je optimalizace výnosů. 
              Různé třídy aktiv mají odlišné výnosové charakteristiky a reagují různě na tržní události. 
              Například akcie mohou nabídnout vyšší potenciální růst, zatímco dluhopisy mohou poskytnout stabilní příjmy v podobě úroků. 
              Správná kombinace těchto aktiv může pomoci maximalizovat celkové výnosy portfolia.<br></br>
              Při stanovování optimální alokace aktiv je důležité zvážit své finanční cíle, investiční horizont a toleranci k riziku. 
              Mladší investoři s delším časovým horizontem mohou preferovat vyšší podíl akcií ve svém portfoliu, zatímco starší investoři, kteří se blíží důchodu, mohou upřednostňovat bezpečnější aktiva jako jsou dluhopisy a hotovostní rezervy.<br></br>
              Důležitou součástí správné alokace aktiv je pravidelné přehodnocování a rebalancování portfolia. 
              Investiční cíle a okolnosti se mohou měnit časem, a proto je důležité pravidelně zjišťovat, zda je vaše alokace stále v souladu s vašimi cíli a tolerancí k riziku, a provádět potřebné úpravy.
            </div>
            <p>Shrnutí</p>
            <p>
              Správná alokace aktiv je klíčová pro optimalizaci rizika a výnosů investičního portfolia, což zahrnuje rozložení investic mezi různé třídy aktiv v souladu s finančními cíli a tolerancí k riziku investora.
            </p>
          </div>
        </div>


        <div className="leftcolumnClanky">
          <div className="card">
            <h2>Rebalancování portfolia</h2>
            <div id="border">
              <h5>Vydání titulku, 25. dubna, 2024</h5>
              <div className="fakeimg">
              Tento proces zahrnuje pravidelné přehodnocování a přizpůsobování struktury portfolia v souladu s investičními cíli, rizikovou tolerancí a tržními podmínkami.<br></br>
              Jedním z hlavních důvodů pro rebalancování portfolia je udržení požadovaného poměru mezi různými třídami aktiv. 
              V průběhu času mohou změny na trhu způsobit posun ve váhách jednotlivých aktiv v portfoliu. 
              Například pokles hodnoty akcií může vést k tomu, že jejich podíl na celkovém portfoliu klesne pod požadovanou úroveň. 
              Rebalancování umožňuje investorům vrátit se k původnímu rozložení aktiv a zajistit, že jejich investiční portfolio zůstává v souladu s jejich dlouhodobými cíli.<br></br>
              Dalším důvodem pro rebalancování portfolia je minimalizace rizika. 
              Různé třídy aktiv mají odlišné výkonnostní charakteristiky a reagují různě na tržní události. 
              Pravidelné rebalancování umožňuje investorům snížit vystavení specifickým tržním rizikům tím, že rozloží své investice mezi široké spektrum aktiv.<br></br>
              Rebalancování portfolia by mělo být pravidelnou součástí investiční strategie každého investora. 
              Časování rebalancování může být různé v závislosti na individuálních cílech a preferencích investora, ale obecně by mělo být prováděno minimálně jednou ročně nebo v případě významných změn na trhu.<br></br>
              Důležité je také brát v úvahu náklady a daňové dopady spojené s rebalancováním portfolia. 
              Investoři by měli zvážit případné poplatky spojené s prodejem a nákupem aktiv, stejně jako daňové důsledky přesunu kapitálu mezi různými investicemi.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
            Rebalancování portfolia je klíčové pro udržení požadovaného poměru mezi aktivy, minimalizaci rizika a dosažení dlouhodobých investičních cílů investora.
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
