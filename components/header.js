class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="container pt-5">
                <div class="row">
                    <div class="col">               
                        <h1>Tyler D.</h1>
                    </div>
                    <div class="col"></div>
                    <div class="col h5">
                        <nav class="navbar navbar-expand-lg">
                            <ul class="navbar-nav">
                                <li class="navbar-item">
                                    <a class="nav-link" href="http://shr4pnel.com" target="_blank">Github <i class="ai-github-fill"></i>&nbsp;</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://open.spotify.com/user/tytyonspotify" target="_blank">Spotify <i class="ai-spotify-fill"></i>&nbsp;</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About <i class="ai-person"></i></a>
                                </li> 
                            </ul>
                        </nav>
                    </div>
                    <hr>
                    <div class="row pt-5">
                        <p class="h4"></p>
                    </div>
                </div>
            </div>
            `;
    }
}

customElements.define("header-body", Header);