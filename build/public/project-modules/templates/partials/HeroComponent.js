export const HeroComponent = () => {
  return `
          <div class="h100vh container-fluid hero pb-4  bg-light">
          <div class="hero-content pb-4">
            <div class="pl-4 pb-4 rounded text-body-emphasis">
              <div class="container mb-4">
              
                  <div class="row hero-blog-header">
                    <div class="col-lg-6 px-0 slider-title">
                      <div class="container text-center">
                        <p class="headingH2 text-center">PROJETO</p>

                        <h2>BIBLIOTECA-MAUÁ</h2>

                        <p class="text-center p-2">
                          Conheça os <strong>ENDPOINTS DO PROJETO</strong>
                        </p>

                        <div class="btn-hero-container">
                          <a href="/endpoints" class="btn btn-hero">ENDPOINTS</a>
                          <a href="/books" class="btn btn-hero">BOOKS</a>
                          <a href="/institutions" class="btn btn-hero">INSTITUTIONS</a>
                          <a href="/classrooms" class="btn btn-hero"> CLASSROOMS </a>
                          <a href="pages/agenda" class="btn btn-hero">
                            EVENTOS
                          </a>
                          <a href="pages/contact" class="btn btn-hero">
                            CONTATO
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-6">
                      <div class="row slider">
                        <div class="col">
                          <div
                            class="carousel slide margin-slider"
                            data-bs-ride="carousel"
                            id="slider"
                          >
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img
                                  class="d-block img-fluid pb-4"
                                  src="assets/logo.png"
                                  alt=""
                                />
                              </div>
                            
                            <button
                              class="carousel-control-prev"
                              type="button"
                              data-bs-target="#slider"
                              data-bs-slide="prev"
                            >
                              <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                              class="carousel-control-next"
                              type="button"
                              data-bs-target="#slider"
                              data-bs-slide="next"
                            >
                              <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span class="visually-hidden">Next</span>
                            </button>

                            <div class="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slideshow 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slide-to="1"
                                aria-label="Slideshow 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slide-to="2"
                                aria-label="Slideshow 3"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
                    <section class="modal" id="modalNewsletter" tabindex="-1" aria-hidden="true"
                aria-labelledby="label-modal-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- Heading Modal-->
                        <div class="modal-header">
                            <span class="text-secondary font-weight-bold">NEWSLETTER BIBLIOTECA-MAUÁ</span>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="modal-body-header">
                                <span><strong class="font-weight-bold text-secondary">É GRÁTIS</strong>, receber
                                    noticias no
                                    e-mail com o:</span>
                                <br />
                                <h5><strong class="font-weight-bold text-success">NEWSLETTER BIBLIOTECA-MAUÁ</strong></h5>
                                <p class="small text-secondary">Prencha o Formulário para receber todas as novidades em
                                    forma de boletim de notícias em seu e-mail e nos ajude a saber como nos conheceu!
                                </p>
                            </div>
                            <div class="modal-body-content">
                                <form>
                                    <div class="form-group">
                                        <label for="inputReceiverUser">Nome</label>
                                        <input type="text" class="form-control" id="inputReceiverUser"
                                            name="inputReceiverUser" aria-describedby="nameHelp"
                                            placeholder="ex: 'John Doe'">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputReceiverEmail">Email</label>
                                        <input type="email" class="form-control" id="inputReceiverEmail"
                                            name="inputReceiverEmail" aria-describedby="emailHelp"
                                            placeholder="ex: 'john.doe@google.com'">
                                    </div>
                                    <div class="form-group my-4">
                                        <label for="inputReceiverMeetUsBy">Como você nos encontrou?</label>
                                        <div class="container">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="meetUsLinkedin"
                                                    value="linkedin">
                                                <label class="form-check-label" for="meetUsLinkedin">Linkedin</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="meetUsFacebook"
                                                    value="facebook">
                                                <label class="form-check-label" for="meetUsFacebook">Facebook</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="meetUsCommunity"
                                                    value="community">
                                                <label class="form-check-label" for="meetUsCommunity">COMUNIDADE</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="meetUsAtWork"
                                                    value="work">
                                                <label class="form-check-label" for="meetUsAtWork">COLEGA DE
                                                    TRABALHO</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary mt-4 mb-4 mx-2">Enviar</button>
                                        <button type="reset" class="btn btn-danger mt-4 mb-4 mx-2">Limpar Dados</button>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-body-footer">
                                <small id="emailHelp" class="form-text text-muted">É PRIVADO, seus dados estão seguros e
                                    não
                                    são compartilhados.</small>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="list-social">
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                                    class="link-social"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                                    class="link-social"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                                    class="link-social"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                                    class="link-social"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
};
export const hero = HeroComponent();
