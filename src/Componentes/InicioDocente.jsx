import React from 'react';
import "../estilos/InicioDocente.css";
import "@iconify/react"; // Asegúrate de importar el paquete Iconify
import valores from"../imagenes/valores.png"
import vision from"../imagenes/vision.png"
import mision from"../imagenes/mision.png"
import perfil from"../imagenes/perfil.png"
import { InlineIcon } from '@iconify/react';
import calendarIcon from '@iconify-icons/flat-color-icons/calendar';
import assistantIcon from '@iconify-icons/flat-color-icons/assistant';
import okIcon from '@iconify-icons/flat-color-icons/ok';
import homeIcon from '@iconify-icons/flat-color-icons/home';
import downLeftIcon from '@iconify-icons/flat-color-icons/down-left';
import { Link } from 'react-router-dom';

function InicioEstudiante() {
  return (
    
    <body className='bodyID'>

      <nav className='navID'>
      <header className='headerID'>
        <div className="barID"></div>
        <div className="userID">
          <img className="img1" src={perfil} alt="" />
          <div className="name">Bienvenido Docente</div>
        </div>
      </header>
      
        <div className="linksID">
        <Link to="/PerfilDocente">
  <div className="icon">
    <InlineIcon icon={assistantIcon} width="32" height="32" />
  </div>
  <div className="title">Perfil de usuario</div>
</Link>
<Link to="/Agregar">
  <div className="icon">
    <InlineIcon icon={calendarIcon} width="32" height="32" />
  </div>
  <div className="title">Agregar práctica</div>
</Link>
<Link to="/Agregar">
  <div className="icon">
    <InlineIcon icon={okIcon} width="32" height="32" />
  </div>
  <div className="title">Evaluar práctica</div>
</Link>
<Link to="/">
  <div className="icon">
    <InlineIcon icon={homeIcon} width="32" height="32" />
  </div>
  <div className="title">Cerrar Sesión</div>
</Link>

        </div>
      </nav>
      

      <div class="cardsID">
      <div class="flip-cardID">
        <div class="flip-card-innerID">
          <div class="flip-card-frontID">
            <img
              src={vision}
              alt="Avatar"
             
            />
          </div>
          <div class="flip-card-backID">
            <h1>Visión</h1>
            <p>Ser un referente nacional e internacional de Institución de Educación Superior que contribuye al desarrollo social, cultural y productivo con profesionales éticos, creativos, cualificados y con sentido de pertinencia.</p>

          </div>
        </div>
      </div>
      <div class="flip-cardID">
        <div class="flip-card-innerID">
          <div class="flip-card-frontID">
            <img
              src={mision}
              alt="Avatar"
              
            />
          </div>
          <div class="flip-card-backID">
            <h1>Misión</h1>
            <p> Formar profesionales competentes y emprendedores desde lo académico, la investigación, y la vinculación, que contribuyan a mejorar la calidad de vida de la sociedad.</p>
          </div>
        </div>
      </div>
      <div class="flip-cardID">
        <div class="flip-card-innerID">
          <div class="flip-card-frontID">
            <img
              src={valores}
              alt="Avatar"
              
            />
          </div>
          <div class="flip-card-backID">
            <h1>valores institucionales</h1>
            <p>- Justicia</p>
            <p>- Libertad</p>
            <p>- Solidaridad</p> 
            <p>- Responsabilidad</p>
            <p>- Honestidad</p>
            <p>- Respeto</p>
            <p>- Ética</p>
            
          </div>
        </div>
      </div>
      </div>
      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    </ body>
  );
}

export default InicioEstudiante;
