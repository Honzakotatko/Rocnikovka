import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mainpage from "./MainPage/MainPage"
import InvestPage from "./InvestPage/IvestPage"
import TradePage from "./TradePage/TradePage"
import QuestionPage from "./QuestionPage/QuestionPage"
import AnalyzaPage from "./DropdownPage/Obchodovani/AnalyzaPage/AnalyzaPage"
import DiverzifikacePage from "./DropdownPage/Obchodovani/DiverzifikacePage/DiverzifikacePage"
import NacasovaniPage from "./DropdownPage/Obchodovani/NacasovaniPage/NacasovaniPage"
import PsychologiePage from "./DropdownPage/Obchodovani/PsychologiePage/PsychologiePage"
import RizikaPage from "./DropdownPage/Obchodovani/RizikaPage/RizikaPage"
import TechnologiePage from "./DropdownPage/Obchodovani/TechnologiePage/TechnologiePage"
import VzdelavaniPage from "./DropdownPage/Obchodovani/VzdelavaniPage/VzdelavaniPage"
import CilPage from "./DropdownPage/Investovani/CilPage/CilPage"
import Diverzifikace0Page from "./DropdownPage/Investovani/Diverzifikace0Page/DiverzifikacePage0"
import MonitorovaniPage from "./DropdownPage/Investovani/MonitorovaniPage/Monitorovani"
import Rizika0Page from "./DropdownPage/Investovani/Rizika0Page/Rizika0Page"
import StrategiePage from "./DropdownPage/Investovani/StrategiePage/StrategiePage"
import Strategie0Page from "./DropdownPage/Obchodovani/Strategie0Page/Strategie0Page"




export default function Approutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage></Mainpage>}></Route>
                    <Route path="/trade" element={<TradePage></TradePage>}></Route>
                    <Route path="/invest" element={<InvestPage></InvestPage>}></Route>
                    <Route path="/question" element={<QuestionPage></QuestionPage>}></Route>
                    <Route path="/technologie" element={<TechnologiePage></TechnologiePage>}></Route>
                    <Route path="/analyza" element={<AnalyzaPage></AnalyzaPage>}></Route>
                    <Route path="/diverzifikace0" element={<DiverzifikacePage></DiverzifikacePage>}></Route>
                    <Route path="/nacasovani" element={<NacasovaniPage></NacasovaniPage>}></Route>
                    <Route path="/psychologie" element={<PsychologiePage></PsychologiePage>}></Route>
                    <Route path="/rizika0" element={<RizikaPage></RizikaPage>}></Route>
                    <Route path="/cil" element={<CilPage></CilPage>}></Route>
                    <Route path="/diverzifikace" element={<Diverzifikace0Page></Diverzifikace0Page>}></Route>
                    <Route path="/monitorovani" element={<MonitorovaniPage></MonitorovaniPage>}></Route>
                    <Route path="/rizika" element={<Rizika0Page></Rizika0Page>}></Route>
                    <Route path="/strategie" element={<StrategiePage></StrategiePage>}></Route>
                    <Route path="/strategie0" element={<Strategie0Page></Strategie0Page>}></Route>
                    <Route path="/vzdelavani" element={<VzdelavaniPage></VzdelavaniPage>}></Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}