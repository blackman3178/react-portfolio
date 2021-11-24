import React from 'react';

import '../styles/style.css';

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <footer class="page" id="contact">
        <h1>Contact Me</h1>
        <div>
           <a href="#">813-390-0689</a>
           <a href="#">nablackman6@gmail.com</a>
           <a href="https://github.com/blackman3178" target="#">GitHub</a>
           <a href="https://www.linkedin.com/in/nablackman" target="#">LinkedIn</a>
        </div>
    </footer>
  );
}

export default Navbar;
