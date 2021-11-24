import React from 'react';
import '../styles/style.css';
// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <section className = "page" id="work">
    <h1>Work</h1>
    <div className="cards">
        <section id="surfReport">
            <div className="text rounded">Two City Comparison Tool</div>
            <a href = "https://pgandhi21.github.io/Two-City-Comparison-Tool/" target="#">
                <img src="../images/2-city.PNG" alt="Surf Report"/>
            </a>
        </section>
    <div className = "smallCards container">
        <div className="row ">
            <section className="card col-md " id="LED">
                <div className="text rounded">Weather Dashboard</div>
                <a href="https://blackman3178.github.io/weather-dashboard/" target ="#">
                    <img src="../images/Weather-dashboard.PNG" alt="LED Wall" style={{width: "100%"}} className="rounded"/>
                </a>
            </section>
            <section className="card col-md" id="calculator">
                <div className="text thumbnail rounded" >Password Generator</div>
                <a href="https://www.google.com/" target="#">
                    <img src="../images/Password-generator.PNG" alt="Calculator" className=" rounded calc-picture" style={{width:"100%"}}/>
                </a>
            </section>
        </div>
    </div>
    </div>

</section>
  );
}

export default Card;
