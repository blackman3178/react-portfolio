import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/style.css';

function Header() {
  return (
  <div>
     <header id = "intro">
        <h1 class="rounded">Noah Blackman</h1>
        <nav>
            <a href="#about">About Me</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact Me</a>
            <a href="./assets/images/Blackman_Noah_Resume.pdf" target="#">Resume</a>
        </nav>
    </header>

    <section class="wood">
        
        <div>
            <h3 class="rounded ">Full-Stack Development With Global Insights</h3>
        </div>

    </section>

    <article class="page" id="about">
       <h1>About Me</h1>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, assumenda! Similique rerum optio praesentium asperiores illo, velit deleniti quisquam maxime assumenda, excepturi minus non, doloremque recusandae sit nisi deserunt tempora!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut voluptates, exercitationem debitis modi alias illum vel facilis labore at quidem sed repudiandae culpa voluptatibus minus, sit id expedita. Odit.
            </p>
        </div>

    </article>
  </div>
  );
}

export default Header;
