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
          <div className="backgorund_text">
            <h2>Finanční nezávislost</h2>
            <h5>Vydání titulku, 25. dubna, 2024</h5>
            <div className="text">
            Finanční nezávislost je stav, ve kterém máte dostatečný pasivní příjem, který pokrývá vaše životní náklady, aniž byste museli aktivně pracovat. 
            Je to cíl mnoha investorů, kteří touží po svobodě a autonomii ve svém životě.<br></br>
            Cesta k finanční nezávislosti začíná stanovením jasných cílů a plánů pro jejich dosažení. 
            Prvním krokem je určení vaší finanční nezávislosti, tedy toho, jaký příjem budete potřebovat každý měsíc nebo každý rok, abyste mohli žít podle svých představ.<br></br>
            Poté je nezbytné efektivně spořit a investovat své peníze tak, aby generovaly pasivní příjem. 
            To může zahrnovat investování do akcií, dluhopisů, nemovitostí nebo dalších aktiv, která vám mohou vydělávat peníze i tehdy, když spíte.<br></br>
            Důležitým aspektem cesty k finanční nezávislosti je také snižování životních nákladů a minimalizace dluhů.
            Čím méně peněz budete potřebovat k životu, tím snazší bude dosáhnout finanční nezávislosti. 
            Může to znamenat život ve skromnějším bydlení, minimalizaci zbytečných výdajů a úsporné hospodaření s penězi.<br></br>
            K dosažení finanční nezávislosti je nezbytné mít pevný finanční plán a disciplínu ho dodržovat. 
            Může to vyžadovat obětování a odříkání se určitých věcí ve prospěch dlouhodobého cíle finanční svobody.<br></br>
            Je důležité si uvědomit, že cesta k finanční nezávislosti není jednoduchá a vyžaduje čas a úsilí. 
            Nicméně, pokud budete mít pevný závazek a budete pravidelně investovat a spořit, můžete postupně dosáhnout svého cíle a zažít svobodu a autonomii ve svém životě.
            </div>
            <p>Shrnutí</p>
            <p>
            Cesta k finanční nezávislosti zahrnuje stanovení cílů, efektivní spoření a investování pro generování pasivního příjmu, snižování životních nákladů a disciplinovaný finanční plán, který vyžaduje čas a úsilí, ale vede k životní svobodě a autonomii.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="backgorund_textVysvetlivky">
            <h2>Cíl</h2>
            <div className="text">
            Určení cíle je zásadním prvkem pro každého investora. Každý má jiné ambice a motivace, někdo touží po rychlém zbohatnutí, jiný si chce jen přivydělat a další se chtějí investováním živit.
            Nastavení cílů je zcela individuální a záleží pouze na samotném investorovi. 
            Důležité je pečlivě promyslet své cíle a zvážit jejich realističnost a dosažitelnost.
            Investování by mělo být v souladu s vašimi dlouhodobými finančními cíli a životními prioritami.
            Nakonec je cílem investování dosáhnout finanční stability a jistoty, ať už je váš cíl jakýkoliv.
            </div>
          </div>
        </div>

        <div className="leftcolumnClanky">
          <div className="backgorund_text">
            <h2>Důchodové plánování</h2>
            <div id="bordner">
              <h5>Vydání titulku, 25. dubna, 2024</h5>
              <div className="text">
              Důchodové plánování je klíčovým aspektem finančního života každého investora. 
              Jedná se o proces stanovení finančních cílů a vytváření strategie, která zajistí dostatečný příjem v důchodu. 
              Bez ohledu na to, jak daleko je váš důchodový věk, je nikdy příliš brzy začít plánovat svou finanční budoucnost.<br></br>
              Prvním krokem při důchodovém plánování je stanovení jasných cílů. 
              To zahrnuje určení životního stylu, který si přejete mít v důchodu, a odhadovaných nákladů na životní potřeby. 
              Zahrňte do svého plánu také možné zdravotní náklady a další výdaje spojené s důchodem.<br></br>
              Poté je důležité zhodnotit své stávající finanční prostředky a příjmy, včetně úspor, investic, důchodových fondů a sociálního zabezpečení. 
              Poskytuje vám to jasný obraz o tom, jak daleko jste od dosažení svých cílů a co ještě musíte udělat pro jejich dosažení.<br></br>
              Dalším krokem je vytvoření plánu, jak dosáhnout svých důchodových cílů. 
              To může zahrnovat pravidelné investování do důchodových fondů, akcií, dluhopisů nebo nemovitostí. Důležité je mít diverzifikované portfolio, které minimalizuje rizika a zajišťuje stabilní a dlouhodobý růst.<br></br>
              Průběžné sledování a aktualizace vašeho důchodového plánu je klíčové pro dosažení úspěchu. 
              Je důležité pravidelně zhodnocovat své finanční cíle, investice a životní situaci a přizpůsobovat svůj plán podle potřeby.<br></br>
              Důchodové plánování není jednorázová akce, ale spíše kontinuální proces. 
              Čím dříve začnete plánovat, tím lepší budete mít šance dosáhnout finanční svobody a jistoty v důchodu.
              Investoři, kteří věnují pozornost svému důchodovému plánování, mají větší šanci dosáhnout svých finančních cílů a užít si bezstarostný důchod.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Důchodové plánování je proces stanovení cílů, hodnocení finančních prostředků a vytvoření strategie investování, který zajistí dostatečný příjem v důchodu a finanční stabilitu po celý život.
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
