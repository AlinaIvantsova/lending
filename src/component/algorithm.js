import React, {Component} from 'react';
import rect from '../img/Rectangle 2.11.png'
import styled from "styled-components";

const Header = styled.div`
    position: absolute;
    margin-top: 100px;
    margin-left: 275px;
    width: 70%;
    h2{
    font-family: "Fascinate",sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 50px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 37px;
    float:right;
    }
    img{
    margin-top: 45px;
    position: absolute;
    }
`;
const Block = styled.div`
width: 378px;
height: 327px;
background: #F7F7F7;
border: 4px solid #D0CECE;
box-sizing: border-box;
border-radius: 5px;
display: flex;
justify-content: space-around;
h2{position: absolute;
width: 316px;
height: 156px;
font-family: Fascinate;
font-style: normal;
font-weight: 900;
font-size: 24px;
line-height: 32px;
letter-spacing: 0.5em;
text-transform: uppercase;
color: #C2C2C2;
margin-top:175px;
}
}
`;
const BlockActive = styled.div`
width: 378px;
height: 482px;  
background: #F95027;
border-radius: 5px;
display: flex;
margin-top: -50px;
justify-content: space-around;
h2{position: absolute;
width: 315px;
height: 156px;
font-family: Fascinate;
font-style: normal;
font-weight: 900;
font-size: 36px;
line-height: 48px;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #FFFFFF;
margin-top:175px;
}
}
`;

class Algorithm extends Component {
  render() {
    return (
      <section id="two" className="spotlight style2 bottom">
        <Header><img src={rect} alt=""/><h2>Алгоритм создания сайта<br/>в пк "кираса"</h2></Header>
        <div className="content">
          {/*<Block><h2>Выбор шаблона</h2></Block>*/}
          {/*<BlockActive><h2>Выбор структуры сайта</h2></BlockActive>*/}
          {/*<Block><h2>Выбор модулей</h2></Block>*/}
        </div>
        <a href="#three" className="goto-next scrolly">Next</a>
      </section>
    );
  }
}

export default Algorithm;
