import { Component, NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarrosselComponent } from './app/carrossel/carrossel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h4>Reforço Escolar</h4>
            <h1>Cantinho do Conhecimento</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#testimonials">Feedbacks</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
          <div class="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      padding: 15px 0;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h1 {
      font-size: 1.8rem;
      color: var(--primary-color);
      margin: 0;
    }

    nav ul {
      display: flex;
      list-style: none;
      gap: 30px;
    }

    nav a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: var(--primary-color);
    }

    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
    }

    .mobile-menu-btn span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: var(--text-color);
      border-radius: 3px;
    }

    @media (max-width: 768px) {
      nav {
        display: none;
      }

      .mobile-menu-btn {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {}

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Nosso propósito...</h1>
            <p>O Cantinho do Conhecimento tem o intuito de colaborar com o desenvolvimento da criança e, princiipalmente, auxiliar o educando na vida escolar,
            buscando minimizar os impactos causados pelas dificuldades de aprendizagem, proporcionando oportunidades para aquisição de novos conhecimentos.</p>
            <div class="hero-btns">
              <a href="#contact" class="btn">Entrar em contato</a>
              <a href="#services" class="btn btn-secondary">Saiba mais</a>
            </div>
          </div>
          <div class="hero-image">
            <img src='./assets/foto1.jpg' alt="foto">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 160px 0 80px;
      background-color: var(--section-bg);
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
    }

    .hero-text h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      color: var(--text-color);
    }

    .hero-text p {
      font-size: 1.2rem;
      color: var(--light-text);
      margin-bottom: 30px;
    }

    .hero-btns {
      display: flex;
      gap: 15px;
    }

    .hero-image img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      .hero {
        padding: 130px 0 60px;
      }

      .hero-content {
        grid-template-columns: 1fr;
      }

      .hero-text h1 {
        font-size: 2.5rem;
      }

      .hero-image {
        order: -1;
      }
    }
  `]
})
export class HeroComponent {}

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="services">
      <div class="container">
        <h2 class="section-title text-center">Nossos Serviços</h2>
        <p class="section-subtitle text-center"> Oferecemos Reforço Escolar desde à Educação Infantil até o 7° Ano</p>

        <div class=" grid grid-cols-3">
          <div class="card service-card">
            <div class="service-icon">
              <img src="https://th.bing.com/th/id/OIP.yB8YIJ6cGIV2-PL6pd62hQHaHa?rs=1&pid=ImgDetMain" alt="Consulting">
            </div>
            <h3>Alfabetização e Letramento</h3>
            <p></p>
            <a href="#contact" class="service-link">Saiba Mais →</a>
          </div>

          <div class="card service-card">
            <div class="service-icon">
              <img src="https://th.bing.com/th/id/OIP.xkxkN6UGljFWViVdKdKoDgHaHk?rs=1&pid=ImgDetMain" alt="Marketing">
            </div>
            <h3>Auxílio nas Atividades Escolares</h3>
            <p></p>
            <a href="#contact" class="service-link">Saiba Mais →</a>
          </div>

          <div class="card service-card">
            <div class="service-icon">
              <img src="https://png.pngtree.com/png-clipart/20231005/original/pngtree-guidance-icon-vector-image-guidance-teaching-help-vector-png-image_12966810.png" alt="Development">
            </div>
            <h3>Orientação nos Trabalhos e Pesquisas</h3>
            <p></p>
            <a href="#contact" class="service-link">Saiba Mais →</a>
          </div>

          <div class="card service-card">
            <div class="service-icon">
              <img src="https://static.vecteezy.com/system/resources/previews/021/654/376/original/planning-icon-vector.jpg" alt="">

            </div>
            <h3>Planejamento de atividades com foco nas dificuldades do Educando</h3>
            <p></p>
            <a href="#contact" class="service-link">Saiba Mais →</a>
          </div>

          <div class="card service-card">
            <div class="service-icon">
              <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/4669887-mix-icon-para-avaliacao-vetor.jpg" alt="">
            </div>
            <h3>Preparação para as Avaliações <br><br><br></h3>
            <p></p>
            <a href="#contact" class="service-link">Saiba Mais →</a>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background-color: var(--section-bg);
    }

    .service-card {
      text-align: center;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .service-icon {
      margin-bottom: 20px;
    }

    .service-icon img {
      width: 80px;
      height: 80px;
    }

    .service-card h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--primary-color);
    }

    .service-link {
      margin-top: auto;
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
      display: grid;
      margin-top: 15px;
      transition: all 0.3s ease;
    }

    .service-link:hover {
      transform: translateX(5px);
    }
  `]
})
export class ServicesComponent {}

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <img src="https://scontent.fcau4-1.fna.fbcdn.net/v/t1.6435-9/163324714_3906577766087585_5546028958386414712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFWDdBjTjNc41qQkmNIKOC4bvCqA44Y3Thu8KoDjhjdOEjM-VSiy836zCTDIKi33fIdVCLSlnxkSUsks1l8j_6v&_nc_ohc=QACMLOR1rDUQ7kNvgG1Ypfu&_nc_oc=Adjg6MecJrhLN2kuk1NdWLdB3unHanRa48d8fOjXsCTRQBj1IBM-PQl2ZYGG5jqSGgZmRvHhld3RSDgwRMPDP8ce&_nc_zt=23&_nc_ht=scontent.fcau4-1.fna&_nc_gid=ATYDjCPBkaJtb-k8fNy3z1S&oh=00_AYAutsWch-5U_pDWuq1D7yr7m39ymoZJTV1R7kPw6AUjug&oe=67EA9716" alt="About Us">
          </div>
          <div class="about-text">
            <h2 class="section-title">Sobre mim</h2>
            <h3>Pedagoga e Pós-Graduada em Psicopedagogia</h3>
            <p>We are a team of experienced professionals dedicated to providing top-quality services to businesses of all sizes. With over 10 years of experience in the industry, we have helped hundreds of clients achieve their business goals.</p>
            <p>Our mission is to deliver exceptional value through innovative solutions that drive growth and success for our clients. We believe in building long-term relationships based on trust, integrity, and results.</p>
            <div class="about-stats">
              <div class="stat">
                <h3>+ de 5</h3>
                <p>Anos de Experiência</p>
              </div>
              </div>
            </div>
          </div>
        </div>

      <hr>
    </section>
  `,
  styles: [`
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: center;
    }

    .about-image img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .about-stats {
      display: flex;
      gap: 30px;
      margin-top: 30px;
    }

    .stat h3 {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 5px;
    }

    .stat p {
      font-size: 1rem;
      color: var(--light-text);
      margin: 0;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
      }

      .about-stats {
        flex-direction: column;
        gap: 20px;
      }
    }
  `]
})
export class AboutComponent {}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `

  `,
  styles: [`
    .testimonials {
      background-color: var(--section-bg);
    }

    .testimonial-card {
      display: flex;
      flex-direction: column;
    }

    .testimonial-content {
      margin-bottom: 20px;
    }

    .testimonial-content p {
      font-style: italic;
      font-size: 1.1rem;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .testimonial-author img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .testimonial-author h4 {
      margin: 0;
      font-size: 1.1rem;
    }

    .testimonial-author p {
      margin: 0;
      color: var(--light-text);
      font-size: 0.9rem;
    }
  `]
})
export class TestimonialsComponent {}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title text-center">Contato</h2>
        <p class="section-subtitle text-center">👇 Entre em contato conosco para investir no futuro do seu filho </p>

        <div class="contact-container">
          <div class="contact-info">
            <div class="info-item">
              <h3>Email</h3>
              <p>teste&#64;teste.com</p>
            </div>
            <div class="info-item">
              <h3>whatsApp</h3>
              <p>(81) 99637-2556</p>
            </div>
            <div class="info-item">
              <h3>Endereço</h3>
              <p> Bairro São José <br>Surubim</p>
            </div>
            <div class="social-links">
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">LinkedIn</a>
              <a href="https://www.instagram.com/reforco_cantinhodoconhecimento?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="social-link">Instagram</a>
            </div>
          </div>


        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-container {
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }

    .contact-info {
      background-color: var(--primary-color);
      color: white;
      padding: 40px;
      border-radius: 8px;
    }

    .info-item {
      margin-bottom: 30px;
    }

    .info-item h3 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    .info-item p {
      margin: 0;
    }

    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 30px;
    }

    .social-link {
      color: white;
      text-decoration: none;
      transition: opacity 0.3s ease;
    }

    .social-link:hover {
      opacity: 0.8;
    }

    .contact-form {
      background-color: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    input, textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    textarea {
      resize: vertical;
    }

    @media (max-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>Reforço Escolar</h2>
            <p>Cantinho do Conhecimento</p>
          </div>
          <div class="footer-links">
            <div class="footer-links-column">
              <h3> Links Rápidos</h3>
              <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#testimonials">Feedbacks</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
            <div class="footer-links-column">
              <h3>Serviços</h3>
              <ul>
                <li><a href="#services">Alfabetização e Letramento</a></li>
                <li><a href="#services">Auxílio nas Atividades Escolares</a></li>
                <li><a href="#services">Orientação nos Trabalhos e Pesquisas</a></li>
                <li><a href="#services">Planejamento de atividades com foco nas dificuldades do Educando</a></li>
                <li><a href="#services">Preparação para as Avaliações</a></li>
              </ul>
            </div>

          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 CantinhoDoConhecimento <br> Alguns direitos Reservados</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #1f2937;
      color: white;
      padding: 60px 0 20px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 50px;
      margin-bottom: 40px;
    }

    .footer-logo h2 {
      font-size: 1.8rem;
      color: white;
      margin-bottom: 10px;
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .footer-links-column h3 {
      font-size: 1.2rem;
      margin-bottom: 20px;
      color: white;
    }

    .footer-links-column ul {
      list-style: none;
      padding: 0;
    }

    .footer-links-column li {
      margin-bottom: 10px;
    }

    .footer-links-column a {
      color: #d1d5db;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links-column a:hover {
      color: white;
    }

    .footer-bottom {
      border-top: 1px solid #374151;
      padding-top: 20px;
      text-align: center;
      color: #9ca3af;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
      }

      .footer-links {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    CarrosselComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-carrossel></app-carrossel>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-about></app-about>
      <app-testimonials></app-testimonials>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }
  `]
})
export class App {
  name = 'ServicePro';
}

bootstrapApplication(App, CarrosselComponent);
