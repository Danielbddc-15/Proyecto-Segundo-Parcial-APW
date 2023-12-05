import React from 'react'
import perfil from '../imagenes/perfil.png'
import { InlineIcon } from '@iconify/react';
import calendarIcon from '@iconify-icons/flat-color-icons/calendar';
import okIcon from '@iconify-icons/flat-color-icons/ok';
import homeIcon from '@iconify-icons/flat-color-icons/home';
import downLeftIcon from '@iconify-icons/flat-color-icons/down-left';
import { Link } from 'react-router-dom';
import '../estilos/PerfilDocente.css';

function PerfilDocente() {
  return (
    <div>
    <body className='bodyID'>
    <nav className='navID'>
      <header className='headerID'>
        <div class="barID"></div>
        <div class="userID">
          <img className='img1' src={perfil} alt="" />
          <div class="name">Perfil Docente</div>
        </div>
      </header>

      <div class="linksID">
        
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
<Link to="/InicioDocente">
  <div className="icon">
    <InlineIcon icon={downLeftIcon} width="32" height="32" />
  </div>
  <div className="title">Volver</div>
</Link>
      </div>
    </nav>
   
  </body>
  
  <body>
    <section class="seccion-perfil-usuario">
        <div class="perfil-usuario-header">
            <div class="perfil-usuario-portada">
                <div class="perfil-usuario-avatar">
                    <img className='imgPDE' src={perfil} alt=''/>
                    <button type="button" class="boton-avatar">
                        <i class="far fa-image"></i>
                    </button>
                </div>
                <button type="button" class="boton-portada">
                    <i class="far fa-image"></i> Cambiar fondo
                </button>
            </div>
        </div>
        <div class="perfil-usuario-body">
            <div class="perfil-usuario-bio">
                <h3 class="titulo">Nombre del docente</h3>
                <p class="texto">Descripción del docente</p>
            </div>
            <div class="perfil-usuario-footer">
                <ul class="lista-datos">
                    <li><i class="icono fas fa-map-signs"></i> Direccion de usuario:</li>
                    <li><i class="icono fas fa-phone-alt"></i> Telefono:</li>
                    <li><i class="icono fas fa-briefcase"></i> Trabaja en.</li>
                    <li><i class="icono fas fa-building"></i> Cargo</li>
                </ul>
                <ul class="lista-datos">
                    <li><i class="icono fas fa-map-marker-alt"></i> Ubicacion.</li>
                    <li><i class="icono fas fa-calendar-alt"></i> Fecha nacimiento.</li>
                    <li><i class="icono fas fa-user-check"></i> Registro.</li>
                    <li><i class="icono fas fa-share-alt"></i> Redes sociales.</li>
                </ul>
            </div>
            <div class="redes-sociales">
                <a href="" class="boton-redes facebook fab fa-facebook-f"><i class="icon-facebook"></i></a>
                <a href="" class="boton-redes twitter fab fa-twitter"><i class="icon-twitter"></i></a>
                <a href="" class="boton-redes instagram fab fa-instagram"><i class="icon-instagram"></i></a>
            </div>
        </div>
    </section>
    <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
 </body>
    </div>
  );
}

export default PerfilDocente;