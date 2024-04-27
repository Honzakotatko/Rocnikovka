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
            <h2>Technická analýza</h2>
            <h5>Vydání titulku, 24. dubna, 2024</h5>
            <div className="text">
            Technická analýza představuje důležitý nástroj pro obchodníky na burze, kteří hledají možnosti optimalizace svých investičních strategií.
            Tato forma analýzy se zaměřuje na studium historických cenových a objemových dat s cílem předvídat budoucí pohyby cenových úrovní na trhu.<br></br>
            Pro obchodníky poskytuje technická analýza různé nástroje a techniky pro identifikaci trendů a vzorů v cenách aktiv. 
            Mezi tyto nástroje patří různé druhy grafů, jako jsou čárové grafy, svíčkové grafy a liniové grafy, a různé indikátory, jako jsou průměrné hodnoty, oscilátory, a objemové indikátory.<br></br>
            Hlavním cílem technické analýzy je využít minulé výkyvy cen a objemů k identifikaci opakujících se vzorů, které mohou poskytnout informace o tom, kam se trh pravděpodobně bude ubírat v budoucnosti. 
            Obchodníci využívají technickou analýzu k identifikaci bodů vstupu a výstupu z trhu, stanovení úrovní podpory a odporu a vytváření obchodních strategií.<br></br>
            Technická analýza není bez svých omezení a kritiků. Někteří tvrdí, že se jedná o slepou aplikaci minulých dat, která nemusí vždy přesně předpovídat budoucí pohyby na trhu. Další kritika se týká subjektivní povahy interpretace technických indikátorů a vzorů, která může vést k rozdílným výsledkům mezi různými obchodníky.<br></br>
            Nicméně, pro mnoho obchodníků je technická analýza klíčovým prvkem jejich obchodní strategie. 
            S vhodným porozuměním a správným využitím technických nástrojů mohou obchodníci identifikovat obchodní příležitosti s vysokým potenciálem zisku a minimalizovat riziko ztráty. 
            Je důležité, aby každý obchodník pečlivě studoval technickou analýzu a experimentoval s různými nástroji a strategiemi, aby našel ten, který nejlépe vyhovuje jeho obchodnímu stylu a cílům.
            </div>
            <p>Shrnutí</p>
            <p>
            Technická analýza je klíčovým nástrojem pro obchodníky na burze, umožňujícím identifikaci trendů a vzorů v cenách aktiv a optimalizaci obchodních strategií.
            </p>
          </div>
        </div>


        <div className="leftcolumnClanky">
          <div className="backgorund_text">
            <h2>Fundamentální analýza</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="text">
              Tato forma analýzy se zaměřuje na studium základních faktorů ovlivňujících hodnotu investičního aktiva, jako jsou hospodářské ukazatele, výkazy zisku a ztráty společností, makroekonomické trendy a konkurenční prostředí.
              Hlavním cílem fundamentální analýzy je určit skutečnou hodnotu aktiva a identifikovat příležitosti k investování na základě jeho fundamentálních charakteristik. 
              Obchodníci využívají různé metody a nástroje fundamentální analýzy, včetně analýzy finančních výkazů, analýzy makroekonomických indikátorů a hodnocení konkurenčního prostředí.
              Analýza finančních výkazů je jedním z klíčových prvků fundamentální analýzy. <br></br>
              Obchodníci studují výkazy zisku a ztráty společností, aby posoudili finanční zdraví a výkonnost podniku. 
              To zahrnuje analýzu tržeb, nákladů, ziskovosti a dalších klíčových ukazatelů, které mohou poskytnout informace o budoucím vývoji společnosti.
              Makroekonomická analýza je dalším důležitým prvkem fundamentální analýzy. <br></br>
              Obchodníci sledují makroekonomické trendy, jako je růst HDP, inflace, nezaměstnanost a měnová politika, aby identifikovali širší trendy a předpovídali vývoj trhu a ekonomiky.
              Hodnocení konkurenčního prostředí je dalším klíčovým aspektem fundamentální analýzy. 
              Obchodníci studují konkurenční pozici společnosti, její strategii, inovace a další faktory, které mohou ovlivnit její budoucí výkonnost a hodnotu na trhu.<br></br>
              Pro obchodníky je důležité porozumět fundamentální analýze a umět ji efektivně využívat k identifikaci investičních příležitostí a rozhodování o svých obchodních pozicích. 
              Tato forma analýzy poskytuje obchodníkům širokou škálu nástrojů a technik pro objevení hodnotných investičních příležitostí a minimalizaci rizika ztráty.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Fundamentální analýza se zaměřuje na studium základních faktorů ovlivňujících hodnotu investičního aktiva a poskytuje obchodníkům nástroje pro identifikaci investičních příležitostí a minimalizaci rizika ztráty pomocí analýzy hospodářských ukazatelů, výkazů zisku a ztráty společností, makroekonomických trendů a hodnocení konkurenčního prostředí.
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
