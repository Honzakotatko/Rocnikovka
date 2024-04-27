import "../Stylesheet/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { createClanek} from "../../models/clanky"
import { useState, useEffect } from "react";


export default function MainPage() {
  const [inputVal, setInputVal] = useState();
  const [info, setInfo] = useState();

  const postForm = async () => {
    const clanek = await createClanek({
      clanek: inputVal
    });
    if (clanek.status != 201) return setInfo(clanek.msg)
    setInputVal('')
  }
  
  const handleChange = (e) => {
    setInputVal(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    postForm();
  }

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
        <textarea type="text" name="clanek" value={inputVal} required placeholder="Sem můžete napsat, co potřebujete, a nezapomeňte sem připojit e-mail nebo telefonní číslo" onChange={e => handleChange(e)}/>
        <button id= "button"onClick={handleSubmit}>
          Odeslat
        </button>
      </form>
        </div>
        <div className="rightcolumn">
          <div className="backgorund_text">
            <h2>Co nám napsat</h2>
            <div className="text">
            Do textového pole nám můžete napsat dotaz, na který byste se chtěli zeptat a nenalezli jste zde odpověď, nebo co byste na webové stránce přidali, co bychom mohli změnit. 
            Také můžete sdílet své pocity z této stránky.
            K vašemu dotazu připojte prosím kontakt, jako je e-mail nebo telefonní číslo, abychom vás mohli případně kontaktovat.
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