import React from 'react';

const Carousel = () => {
  return (
    <div className="container mt-5">
      <div id="meuCarrossel" className="carousel slide" data-ride="carousel">
        {/* Indicadores */}
        <ul className="carousel-indicators">
          <li data-target="#meuCarrossel" data-slide-to="0" className="active"></li>
          <li data-target="#meuCarrossel" data-slide-to="1"></li>
          <li data-target="#meuCarrossel" data-slide-to="2"></li>
        </ul>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/teste.png" alt="Imagem 1" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src="img/teste 2.png" alt="Imagem 2" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src="img/teste3.png" alt="Imagem 3" className="d-block" />
          </div>
        </div>

        {/* Controles */}
        <a className="carousel-control-prev" href="#meuCarrossel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#meuCarrossel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;