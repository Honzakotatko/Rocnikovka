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
            <h2>Diverzifikace portfolia</h2>
            <h5>Vydání titulku, 25. dubna, 2024</h5>
            <div className="text">
            Diverzifikace portfolia je základním principem, kterým se řídí mnozí investoři s cílem snížit riziko a dosáhnout dlouhodobé stability a udržitelného růstu. 
            Tento koncept spočívá v rozložení investic do různých typů aktiv a trhů, což pomáhá minimalizovat závislost na jediném zdroji příjmů a snižuje riziko v případě neúspěchu jednotlivých obchodů.<br></br>
            Hlavním cílem diverzifikace portfolia je snížit vystavení investora rizikům spojeným s jednotlivými tržními nebo aktivními událostmi. 
            To se děje tím, že se investice rozloží do širokého spektra aktiv, která mají odlišné výkonnostní charakteristiky a reagují různě na tržní události. 
            Pokud jedna investiční pozice vykazuje špatné výsledky, může to být vyváženo úspěšným výkonem jiných investic v portfoliu.<br></br>
            Diverzifikace portfolia může zahrnovat různé typy aktiv, jako jsou akcie, dluhopisy, komodity, forex a další. 
            Rovněž může být diverzifikováno geograficky nebo sektorem, aby se minimalizovalo riziko spojené s regionálními nebo odvětvovými specifiky.<br></br>
            Důležité je si uvědomit, že diversifikace portfolia nemusí eliminovat veškeré riziko, ale může pomoci snížit jeho dopad na celkové portfolio. 
            Je důležité pečlivě vyvážit různé faktory, jako jsou výnosnost, likvidita a riziko, při tvorbě diverzifikovaného portfolia, aby se dosáhlo optimální rovnováhy mezi růstem a ochranou kapitálu.
            </div>
            <p>Shrnutí</p>
            <p>
            Diverzifikace portfolia je klíčovým principem pro snižování rizika a dosažení stability a růstu investic tím, že se rozloží do různých typů aktiv a trhů, což minimalizuje závislost na jednom zdroji příjmů a snižuje dopad neúspěchu jednotlivých investic.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="backgorund_textVysvetlivky">
            <h2>Portfolio</h2>
            <div className="text">
            Portfolio je soubor investic, který vlastní investor. Může zahrnovat různá aktiva, jako jsou akcie, dluhopisy, nemovitosti nebo komodity. 
            Diverzifikace portfolia je klíčovým prvkem, umožňuje rozložit riziko a minimalizovat dopady negativních událostí. 
            Správné řízení portfolia vyžaduje pravidelné zhodnocování a přizpůsobení se změnám na trhu a osobním cílům. 
            Je důležité mít jasno v tom, jaké jsou vaše investiční cíle a toleranci k riziku, a na základě toho upravit své portfolio.
            </div>
          </div>
        </div>

        <div className="leftcolumnClanky">
          <div className="backgorund_text">
            <h2>Geografická diverzifikace</h2>
            <div id="border">
              <h5>Vydání titulku, 25. dubna, 2024</h5>
              <div className="text">
              Geografická diverzifikace je klíčovým prvkem pro investory, kteří chtějí minimalizovat riziko spojené s regionálními ekonomickými výkyvy a politickými událostmi a dosáhnout stabilního růstu svého portfolia. 
              Tato strategie zahrnuje rozložení investic do různých regionů a zemí po celém světě, což umožňuje investorům využít potenciálního růstu v různých tržních prostředích a vyrovnat se s nejistotou na jednotlivých trzích.<br></br>
              Existuje několik důvodů, proč by měli investoři zvážit geografickou diverzifikaci svého portfolia. 
              Zaprvé, investoři mohou minimalizovat riziko spojené s regionálními ekonomickými nebo politickými událostmi tím, že rozloží své investice do různých regionů. 
              Například pokud by měla určitá země hospodářský propad, ostatní regiony by mohly fungovat stabilněji a minimalizovat negativní dopady na celkové portfolio.<br></br>
              Druhým důvodem pro geografickou diverzifikaci je využití růstu v různých tržních prostředích. 
              Různé regiony světa procházejí různými fázemi hospodářského cyklu a mohou nabízet rozdílné investiční příležitosti. 
              Investoři mohou využít potenciálního růstu v rozvíjejících se trzích nebo diverzifikovat své portfolio prostřednictvím investic do zavedených ekonomik.<br></br>
              Třetím důvodem je ochrana proti inflaci a měnovým rizikům. 
              Diverzifikace do různých měn a regionů může sloužit jako ochrana proti měnovým rizikům a inflaci. Pokud by došlo ke snížení hodnoty určité měny, mohou investoři využít růstu jiných měn ve svém portfoliu.
              Posledním důležitým faktorem je zvýšení likvidity portfolia. 
              Investoři mohou zvýšit likviditu svého portfolia tím, že investují do různých regionů. 
              Pokud by došlo k nedostatku likvidity na jednom trhu, mohou investoři získat přístup k likvidním aktivům v jiných regionech.<br></br>
              Klíčovým faktorem pro úspěšnou geografickou diverzifikaci je pečlivé zkoumání a porozumění různým trhům a regionálním ekonomickým faktorům. 
              Investoři by měli sledovat makroekonomické trendy, politické události a další faktory, které mohou ovlivnit výkonnost jednotlivých regionů.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
              Geografická diverzifikace portfolia umožňuje investorům minimalizovat riziko spojené s regionálními ekonomickými a politickými událostmi a využít potenciálního růstu v různých tržních prostředích.
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
