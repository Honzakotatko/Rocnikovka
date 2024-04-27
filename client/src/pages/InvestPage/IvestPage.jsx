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
            <h2>Investování</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="fakeimg">
                Investování je proces alokace finančních prostředků do různých aktiv s cílem dosáhnout budoucího růstu a zisku. 
                Je to strategický způsob, jak zhodnocovat peníze, a může zahrnovat nákup akcií, dluhopisů, nemovitostí, komodit nebo jiných aktiv. 
                Cílem investování je dosáhnout výnosů nad inflací a dosáhnout finančních cílů, jako je plánování na důchod, 
                financování vzdělání nebo dosažení finanční nezávislosti. Investování vyžaduje trpělivost, 
                pravidelné sledování trhu a schopnost tolerovat riziko spojené s investicemi. Důležitými aspekty investování jsou také diversifikace portfolia, 
                sledování fundamentálních a technických faktorů a dlouhodobý investiční horizont.
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
            <h2>Investování s námi</h2>
            <div className="fakeimg">
            Na naší webové stránce v sekci Investování se můžete dočíst o mnoha užitečných informacích, ať už jste začátečník nebo pokročilý investor. 
            Od diverzifikace portfolia až po různé strategie, nabízíme širokou škálu témat. 
            Pokud máte jakékoli dotazy ohledně této sekce, neváhejte nám napsat do sekce "Dotazy".
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
