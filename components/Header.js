class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <main class="main">
        <header class="header">
          <div class="wrap d-flex">
            <h1 class="logo">
              <a href=""><img src="./../assets/images/logo2.png" alt="LOGO" /></a>
            </h1>
            <h1 class="logo-small">
              <a href=""
                ><img src="./assets/images/favicon.png" alt="LOGO"
              /></a>
            </h1>
            <nav class="menu">
              <ul>
                <li><a href="#" class="nav-link">Home</a></li>
                <li><a href="#AboutMe" class="nav-link">About</a></li>
                <li><a href="#MySkills" class="nav-link">Skills</a></li>
                <li><a href="#MyWork" class="nav-link">Work</a></li>
                <li>
                  <a href="#HireMe" class="btn"> Hire me</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="sidemenu-toggler">
            <span class="line-top"></span>
            <span class="line-bottom"></span>
          </div>
          <div class="sidemenu">
            <div class="close">
              <span class="line-top"></span>
              <span class="line-bottom"></span>
            </div>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#AboutMe">About</a></li>
                <li><a href="#MySkills">Skills</a></li>
                <li><a href="#MyWork">Work</a></li>
                <li><a href="#HireMe" class="btn">Hire me</a></li>
              </ul>
            </nav>
            <footer>
              <div class="social">
                <a href="" class="fab fa-facebook-f"></a>
                <a href="" class="fab fa-twitter"></a>
                <a href="" class="fab fa-instagram"></a>
                <a href="" class="fab fa-github"></a>
                <a href="" class="fab fa-linkedin"></a>
              </div>
              <p>2021-2022 Made with <i class="fas fa-heart"></i> by X{coder}</p>
            </footer>
          </div>
        </header>
      </main>`;
  }
}

customElements.define("app-navbar", Navbar);
