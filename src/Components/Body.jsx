import mid from "../Styles/body.module.css"
import image from "../Utils/gokul.jpeg";
export default function Body(){

    return (
        <div className={mid.container}>
            <div className={mid.box1}>
                <div><h3 className={mid.name}>HI, I'M Gokul</h3></div>
                <div><h1 className={mid.about}>I'M A WEB DEVELOPER & DESIGNER</h1></div>
                <div><p className={mid.para}>I craft modern, responsive, and visually appealing websites that provide seamless user experiences across all devices. By combining clean design, intuitive navigation, and efficient functionality, I create digital solutions that are both engaging and user-friendly. My goal is to transform ideas into interactive web experiences that not only look great but also perform flawlessly, leaving a lasting impression on users.</p></div>
                <div><button className={mid.view}>View my Projects</button></div>
            </div>
            <div className={mid.box2}>  
               <img src={image} alt="Gokul Image"/>
            </div>
        </div>
    )
}