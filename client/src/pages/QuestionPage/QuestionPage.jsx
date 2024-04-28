import "../Stylesheet/style.css"; // Importuje externí styly z CSS souboru
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importuje ikony z knihovny Font Awesome
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Importuje specifické ikony z knihovny Font Awesome
import { Link } from "react-router-dom"; // Importuje komponentu Link pro routování v aplikaci
import { createClanek } from "../../models/clanky"; // Importuje funkci pro vytváření článků z externího modulu
import { useState, useEffect } from "react"; // Importuje hooky useState a useEffect z Reactu pro správu stavu a efekty v komponentě

export default function MainPage() {
  const [inputVal, setInputVal] = useState(); // Definuje stav pro hodnotu vstupního pole
  const [info, setInfo] = useState(); // Definuje stav pro informace získané z API

  const postForm = async () => {
    // Funkce pro odeslání formuláře na server
    const clanek = await createClanek({
      // Volá funkci pro vytvoření článku
      clanek: inputVal, // Předává hodnotu vstupního pole
    });
    if (clanek.status != 201) return setInfo(clanek.msg); // Pokud vrátí API chybu, nastaví stav s informací o chybě
    setInputVal(""); // Vymaže hodnotu vstupního pole po úspěšném odeslání
  };

  const handleChange = (e) => {
    // Funkce pro zachycení změn vstupního pole
    setInputVal(e.target.value); // Aktualizuje stav s hodnotou vstupního pole
  };

  const handleSubmit = (e) => {
    // Funkce pro zpracování odeslání formuláře
    e.preventDefault(); // Zamezí výchozímu chování formuláře
    postForm(); // Zavolá funkci pro odeslání formuláře
  };

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
        <div className="leftcolumnDotazy">
          <form>
            <textarea
              type="text" // Typ pole (text)
              name="clanek" // Název pole (clanek)
              value={inputVal} // Hodnota pole (přiřazená ze stavu)
              required // Pole je povinné
              placeholder="Sem můžete napsat, co potřebujete, a nezapomeňte sem připojit e-mail nebo telefonní číslo" // Zobrazí se v základním stavu pole
              onChange={(e) => handleChange(e)} // Zavolá funkci pro zachycení změn v poli
            />

            <button id="button"   // Identifikátor tlačítka (pro použití v CSS nebo JavaScriptu)
             onClick={handleSubmit}> 
              Odeslat
            </button>
          </form>
        </div>
        <div className="rightcolumn">
          <div className="backgorund_text">
            <h2>Co nám napsat</h2>
            <div className="text">
              Do textového pole nám můžete napsat dotaz, na který byste se
              chtěli zeptat a nenalezli jste zde odpověď, nebo co byste na
              webové stránce přidali, co bychom mohli změnit. Také můžete sdílet
              své pocity z této stránky. K vašemu dotazu připojte prosím
              kontakt, jako je e-mail nebo telefonní číslo, abychom vás mohli
              případně kontaktovat.
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
