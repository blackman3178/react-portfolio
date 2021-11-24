import React from 'react';


import '../styles/style.css';

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <section class = "page" id="work">
    <h1>Work</h1>
    <div class="cards">
        <section id="surfReport">
            <div class="text rounded">Two City Comparison Tool</div>
            <a href = "https://pgandhi21.github.io/Two-City-Comparison-Tool/" target="#">
                <img src="./assets/images/2-city.PNG" alt="Surf Report"/>
            </a>
        </section>
    <div class = "smallCards container">
        <div class="row ">
            <section class="card col-md " id="LED">
                <div class="text rounded">Weather Dashboard</div>
                <a href="https://blackman3178.github.io/weather-dashboard/" target ="#">
                    <img src="./assets/images/Weather-dashboard.PNG" alt="LED Wall" style="width:100%" class="rounded"/>
                </a>
            </section>
            <section class="card col-md" id="calculator">
                <div class="text thumbnail rounded" >Password Generator</div>
                <a href="https://www.google.com/" target="#">
                    <img src="./assets/images/Password-generator.PNG" alt="Calculator" class=" rounded calc-picture" style="width:100%"/>
                </a>
            </section>
        </div>
    </div>
    </div>

</section>
  );
}

export default Card;
