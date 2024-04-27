import "../Stylesheet/style.css";
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
        <div className="leftcolumn">
          <div className="card">
            <h2>Obchodování na burze</h2>
            <h5>Vydání titulku, 24. dubna, 2024</h5>
            <div className="fakeimg">
            Obchodování na burze představuje proces nakupování a prodeje finančních nástrojů jako jsou akcie, dluhopisy a komodity. 
            Hlavnímúčelem je dosáhnout zisku z rozdílu mezi cenou nákupu a prodeje aktiv. <br></br>
            Důležité aspekty zahrnují analýzu trhu a aktiv, řízení rizika, diverzifikaci portfolia a psychologii obchodování. 
            Analýza trhu může být technická nebo fundamentální a poskytuje klíčové informace o budoucím vývoji cen. 
            Řízení rizika zahrnuje používání strategií jako jsou stop-loss příkazy a diverzifikace portfolia s cílem minimalizovat možné ztráty. <br></br>
            Psychologie obchodování také hraje důležitou roli, protože emoce mohou ovlivnit rozhodovací proces. 
            Je podstatné zachovat klid a disciplinu i v situacích, kdy trh reaguje nečekaně. 
            Obchodování na burze je dynamický proces vyžadující neustálou pozornost a schopnost přizpůsobit se změnám na trhu.
            </div>
            <p>Shrnutí</p>
            <p>
            Obchodování na burze je komplexní proces, zahrnující nakupování a prodej finančních nástrojů s cílem dosáhnout zisku, přičemž klíčové faktory zahrnují analýzu trhu, řízení rizika a psychologii obchodování.
            </p>
          </div>
          <div className="card">
            <h2>Investování</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="fakeimg">
              Investování je proces alokace finančních prostředků do různých aktiv s cílem dosáhnout budoucího růstu a zisku. 
              Je to strategický způsob, jak zhodnocovat peníze, a může zahrnovat nákup akcií, dluhopisů, nemovitostí, komodit nebo jiných aktiv. <br></br>
              Cílem investování je dosáhnout výnosů nad inflací a dosáhnout finančních cílů, jako je plánování na důchod, financování vzdělání nebo dosažení finanční nezávislosti. 
              Investování vyžaduje trpělivost, pravidelné sledování trhu a schopnost tolerovat riziko spojené s investicemi. <br></br>
              Důležitými aspekty investování jsou také diversifikace portfolia, sledování fundamentálních a technických faktorů a dlouhodobý investiční horizont.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Investování je strategický způsob alokace finančních prostředků za účelem dosažení budoucího růstu a zisku, vyžadující trpělivost, sledování trhu a schopnost tolerovat riziko.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>Účel stránky</h2>
            <div className="fakeimg">
              Cílem této vzdělávací stránky zaměřené na obchodování na burze a
              investování je poskytnout stručné a komplexní informace, rady a
              nástroje jak pro začátečníky, tak pokročilé obchodníky. Cílem je
              pomoci jim porozumět finančním trhům, ovládnout základy
              obchodování a efektivně spravovat svá portfolia.
            </div>
          </div>
          <div className="card">
            <h3>E-mail</h3>
            <div className="fakeimgemail">
              <div>hkotatko@email.cz</div>
            </div>
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
