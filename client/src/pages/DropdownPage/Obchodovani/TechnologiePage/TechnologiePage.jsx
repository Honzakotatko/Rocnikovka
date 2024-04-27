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
            <h2>Správný výběr Brokera</h2>
            <h5>Vydání titulku, 24. dubna, 2024</h5>
            <div className="text">
            Správný výběr brokera je klíčovým rozhodnutím pro každého investora. 
            Broker hraje důležitou roli ve vašem investičním procesu a může ovlivnit vaše investiční výnosy a zkušenosti. 
            Při výběru brokera je důležité zvážit několik klíčových faktorů, jako jsou poplatky, dostupnost trhů a nástrojů, 
            uživatelské rozhraní, spolehlivost a podpora zákazníků, bezpečnost a regulace, vzdělávací a výzkumné nástroje a mobilní aplikace.<br></br> 
            Poplatky a provize hrají důležitou roli v celkových nákladech na investování, 
            proto je důležité provést pečlivé porovnání mezi různými brokery. 
            Dostupnost trhů a investičních nástrojů je také klíčovým faktorem, 
            zejména pokud máte zájem o obchodování s určitými typy aktiv nebo na určitých trzích.<br></br> 
            Uživatelské rozhraní platformy brokera by mělo být přehledné a snadno použitelné, 
            což vám usnadní navigaci a obchodování. Spolehlivost při rychlém reagování na vaše otázky nebo řešení problémů je skutečně důležité. 
            Bezpečnost a regulace jsou nezbytné pro ochranu vašich investic a osobních údajů. Proto je důležité vybrat si brokera, 
            který je regulován a řádně registrovaný.<br></br> 
            Vzdělávací nástroje nebo nástroje pro výzkum a analýzu. 
            Pomáhají při vytváření vaší strategie nebo riskantním manažerství. Mobilní aplikace brokera by měly být i plně funkční. 
            Měli byste mít možnost obchodovat a spravovat své investice z jakéhokoli místa. Dnes je obchodování s mobilními telefony významnější než kdy jindy, 
            a proto může být užitečné být vázaný na jedno zařízení.<br></br> 
            Vybrat si správného brokera je důležitým krokem pro každého investora. 
            Pečlivě zvažte všechny tyto faktory a vytvořte informované rozhodnutí, které se nejlépe hodí k vašim individuálním potřebám a cílům.
            </div>
            <p>Shrnutí</p>
            <p>
            Správný výběr brokera je klíčový pro každého investora a zahrnuje zvážení poplatků, dostupnosti trhů, uživatelského rozhraní, spolehlivosti, bezpečnosti a regulace, vzdělávacích nástrojů a mobilních aplikací.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="backgorund_textVysvetlivky">
            <h2>Broker</h2>
            <div className="text">
            Broker je individuální nebo institucionální osoba, která působí jako prostředník mezi investory a finančními trhy. <br></br>
            Jejich hlavním účelem je usnadnit nákup a prodej různých druhů finančních aktiv, akcií, dluhopisů, komodit a měn, a vybírat za tento proces platbu nebo provizi. 
            Brokeři také mohou poskytovat svým zákazníkům investiční poradenství, vzdělávací materiály a analytické nástroje. <br></br>
            Další povinností brokeři je dodržování regulace a ochrana obchodních operací.
            </div>
          </div>
        </div>

        <div className="leftcolumnClanky">
          <div className="backgorund_text">
            <h2>Automatizované obchodování</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="text">
              Automatizované obchodování je proces, při kterém počítačové algoritmy provádějí obchodní operace na finančních trzích s minimálním nebo žádným zásahem lidského faktoru. 
              Tato metoda obchodování využívá sofistikované algoritmické strategie, které jsou navrženy tak, 
              aby analyzovaly tržní podmínky a prováděly obchody podle předem stanovených pravidel. 
              Automatizované obchodní systémy mohou být naprogramovány tak, aby reagovaly na různé signály trhu, jako jsou cenové pohyby, objem obchodů nebo technické indikátory.<br></br> 
              Výhody automatizovaného obchodování zahrnují rychlost provedení obchodů, eliminaci emocionálního vlivu a možnost obchodování 24 hodin denně bez přerušení. 
              To umožňuje investovatérovům využívat obchodní příležitosti i v dobách, kdy jsou mimo provoz nebo spí.<br></br> 
              Nicméně, existuje také určité riziko spojené s automatizovaným obchodováním. Například, 
              nedostatečně nastavené algoritmy mohou vést k nežádoucím obchodům a ztrátám. Kromě toho může nedostatek lidského dohledu způsobit, 
              že obchodní systémy budou reagovat nepředvídatelně na změny tržních podmínek. 
              Je proto důležité mít pečlivě navržené a testované obchodní strategie a pravidla řízení rizik, aby se minimalizovaly potenciální ztráty.<br></br> 
              Automatizované obchodování je stále více populární mezi institucionálními investory a obchodníky, 
              kteří hledají efektivní způsob, jak optimalizovat své obchodní strategie a zlepšit výkonnost svých portfolií.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
            Automatizované obchodování využívá počítačové algoritmy pro provádění obchodů na finančních trzích s rychlostí, eliminací emocionálního vlivu a možností obchodování nepřetržitě, přesto však nese riziko nežádoucích obchodů a ztrát, vyžaduje pečlivě navržené strategie a řízení rizik.
            </p>
          </div>
          <div className="backgorund_text">
            <h2>Umělá inteligence a strojové učení</h2>
            <div id="border">
              <h5>Vydání titulku, 24. dubna, 2024</h5>
              <div className="text">
              Umělá inteligence (AI) a strojové učení nabízejí revoluční přístup k obchodování na burze. 
              Tyto technologie umožňují vytváření sofistikovaných algoritmů, které mohou analyzovat obrovské množství dat a provádět rychlé a přesné obchodní rozhodnutí.<br></br> 
              Díky umělé inteligenci a strojovému učení mohou obchodníci vytvářet modely, které identifikují vzory v tržních datech a predikují budoucí trendy. 
              Tyto modely mohou být použity k automatizaci obchodních strategií, což umožňuje obchodníkům reagovat na tržní události v reálném čase a maximalizovat zisky.<br></br> 
              Umělá inteligence také umožňuje obchodníkům analyzovat obrovské množství dat z různých zdrojů, včetně zpráv, 
              sociálních médií, cenových grafů a ekonomických ukazatelů. 
              Tímto způsobem mohou obchodníci lépe porozumět tržním podmínkám a identifikovat obchodní příležitosti s větší přesností.<br></br>
              Další výhodou umělé inteligence v obchodování na burze je schopnost detekovat a minimalizovat rizika. 
              Algoritmy mohou sledovat tržní trendy a automaticky reagovat na nežádoucí události, jako jsou prudké poklesy cen nebo neočekávané zprávy. 
              To může pomoci obchodníkům chránit svá portfolia a minimalizovat ztráty.<br></br>
              Celkově umělá inteligence a strojové učení přinášejí do obchodování na burze nové možnosti a nástroje, které umožňují obchodníkům lépe porozumět trhu, 
              identifikovat obchodní příležitosti a minimalizovat rizika. 
              Tyto technologie mají potenciál zvýšit efektivitu a produktivitu obchodníků a přinést novou úroveň inovace do světa finančních trhů.
              </div>
            </div>
            <p>Shrnutí</p>
            <p>
             Umělá inteligence a strojové učení přinášejí do obchodování na burze možnost analyzovat obrovské množství dat, identifikovat vzory a trendy a minimalizovat rizika, což může výrazně zlepšit výkonnost obchodníků a přinést novou úroveň inovace na finanční trhy.
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
