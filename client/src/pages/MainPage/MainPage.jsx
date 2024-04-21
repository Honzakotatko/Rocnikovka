import "./MainPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export default function MainPage(){
    return(

<div className="container">
            <div id="header_img">
                <div className="header">
                    <div><img src="./res/img/stahování-removebg-preview.ico" alt="" id="logo" /></div>
                </div>
            </div>
            <div className="topnav">
                <Link to="/">Domovská stránka</Link>
                <Link to="/trade">Obchodování</Link>
                <Link to="/invest">Investování</Link>
                <Link to="/question" style={{float: "right"}}>Dotazy</Link>
            </div>

            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <h2>Obchodování na burze</h2>
                        <h5>Vydání titulku, 28. dubna, 2024</h5>
                        <div className="fakeimg">
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
                    <div className="card">
                        <h2>Investování</h2>
                        <div id="border">
                            <h5>Vydání titulku, 28. dubna, 2024</h5>
                            <div className="fakeimg">
                            Investování vyžaduje trpělivost, promyšlená rozhodnutí a alokaci finančních prostředků do různých aktiv s cílem dosáhnout budoucího růstu a zisku. 
                            Je klíčové sledovat základní informace o společnostech a makroekonomické trendy, 
                            a udržovat investice po delší období pro dosažení dlouhodobých výnosů. 
                            Diverzifikace portfolia a schopnost reagovat na změny na trhu jsou důležité faktory. 
                            Rizika spojená s investicemi je třeba pečlivě zvážit. Celkově je investování dlouhodobý proces, 
                            který vyžaduje pečlivé plánování a disciplínu.
                            </div>
                        </div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2>Účel stránky</h2>
                        <div className="fakeimg">
                        Cílem této vzdělávací stránky zaměřené na obchodování a investování je poskytnout stručné a komplexní informace,
                        rady a nástroje jak pro začátečníky, tak pokročilé obchodníky.
                        Cílem je pomoci jim porozumět finančním trhům, ovládnout základy obchodování a efektivně spravovat svá portfolia.
                        </div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className="card">
                        <h3>Kontakty</h3>
                        <div className="fakeimg">420+ 776 618 123</div>
                        <div className="fakeimg">hkotatko@email.cz</div>
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
                <a href="https://www.facebook.com/origo.master.18" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.instagram.com/honzig_/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/XdDemoliti46800" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </div>
    
        </div>
            
                
    );
}