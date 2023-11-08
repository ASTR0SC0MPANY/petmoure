import React from 'react';

const Header = () => {
  return (
    <header className="container-fluid text-white py-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Logotipo */}
          <div className="col-md-2 col-6 ml-0">
            <img src="img/logopetmoure.png" alt="Logo" className="img-fluid" />
          </div>
          {/* Barra de Pesquisa e Botões */}
          <div className="col-md-8 col-6 d-flex">
            <form className="form-inline flex-grow-1">
              <input className="form-control mr-2 flex-grow-1" type="search" placeholder="Pesquise na PetMoure" aria-label="Search" />
              <button className="btn btn-light" type="submit"><i className="fas fa-search"></i></button>
            </form>
            <button className="btn btn-light btn-sm ml-2 d-md-inline d-none" onClick={() => window.location.href='autenticar.html'}>Login</button>
            <button className="btn btn-light btn-sm ml-2 d-md-inline d-none" onClick={() => window.location.href='autenticar.html'}>Cadastro</button>
          </div>
          {/* Ícone de Coração */}
          <div className="col-md-1 col-6 text-center">
            <button className="btn btn btn-sm"><i className="fas fa-heart"></i></button>
          </div>
          {/* Ícone de Carrinho */}
          <div className="col-md-1 col-6 text-center">
            <button className="btn btn-sm"><i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>

        {/* Navbar Responsiva */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={() => window.location.href='cachorro.html'}>Cachorro</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => window.location.href='gato.html'}>Gato</a>
                </li>
                {/* Adicione mais itens conforme necessário */}
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" onClick={() => window.location.href='servicos.html'}>Serviços</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => window.location.href='promocoes.html'}>Promoções</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;