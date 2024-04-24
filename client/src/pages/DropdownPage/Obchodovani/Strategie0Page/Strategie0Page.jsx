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
            <img
              src="./res/img/stahování-removebg-preview.ico"
              alt=""
              id="logo"
            />
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
            <h5>Vydání titulku, 28. dubna, 2024</h5>
            <div className="fakeimg">
              Obchodování na burze představuje proces nakupování a prodeje
              finančních nástrojů jako jsou akcie, dluhopisy a komodity. Hlavním
              účelem je dosáhnout zisku z rozdílu mezi cenou nákupu a prodeje
              aktiv. Důležité aspekty zahrnují analýzu trhu a aktiv, řízení
              rizika, diverzifikaci portfolia a psychologii obchodování. Analýza
              trhu může být technická nebo fundamentální a poskytuje klíčové
              informace o budoucím vývoji cen. Řízení rizika zahrnuje používání
              strategií jako jsou stop-loss příkazy a diverzifikace portfolia s
              cílem minimalizovat možné ztráty. Psychologie obchodování také
              hraje důležitou roli, protože emoce mohou ovlivnit rozhodovací
              proces. Je podstatné zachovat klid a disciplinu i v situacích, kdy
              trh reaguje nečekaně. Obchodování na burze je dynamický proces
              vyžadující neustálou pozornost a schopnost přizpůsobit se změnám
              na trhu.
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
            <h2>Investování</h2>
            <div id="border">
              <h5>Vydání titulku, 28. dubna, 2024</h5>
              <div className="fakeimg">
                Investování je proces alokace finančních prostředků do různých aktiv s cílem dosáhnout budoucího růstu a zisku. 
                Je to strategický způsob, jak zhodnocovat peníze, a může zahrnovat nákup akcií, dluhopisů, nemovitostí, komodit nebo jiných aktiv. 
                Cílem investování je dosáhnout výnosů nad inflací a dosáhnout finančních cílů, jako je plánování na důchod, 
                financování vzdělání nebo dosažení finanční nezávislosti. Investování vyžaduje trpělivost, 
                pravidelné sledování trhu a schopnost tolerovat riziko spojené s investicemi. Důležitými aspekty investování jsou také diversifikace portfolia, 
                sledování fundamentálních a technických faktorů a dlouhodobý investiční horizont.
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
        <div className="rightcolumn">
          <div className="card">
            <h2>Účel stránky</h2>
            <div className="fakeimg">
              Cílem této vzdělávací stránky zaměřené na obchodování a
              investování je poskytnout stručné a komplexní informace, rady a
              nástroje jak pro začátečníky, tak pokročilé obchodníky. Cílem je
              pomoci jim porozumět finančním trhům, ovládnout základy
              obchodování a efektivně spravovat svá portfolia.
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className="card">
            <h3>Popular Post</h3>
            <div className="fakeimg">
              <p>Image</p>
            </div>
            <div className="fakeimg">
              <p>Image</p>
            </div>
            <div className="fakeimg">
              <p>Image</p>
            </div>
          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
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
