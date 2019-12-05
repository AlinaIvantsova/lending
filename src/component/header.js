import React, {Component} from 'react';
import image from "../img/Mask Group.png"
import logo from "../img/Subtract.png"

class Header extends Component {
    render() {
        const ulStyle = {
            'textAlign': 'end'
        };
        const p_header = {
            'fontFamily': 'sans-serif',
            'fontSize': '15px'
        };
        return (
          <header id="header">
              <h1 id="logo"><a href="#"><img alt="" width="80%" src={logo}/></a></h1>
              <nav id="nav">
                  <ul>
                      <li><a>Главная</a></li>
                      <li><a>Алгоритм</a></li>
                      <li><a>Архитектура</a></li>
                  </ul>
                  <ul style={ulStyle}>
                      <li><a>Преимуществаааааааа</a></li>
                      <li><a>Контакты</a></li>
                  </ul>
              </nav>
              <section>
                  <div className="content">
                      <h2>Кираса</h2>
                      <p style={p_header}>Программный комплекс “КИРАСА” - <br/> это конструктор веб-сайтов, позволяющий
                          пользователю легко и быстро разработать типовой сайт с требуемым функционалом.
                      </p>
                      <p>Программный комплекс может быть использован всеми целевыми группами потребителей,
                          заинтересованными в создании своих сайтов, особый интерес представляет для предприятий,
                          организаций и учреждений с разветвленной организационной структурой (например,
                          региональных органов власти и управления, холдинговых компаний) требующей формировнаия
                          единого информационного пространства.</p>
                  </div>
              </section>
              <img className="kirasa" alt="" src={image}/>
          </header>

        );
    }
}

export default Header;
