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
            <h5>Vydání titulku, 25. dubna, 2024</h5>
            <div className="fakeimg">
            Pro investory na burze je tržní riziko jedním z nejdůležitějších aspektů, které ovlivňují jejich rozhodování a výsledky. 
            Tržní riziko představuje možnost, že hodnota jejich investic klesne v důsledku výkyvů na trhu.<br></br>
            Hlavními faktory tržního rizika jsou externí události, jako jsou makroekonomické trendy, geopolitická napětí a změny v obchodní politice. 
            Nečekané události, jako je změna měnové politiky nebo geopolitické konflikty, mohou způsobit dramatické výkyvy cen aktiv a zvýšenou volatilitu na trhu.<br></br>
            Pro investory je klíčové umět efektivně řídit tržní riziko. 
            To může zahrnovat použití různých strategií, jako je hedging, diversifikace portfolia a technická analýza. 
            Sledují aktuální události a reagují na ně rychle, aby maximalizovali své zisky nebo minimalizovali ztráty.<br></br>
            Celkově je schopnost řídit a reagovat na tržní riziko klíčovým prvkem úspěchu pro každého investora na burze. 
            Bez ohledu na to, zda se jedná o krátkodobé spekulativní obchodování nebo dlouhodobé investování, porozumění tržnímu riziku a schopnost správně ho řídit jsou základními kameny úspěšného investování.
            </div>
            <p>Shrnutí</p>
            <p>
            Schopnost efektivně řídit tržní riziko je klíčovým prvkem úspěchu pro investory na burze, který zahrnuje použití strategií jako hedging, diversifikace portfolia a technická analýza.
            </p>
          </div>
        </div>


        <div className="leftcolumnClanky">
          <div className="card">
            <h2>Kreditní riziko</h2>
            <div id="border">
              <h5>Vydání titulku, 25. dubna, 2024</h5>
              <div className="fakeimg">
              Toto riziko se týká možnosti nedodržení dluhových závazků emitentů dluhopisů nebo jiných úvěrových instrumentů. 
              Pro investory představuje kreditní riziko potenciální ztrátu hodnoty jejich investic.<br></br>
              Existují různé faktory, které mohou přispět k výskytu kreditního rizika. 
              Mezi ně patří hospodářský stav emitenta, jeho platební schopnost, úroveň zadluženosti a celková kvalita úvěrového dlužníka. 
              Nečekané události, jako je hospodářský propad nebo změny v politice, mohou mít významný dopad na schopnost emitenta splácet své dluhy.<br></br>
              Pro investory je důležité řádně zhodnotit kreditní riziko před investováním do dluhopisů nebo jiných dluhových instrumentů. 
              To může zahrnovat analýzu finančních ukazatelů emitenta, sledování jeho dluhového profilu a porozumění makroekonomickým trendům, které by mohly ovlivnit jeho schopnost splácet dluhy.<br></br>
              K řízení kreditního rizika mohou investoři využívat různé strategie. 
              Jednou z možností je diverzifikace portfolia, tj. rozložení investic do různých emitentů s různými úrovněmi kreditního rizika. 
              Další strategií může být použití dluhopisů s vyšší kvalitou ratingu, které mají nižší pravděpodobnost nedodržení dluhových závazků.<br></br>
              Celkově je důležité, aby investoři byli obezřetní při řízení kreditního rizika a pečlivě zvažovali svá investiční rozhodnutí.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
            Pro investory je důležité řádně zhodnotit kreditní riziko před investováním do dluhopisů nebo jiných dluhových instrumentů a používat strategie jako diverzifikace portfolia a výběr dluhopisů s vyšší kvalitou ratingu k jeho řízení.
            </p>
          </div>
          <div className="card">
            <h2>Likviditní riziko</h2>
            <div id="border">
              <h5>Vydání titulku, 25. dubna, 2024</h5>
              <div className="fakeimg">
              Samotné riziko spojené s likviditou může být pro investory problematické, zejména pokud se snaží prodat své investice nebo uzavřít pozice za aktuální cenu, ale není na trhu dostatek kupců. 
              Čím menší je likvidita určitého aktiva, tím větší je toto riziko.<br></br>
              Investoři by měli být obezřetní a umět řídit likviditní riziko. 
              Existuje několik strategií, které mohou investoři použít k minimalizaci tohoto rizika. 
              Jednou z nich je diverzifikace portfolia, což znamená investování do široké škály aktiv s různou úrovní likvidity. 
              Tím se snižuje expozice v případě, že jedno konkrétní aktivum se stane málo likvidním.<br></br>
              Další možností je využití ochranných nástrojů, jako jsou opce a futures. 
              Tyto deriváty umožňují investorům zajistit své pozice a chránit se tak před nepředvídatelnými výkyvy na trhu. 
              Tím se snižuje riziko ztráty v důsledku likviditních problémů.<br></br>
              Je také důležité, aby investoři sledovali likviditu trhu a reagovali na změny v likviditě svých investic. 
              To může zahrnovat rychlou reakci na změny na trhu nebo snahu najít alternativní způsoby likvidace pozic v případě potřeby.<br></br>
              Celkově je schopnost řídit a minimalizovat likviditní riziko klíčová pro úspěch každého investora. 
              Porozumění tomuto typu rizika a používání vhodných strategií a nástrojů může pomoci investorům maximalizovat jejich zisky a minimalizovat ztráty v nejistém prostředí investování.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
            Investoři by měli aktivně řídit likviditní riziko prostřednictvím diverzifikace portfolia, využití ochranných nástrojů jako jsou opce a futures a sledování likvidity trhu.
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
