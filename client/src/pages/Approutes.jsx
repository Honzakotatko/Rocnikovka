import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mainpage from "./MainPage/MainPage"
import InvestPage from "./InvestPage/IvestPage"
import TradePage from "./TradePage/TradePage"
import QuestionPage from "./QuestionPage/QuestionPage"


export default function Approutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage></Mainpage>}></Route>
                    <Route path="/trade" element={<TradePage></TradePage>}></Route>
                    <Route path="/invest" element={<InvestPage></InvestPage>}></Route>
                    <Route path="/question" element={<QuestionPage></QuestionPage>}></Route>
                    
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}