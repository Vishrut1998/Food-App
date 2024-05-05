import { useState } from "react"
import useOnline from "../utils/useOnline"
import Offline from "./offline"

const Section = ({title, description, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3>{title}</h3>
            {isVisible ? <button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>Hide</button> : <button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>Show</button>}
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibileSection] = useState("about")
    const offline = useOnline()
    return ( !offline ? <Offline /> : 
      <div style={{height: '60vh'}}>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
        <Section
          title={"About Instamart"}
          description={
            "Instamart is a provider of grocery pickup and delivery solutions. Users can search for different products on the platform, compare their prices, and place an online order."
          }
          isVisible={visibleSection==="about"}
          setIsVisible={() =>setVisibileSection(visibleSection=="about" ? "" : "about")}
          
        />

        <Section
          title={"About Instamart Team"}
          description={
            "In the dynamic landscape of ecommerce, a stellar code development team serves as the backbone of success. Our team is a blend of seasoned veterans and fresh talent, united by a passion for crafting exceptional solutions. Agile and adaptable, we thrive on collaboration, constantly exchanging ideas and pushing boundaries to deliver innovative features. With a meticulous eye for detail, we ensure every line of code meets the highest standards of quality and efficiency. Our proactive approach to problem-solving and continuous integration empowers us to swiftly address challenges and iterate rapidly. Together, we're committed to driving unparalleled user experiences and driving the ecommerce platform forward."
          }
          isVisible={visibleSection==="team"}
          setIsVisible={() =>setVisibileSection(visibleSection=="team" ? "" : "team")}
          
        />
        <Section
          title={"Instamart Careers"}
          description={
            "Welcome to our ecommerce careers page, your gateway to exciting opportunities in the dynamic world of online retail. At our company, we believe in fostering a culture of growth, creativity, and collaboration. Joining our team means being part of a diverse community of passionate individuals, all dedicated to shaping the future of ecommerce. Whether you're a seasoned professional or just starting your career journey, we offer a range of roles spanning from engineering and design to marketing and customer service. With competitive benefits, ongoing training, and a supportive environment, we empower our employees to thrive and make a meaningful impact in the ever-evolving ecommerce landscape."
          }
          isVisible={visibleSection==="careers"}
          setIsVisible={() =>setVisibileSection(visibleSection=="careers" ? "" : "careers")}
          
        />
      </div>
    );
}

export default Instamart;