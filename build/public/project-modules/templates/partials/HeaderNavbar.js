const HeaderNavbarComponent = () => {
  return `
  <div class="hero">
 <header class="header container-fluid bg-light pb-5 pt-4" id="idA">
            <!--inicio HEADER NAVBAR-->
            <div class="navbar fixed-top bg-light bg-body-tertiary container">
                <div class="navbar navbar-dark bg-light fixed-top">
                    <div class="container-fluid">
                        <div class="container">
                            <h1 class="navbar-brand text-secondary">
                                <a href="/">
                                    <img src="./../../assets/logo.png" alt="" width="40" height="40"
                                        class="d-inline-block align-top me-2"> BIBLIOTECA-MAUÁ
                                </a>
                            </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</div>
    `;
};

export const headerNavbar = HeaderNavbarComponent();
