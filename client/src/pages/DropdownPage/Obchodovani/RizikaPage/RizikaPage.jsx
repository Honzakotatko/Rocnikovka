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
            <h2>Tržní rizika</h2>
            <h5>Vydání titulku, 24. dubna, 2024</h5>
            <div className="fakeimg">
            Pro obchodníky na burze je tržní riziko jedním z nejdůležitějších faktorů, který ovlivňuje jejich každodenní činnost. 
            Toto riziko představuje možnost, že hodnota jejich investic klesne v důsledku výkyvů na trhu.<br></br>
            Hlavními faktory tržního rizika jsou externí události, jako jsou makroekonomické trendy, geopolitická napětí a změny v obchodní politice. 
            Nečekané události, jako je změna měnové politiky nebo geopolitické konflikty, mohou způsobit dramatické výkyvy cen aktiv a zvýšenou volatilitu na trhu.<br></br>
            Pro obchodníky je klíčové umět efektivně řídit tržní riziko. 
            To může zahrnovat použití různých strategií, jako je hedging, diversifikace portfolia a technická analýza. 
            Sledují aktuální události a reagují na ně rychle, aby maximalizovali své zisky nebo minimalizovali ztráty.<br></br>
            Celkově je schopnost řídit a reagovat na tržní riziko klíčovým prvkem úspěchu pro každého obchodníka na burze. 
            Bez ohledu na to, zda se jedná o krátkodobé spekulativní obchodování nebo dlouhodobé investování, porozumění tržnímu riziku a schopnost správně ho řídit jsou základními kameny úspěšného obchodování.
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


        <div className="leftcolumnClanky">
          <div className="card">
            <h2>Systémové riziko</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="fakeimg">
              Rozmanitost aktiv je klíčovým prvkem pro úspěšné obchodování na burze. 
              Pro obchodníky je důležité rozložit své investice do různých typů aktiv, aby maximalizovali svůj potenciál na zisk a minimalizovali riziko.<br></br>
              Různé typy aktiv zahrnují akcie, dluhopisy, komodity, forex a další. Každý typ aktiva má své vlastní charakteristiky a reaguje odlišně na tržní události. 
              Díky rozmanitosti portfolia mohou obchodníci lépe využít různých tržních trendů a příležitostí.<br></br>
              Rozmanitost aktiv také umožňuje obchodníkům snadněji řídit riziko. 
              Pokud jedno aktivum vykazuje pokles v hodnotě, může být tento pokles vyvážen růstem jiných aktiv v portfoliu. 
              Tím se snižuje celkové riziko portfolia a zvyšuje jeho stabilita.<br></br>
              Je důležité, aby obchodníci pečlivě vyvážili různé faktory, jako jsou výnosnost, likvidita a riziko, při vytváření rozmanitého portfolia. 
              Díky tomu mohou dosáhnout optimální rovnováhy mezi růstem a ochranou kapitálu, což je klíčem k dlouhodobému úspěchu na burze.
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
          <div className="card">
            <h2>Likviditní riziko</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="fakeimg">
              Toto riziko souvisí s obtížemi při prodeji investičního nástroje nebo likvidaci pozice za aktuální cenu v důsledku nedostatku kupců na trhu. 
              Čím menší je likvidita určitého aktiva, tím větší je toto riziko.<br></br>
              Pro obchodníky je klíčové porozumět likviditnímu riziku a umět ho řídit. 
              Existuje několik strategií, které mohou obchodníci využít k minimalizaci tohoto rizika. 
              Jednou z nich je diversifikace portfolia, což znamená investování do široké škály aktiv s různou úrovní likvidity. 
              Tím se snižuje expozice v případě, že jedno konkrétní aktivum se stane málo likvidním.<br></br>
              Další možností je použití ochranných nástrojů, jako jsou opce a futures. 
              Tyto deriváty umožňují obchodníkům zajistit své pozice a chránit se tak před nepředvídatelnými výkyvy na trhu. Tím se snižuje riziko ztráty v důsledku likviditních problémů.<br></br>
              Je také důležité, aby obchodníci sledovali likviditu trhu a reagovali na změny v likviditě svých investic. 
              To může zahrnovat rychlou reakci na změny na trhu nebo snahu najít alternativní způsoby likvidace pozic v případě potřeby.<br></br>
              Celkově je schopnost řídit a minimalizovat likviditní riziko klíčovým prvkem úspěchu pro každého obchodníka na burze. 
              Porozumění tomuto typu rizika a používání vhodných strategií a nástrojů může pomoci obchodníkům maximalizovat jejich zisky a minimalizovat ztráty v nejistém prostředí burzovního obchodování.
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
