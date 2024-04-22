import "../Stylesheet/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export default function MainPage(){
    return(

<div class="container">
            <div id="header_img">
                <div class="header">
                    <div><img src="./res/img/stahování-removebg-preview.ico" alt="" id="logo" /></div>
                </div>
            </div>
            <div class="topnav">
                <Link to="/">Domovská stránka</Link>
                <Link to="/trade">Obchodování</Link>
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>Hover me</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                        <div class="dropdown-item">
                            <p>
                            You can insert <strong>any type of content</strong> within the
                            dropdown menu.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <Link to="/question" style={{float: "right"}}>Dotazy</Link>
            </div>

            <div class="row">
                <div class="leftcolumn">
                    <div class="card">
                        <h2>Obchodování na burze</h2>
                        <h5>Vydání titulku, 28. dubna, 2024</h5>
                        <div class="fakeimg">
                        Obchodování na burze představuje proces nakupování a prodeje finančních nástrojů jako jsou akcie,
                        dluhopisy a komodity. Hlavním účelem je dosáhnout zisku z rozdílu mezi cenou nákupu a prodeje aktiv.
                        Důležité aspekty zahrnují analýzu trhu a aktiv, řízení rizika, diverzifikaci portfolia a psychologii obchodování.
                        Analýza trhu může být technická nebo fundamentální a poskytuje klíčové informace o budoucím vývoji cen.
                        Řízení rizika zahrnuje používání strategií jako jsou stop-loss příkazy a diverzifikace portfolia s cílem minimalizovat možné ztráty.
                        Psychologie obchodování také hraje důležitou roli, protože emoce mohou ovlivnit rozhodovací proces.
                        Je podstatné zachovat klid a disciplinu i v situacích, kdy trh reaguje nečekaně.
                        Obchodování na burze je dynamický proces vyžadující neustálou pozornost a schopnost přizpůsobit se změnám na trhu.
                        </div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div class="card">
                        <h2>Investování</h2>
                        <div id="border">
                            <h5>Vydání titulku, 28. dubna, 2024</h5>
                            <div class="fakeimg" style={{height: "200px"}}>Image</div>
                        </div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="rightcolumn">
                    <div class="card">
                        <h2>Účel stránky</h2>
                        <div class="fakeimg">
                        Cílem této vzdělávací stránky zaměřené na obchodování a investování je poskytnout stručné a komplexní informace,
                        rady a nástroje jak pro začátečníky, tak pokročilé obchodníky.
                        Cílem je pomoci jim porozumět finančním trhům, ovládnout základy obchodování a efektivně spravovat svá portfolia.
                        </div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div class="card">
                        <h3>Popular Post</h3>
                        <div class="fakeimg"><p>Image</p></div>
                        <div class="fakeimg"><p>Image</p></div>
                        <div class="fakeimg"><p>Image</p></div>
                    </div>
                    <div class="card">
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>

            <div class="footer">
            <h2>Jan Koťátko &copy; 2024</h2>
            <div class="social-icons">
                <a href="https://www.facebook.com/origo.master.18" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.instagram.com/honzig_/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/XdDemoliti46800" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </div>
    
        </div>
            
                
    );
}