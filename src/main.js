import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body"
import './global.css'


function PortFolio(){

    return(
        <div className="whole">
            <div className="container">
                <Header/>
                <Body/>
            </div>
        
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<PortFolio/>)