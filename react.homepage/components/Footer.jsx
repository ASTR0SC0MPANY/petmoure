import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h2>Conheça-nos</h2>
          <p>Sobre a PetMoure</p>
          <p>Informações corporativas</p>
          <p>Políticas PetMoure</p>
          <p>Política de privacidade</p>
        </div>

        <div className="social-media">
          <h2>Siga a PetMoure nas redes sociais</h2>
          <ul>
            <li className="rs"><a href="#" target="_blank"><img src="img/facebook.png" alt="Facebook" /></a></li>
            <li className="rs"><a href="#" target="_blank"><img src="img/twitter.png" alt="Twitter" /></a></li>
            <li className="rs"><a href="#" target="_blank"><img src="img/instagram.png" alt="Instagram" /></a></li>
          </ul>
        </div>

        <div className="payment-methods">
          <h2>Meios de Pagamento</h2>
          <img src="img/pcpy.png" alt="PicPay" />
        </div>

        <div className="contact-info">
          <h2>Contato</h2>
          <p>Email: petmoure@gmail.com</p>
          <p>Telefone: (85) 98885-0079</p>
        </div>
      </div>

      <div className="copy">
        <div className="copy-content">
          @ 2023 PetMoure. Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;