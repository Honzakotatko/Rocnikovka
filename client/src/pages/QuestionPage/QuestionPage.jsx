import "../Stylesheet/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { createClanek} from "../../models/clanky"
import { useState, useEffect } from "react";


export default function MainPage() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const cat = await createClanek(formData);
    if (cat.status === 201) {
      redirectToSuccessPage(clanek.payload._id);
    } else {
      setInfo(clanek.msg);
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
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
        <input type="text" name="clanek" required placeholder="Sem napište dotaz a do textu vložte svůj e-mail" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
          Odeslat
        </button>
      </form>
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
