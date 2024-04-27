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
            <h2>Denní obchodování</h2>
            <h5>Vydání titulku, 25. dubna, 2024</h5>
            <div className="fakeimg">
            Day trading vyžaduje rychlé rozhodování a schopnost rychle reagovat na krátkodobé pohyby cen. 
            Obchodníci využívají technickou analýzu a sledování cenových grafů s krátkými časovými horizonty, jako jsou například 1minutové nebo 5minutové intervaly, k identifikaci krátkodobých obchodních příležitostí.<br></br>
            Strategie day tradingu zahrnují například breakout strategie, kdy obchodník vstupuje do obchodu, když cena aktivu prorazí určitou cenovou úroveň, nebo reversal strategie, kdy obchodník vstupuje do obchodu po obratu trendu. 
            Dalšími běžnými strategiemi jsou scalping, kde obchodník vytváří zisk z drobných cenových pohybů, a momentum trading, kdy obchodník vstupuje do obchodu na základě síly současného trendu.<br></br>
            Pro day tradery je důležité mít pevný obchodní plán a disciplinovaně ho dodržovat. 
            To zahrnuje stanovení cílů zisku a ztráty pro každý obchod, používání stop lossů k minimalizaci rizika a dodržování předem stanovených pravidel pro vstup a výstup z obchodů.<br></br>
            Day trading vyžaduje také rychlý internetový připojení a vhodnou obchodní platformu s nízkými poplatky a rychlým provedením obchodů. 
            Obchodníci často také využívají technologie jako jsou elektronické obchodní algoritmy (algotrading) nebo automatizované obchodní systémy (ATS), které umožňují automatizované obchodování na základě předdefinovaných pravidel.<br></br>
            Celkově je day trading rychlým a vzrušujícím způsobem, jak dosáhnout zisku na finančních trzích. Nicméně, vyžaduje trpělivost, disciplínu a dobrou znalost trhu.
            </div>
            <p>Shrnutí</p>
            <p>
            Day trading je rychlý a vzrušující způsob obchodování na finančních trzích, který vyžaduje rychlé rozhodování, disciplínu a dobrou znalost trhu.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="cardVysvetlivky">
            <h2>Výběr strategie</h2>
            <div className="fakeimg">
            Každý obchodník potřebuje svou vlastní strategii, která mu nejlépe vyhovuje. 
            Někomu může přinášet úspěch swing obchodování, kdy se zaměřuje na využití krátkodobých cenových pohybů, zatímco jiný se cítí lépe s denním obchodováním, kdy se snaží vstoupit do obchodu a uzavřít ho během jednoho obchodního dne. 
            Klíčem k úspěchu je nejen vybrat si správnou strategii, ale také ji neustále zdokonalovat a přizpůsobovat se měnícím se tržním podmínkám. 
            Důležité je být otevřený pro experimentování, učení se z vlastních chyb a průběžné optimalizace obchodního přístupu.
            Nakonec, úspěšný obchodník je ten, kdo dokáže nejlépe využít své strategie a přizpůsobit se měnícímu se trhu, a tak dosáhnout dlouhodobého úspěchu.
            </div>
          </div>
        </div>

        <div className="leftcolumnClanky">
          <div className="card">
            <h2>Swing obchodování</h2>
            <div id="bordner">
              <h5>Vydání titulku, 25. dubna, 2024</h5>
              <div className="fakeimg">
              Swing obchodování je obchodní strategie, která se zaměřuje na využití krátkodobých cenových pohybů aktiv jako jsou akcie, forex nebo komodity. 
              Tato strategie je vhodná pro obchodníky, kteří preferují střednědobý časový horizont a jsou ochotni držet své pozice několik dní až několik týdnů.<br></br>
              Cílem swing obchodování je vstoupit do obchodu ve správný čas, kdy je aktivum blízko k dosažení svého maximálního nebo minimálního bodu, a získat zisk z následného cenového pohybu. 
              Obchodníci využívají technickou analýzu a sledování cenových grafů k identifikaci trendů a vzorů, které naznačují možné budoucí pohyby cen.<br></br>
              Mezi běžné strategie swing obchodování patří například trendové strategie, kde obchodník vstupuje do obchodu ve směru hlavního trendu, a protitrendové strategie, kde obchodník vstupuje do obchodu proti hlavnímu trendu v očekávání obratu. 
              Dalšími strategiemi jsou například breakout strategie, kde obchodník vstupuje do obchodu, když cena prorazí určitou cenovou úroveň, nebo pullback strategie, kde obchodník vstupuje do obchodu počkáním na krátkodobý obrat v hlavním trendu.<br></br>
              Pro swing obchodování je důležité mít pevný obchodní plán a dodržovat ho disciplinovaně. 
              To zahrnuje stanovení cílů zisku a ztráty pro každý obchod, používání stop lossů k minimalizaci rizika a dodržování předem stanovených pravidel pro vstup a výstup z obchodů.<br></br>
              Swing obchodování vyžaduje také trpělivost a pečlivé sledování tržních podmínek. 
              Obchodníci by měli být schopni rozpoznat vhodné obchodní příležitosti a efektivně reagovat na změny na trhu. 
              Důkladná analýza a sledování cenových grafů jsou klíčové pro úspěch v swing obchodování.<br></br>
              Celkově je swing obchodování atraktivní strategií pro obchodníky, kteří preferují střednědobý časový horizont a jsou schopni sledovat a využívat krátkodobé cenové pohyby aktiv.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Swing obchodování je strategie, která využívá krátkodobé cenové pohyby aktiv s střednědobým časovým horizontem a klade důraz na identifikaci trendů a vzorů prostřednictvím technické analýzy.
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
