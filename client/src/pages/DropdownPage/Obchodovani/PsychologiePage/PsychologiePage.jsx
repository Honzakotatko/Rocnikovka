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
          <div className="backgorund_text">
            <h2>Psychologie riskování</h2>
            <h5>Vydání titulku, 24. dubna, 2024</h5>
            <div className="text">
            Pro obchodníky na finančních trzích je psychologie riskování zásadním prvkem při rozhodování o obchodních pozicích. Zvládnutí psychologických aspektů spojených s přijímáním a řízením rizika může mít zásadní vliv na obchodní výkon a dlouhodobý úspěch.<br></br>
            Jedním z klíčových aspektů psychologie riskování je porozumění vlastnímu vnímání rizika. Každý obchodník má individuální tolerance k riziku, což ovlivňuje jeho rozhodování při obchodování. 
            Někteří obchodníci jsou ochotni přijmout vyšší riziko za vyšší potenciální odměnu, zatímco jiní preferují nižší riziko a menší potenciální zisky. Důležité je, aby každý obchodník pochopil své vlastní hranice rizika a jednal v souladu s nimi.<br></br>
            Dalším klíčovým faktorem je schopnost efektivně řídit riziko v rámci svých obchodních strategií. 
            To zahrnuje určení správné velikosti pozice, stanovení úrovní Stop Lossu a Take Profitu a použití vhodných strategií řízení rizika, jako je diversifikace portfolia.<br></br>
            Psychologie riskování také zahrnuje schopnost obchodníka přijímat ztráty a učit se z nich. 
            Každý obchodník se setká s obchody, které skončí ztrátou, a je důležité být schopen tyto ztráty přijmout jako součást obchodního procesu a poučit se z nich pro budoucí obchodování.<br></br>
            Důležitým aspektem psychologie riskování je také schopnost udržet emoční stabilitu během obchodování. 
            Emoce, jako je strach nebo chamtivost, mohou vést k iracionálním rozhodnutím a nepřiměřenému přijímání rizika. 
            Obchodníci by měli být schopni rozpoznat a ovládat tyto emoce, aby mohli dělat racionální a uvážená obchodní rozhodnutí.
            </div>
            <p>Shrnutí</p>
            <p>
            Pro obchodníky na finančních trzích je klíčové porozumění a efektivní řízení psychologie riskování, zahrnující pochopení vlastní tolerance k riziku, správné řízení rizika v rámci obchodních strategií a schopnost přijímat ztráty a udržovat emoční stabilitu.
            </p>
          </div>
        </div>


        <div className="leftcolumnClanky">
          <div className="backgorund_text">
            <h2>Rozvoj sebedůvěry</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="text">
              Důvěra v sebe sama umožňuje obchodníkům důvěřovat svým schopnostem, udržovat chladnou hlavu během obchodování a efektivně řídit svá rozhodnutí.<br></br>
              Jedním z klíčových aspektů rozvoje sebedůvěry je sebekontrola. 
              Obchodník musí být schopen ovládat své emoce a udržovat chladnou hlavu i v době stresu a tlaku. 
              To zahrnuje schopnost racionálně přemýšlet a uváženě jednat i v situacích, kdy se trh pohybuje nepředvídatelně.<br></br>
              Dalším důležitým prvkem je vzdělávání a neustálý růst. 
              Obchodníci by měli neustále zdokonalovat své obchodní dovednosti, učit se ze svých chyb a získávat nové znalosti. 
              Důvěra v sebe sama je posilována znalostmi a zkušenostmi, což umožňuje obchodníkům lépe porozumět trhu a efektivněji reagovat na jeho změny.<br></br>
              Podpora a pozitivní podněty jsou dalším důležitým faktorem pro rozvoj sebedůvěry. 
              Obchodníci by měli hledat podporu od kolegů a mentorů, kteří je mohou povzbuzovat a poskytovat cenné rady. 
              Zároveň je důležité si uvědomit vlastní úspěchy a pokroky a věřit si, že jsou schopni dosáhnout svých cílů.<br></br>
              V neposlední řadě je klíčová praxe a zkušenost. 
              Čím více obchodník obchoduje a čím více situací zažije, tím více se naučí a tím více se jeho sebedůvěra posiluje. 
              Praxe umožňuje obchodníkům získávat důvěru ve své schopnosti a zvyšovat své sebevědomí během obchodního procesu.<br></br>
              Celkově je rozvoj sebedůvěry klíčovým faktorem pro úspěch obchodníků na finančních trzích. 
              Sebedůvěra umožňuje obchodníkům důvěřovat svým schopnostem, udržovat chladnou hlavu během obchodování a efektivně řídit svá rozhodnutí.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Důvěra v sebe sama umožňuje obchodníkům lépe reagovat na změny trhu, udržovat chladnou hlavu a efektivně řídit svá rozhodnutí, což je klíčovým faktorem pro jejich úspěch na finančních trzích.
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
