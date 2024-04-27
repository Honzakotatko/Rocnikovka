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
            <h2>Sledování tržních trendů</h2>
            <h5>Vydání titulku, 25. dubna, 2024</h5>
            <div className="fakeimg">
            Prvním krokem k úspěšnému sledování tržních trendů je udržování aktuálních informací o tom, co se děje na trhu. 
            To zahrnuje sledování novinek, ekonomických zpráv, vývoje cen jednotlivých aktiv a dalších faktorů, které mohou ovlivnit tržní prostředí. 
            Díky tomu budete lépe informováni o možných změnách a budete schopni lépe reagovat na tržní události.<br></br>
            Dalším důležitým prvkem sledování tržních trendů je analýza dat a statistik. 
            To zahrnuje zkoumání grafů a historických dat, abyste identifikovali vzory a tendence na trhu. 
            Technická analýza může poskytnout cenné informace o tom, jak se ceny pohybují a jaké jsou možné budoucí směry trhu.<br></br>
            Pokud jde o sledování tržních trendů, je také důležité mít plán pro správu rizik. 
            Tržní trendy se mohou rychle změnit, a proto je důležité být připraven na různé scénáře. 
            To zahrnuje stanovení stop-loss úrovní, určení optimálního poměru rizika a odměny a používání vhodných hedgingových strategií.<br></br>
            Nakonec je klíčové mít realistická očekávání a vyhnout se emocionálním reakcím na tržní události. 
            Tržní trendy se mohou pohybovat nepravidelně a je důležité zůstat klidným a soustředěným. 
            Mít dlouhodobý investiční horizont a dodržovat svůj investiční plán může být klíčem k dosažení dlouhodobého úspěchu.<br></br>
            Sledování tržních trendů je nezbytnou součástí investování a investoři, kteří tomuto procesu věnují dostatečnou pozornost, mohou dosáhnout lepších výsledků a minimalizovat rizika spojená s investováním na finančních trzích.
            </div>
            <p>Shrnutí</p>
            <p>
            Sledování tržních trendů zahrnuje udržování aktuálních informací, analýzu dat a statistik, správu rizik a zachování klidu a realismu při investování, což je klíčem k dosažení úspěchu na finančních trzích.
            </p>
          </div>
        </div>


        <div className="leftcolumnClanky">
          <div className="card">
            <h2>Analýza výkonnosti portfolia</h2>
            <div id="border">
              <h5>Vydání titulku, 25. dubna, 2024</h5>
              <div className="fakeimg">
              Tato analýza poskytuje komplexní pohled na vývoj jejich portfolia a umožňuje jim porozumět, jak se jejich investiční strategie osvědčuje v různých tržních podmínkách.<br></br>
              Klíčové metriky, které se používají k analýze výkonnosti portfolia, zahrnují zhodnocení návratnosti, měření rizika, diversifikaci, průměrnou výnosnost a benchmarking. 
              Tyto metriky umožňují investořům objektivně posoudit výkonnost svého portfolia a identifikovat oblasti, ve kterých je třeba provést úpravy.<br></br>
              Pravidelná analýza výkonnosti portfolia umožňuje investoři sledovat tržní trendy a reagovat na změny v ekonomickém prostředí. 
              Na základě těchto informací mohou upravit své investiční strategie a optimalizovat své portfolia tak, aby dosáhli co nejlepších výsledků.<br></br>
              Celkově lze říci, že analýza výkonnosti portfolia je klíčovým prvkem úspěšného investování. 
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Analýza výkonnosti portfolia je klíčovým prvkem úspěšného investování, umožňuje investoři sledovat vývoj svých investic, porozumět tržním trendům a optimalizovat své strategie pro dosažení co nejlepších výsledků.
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
