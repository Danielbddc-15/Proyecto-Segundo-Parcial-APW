import React from 'react';
import logo from '../imagenes/logo.png';
import facci from '../imagenes/facci.png';
import '../estilos/Home.css';
import { Link, useNavigate } from 'react-router-dom';


function Home(){
  const navigate = useNavigate();

  const mostrarLogin = (tipo) => {
    var modal = document.getElementById('login-modal');
    modal.classList.add('active');
    
    if (tipo === 'estudiantes') {
        document.getElementById('estudiantes-login').style.display = 'block';
        document.getElementById('docentes-login').style.display = 'none';
    } else if (tipo === 'docentes') {
        document.getElementById('estudiantes-login').style.display = 'none';
        document.getElementById('docentes-login').style.display = 'block';
    }
  };

  const cancelar = () => {
    window.location.href = '/'; 
  };

  const validarCorreo = (correo) => {
    var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
  };

  const validarEstudiante = (event) => {
    event.preventDefault();
  
    // Recuperar información de registro desde localStorage
    const usuarioRegistrado = JSON.parse(localStorage.getItem('usuarioRegistrado'));
  
    const username = document.getElementById('estudiante-username').value;
    const password = document.getElementById('estudiante-password').value;
  
    const errorUsernameE = document.getElementById("error-usernameE");
    const errorPasswordE = document.getElementById("error-passwordE");
  
    // Validar correo
    if (!validarCorreo(username)) {
      errorUsernameE.textContent = "Correo electrónico inválido";
      errorUsernameE.style.display = "block";
      return false;
    } else if (username !== usuarioRegistrado.correo) {
      // Comparar el correo ingresado con el correo registrado
      errorUsernameE.textContent = "Correo electrónico incorrecto";
      errorUsernameE.style.display = "block";
      return false;
    } else {
      errorUsernameE.textContent = "";
      errorUsernameE.style.display = "none";
    }
  
    // Validar contraseña
    if (password.trim() === '' || password !== usuarioRegistrado.password) {
      // Comparar la contraseña ingresada con la contraseña registrada
      errorPasswordE.textContent = "Contraseña incorrecta";
      errorPasswordE.style.display = "block";
      return false;
    } else {
      errorPasswordE.textContent = "";
      errorPasswordE.style.display = "none";
    }
  
    // Si los datos son correctos, redirigir a la página correspondiente
    navigate('/InicioEstudiante');
    return false;
  };
  
  // ... (otro código)
  
  const validarDocente = (event) => {
    event.preventDefault();
  
    // Recuperar información de registro desde localStorage
    const usuarioRegistrado = JSON.parse(localStorage.getItem('usuarioRegistrado'));
  
    const username = document.getElementById('docente-username').value;
    const password = document.getElementById('docente-password').value;
  
    const errorUsername = document.getElementById("error-username");
    const errorPassword = document.getElementById("error-password");
  
    // Validar correo
    if (!validarCorreo(username)) {
      errorUsername.textContent = "Correo electrónico inválido";
      errorUsername.style.display = "block";
      return false;
    } else if (username !== usuarioRegistrado.correo) {
      // Comparar el correo ingresado con el correo registrado
      errorUsername.textContent = "Correo electrónico incorrecto";
      errorUsername.style.display = "block";
      return false;
    } else {
      errorUsername.textContent = "";
      errorUsername.style.display = "none";
    }
  
    // Validar contraseña
    if (password.trim() === '' || password !== usuarioRegistrado.password) {
      // Comparar la contraseña ingresada con la contraseña registrada
      errorPassword.textContent = "Contraseña incorrecta";
      errorPassword.style.display = "block";
      return false;
    } else {
      errorPassword.textContent = "";
      errorPassword.style.display = "none";
    }
  
    // Si los datos son correctos, redirigir a la página correspondiente
    navigate('/inicioDocente');
    return false;
  };
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sistema de Gestión de Prácticas</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" />
        <link rel="stylesheet" href="styles.css" />
      </head>

      <body className='bodyHome'>
        <header className='headerH'>
          <img src={logo} alt="Logo Institución" className="logo" />
          <nav>
            <ul>
              <li><a href="https://www.uleam.edu.ec/informacion-institucional/">Acerca de</a></li>
              <li><a href="https://www.uleam.edu.ec/contactos/">Contacto</a></li>
            </ul>
          </nav>
        </header>

        <div className="b-container">
          <h1>Bienvenido</h1>
          <h2>Acceder como:</h2>
          <button onClick={() => mostrarLogin('estudiantes')}>Estudiante</button>
          <button onClick={() => mostrarLogin('docentes')}>Docente</button>
        </div>

        <div className="modal" id="login-modal">
          <div className="form-containerH" id="estudiantes-login" style={{ display: 'none' }}>
            <div className="login-containerH">
              <form onSubmit={validarEstudiante}>
                <h1><i className="fas fa-sign-in-alt"></i> Estudiante</h1>
                <div className="input-container">
                  <i className="fas fa-user"></i>
                  <input type="email" placeholder="Correo electrónico" id="estudiante-username" />
                  <div id="error-usernameE" className="error-messageE"></div>
                </div>
                <div className="input-container">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Contraseña" id="estudiante-password" />
                  <div id="error-passwordE" className="error-messageE"></div>
                  <div>
                    <a href="#">Olvidé mi contraseña</a>
                  </div>
                  <div>
                    <Link to='/Registro'>¿No tienes cuenta?</Link>
                  </div>
                </div>
                <div className="button-container">
                  <button type="button" className="btn-cancelar" onClick={cancelar}>Cancelar</button>
                  <button type="submit" className="btn-aceptar"><i className="fas fa-check"></i> Ingresar</button>
                </div>
              </form>
            </div>
          </div>
        

        <div className="form-containerH" id="docentes-login" style={{ display: 'none' }}>
          <div className="login-containerH">
            <form onSubmit={validarDocente}>
              <h1><i className="fas fa-sign-in-alt"></i> Docente</h1>
              <div className="input-container">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Correo electrónico" id="docente-username" />
                <div id="error-username" className="error-message"></div>
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" id="docente-password" />
                <div id="error-password" className="error-message"></div>
                <div>
                  <a href="#">Olvidé mi contraseña</a>
                </div>
                <div>
                <Link to='/Registro'>¿No tienes cuenta?</Link>
                </div>
              </div>
              <div className="button-container">
                <button type="button" className="btn-cancelar" onClick={cancelar}>Cancelar</button>
                <button type="submit" className="btn-aceptar"><i className="fas fa-check"></i> Ingresar</button>
              </div>
            </form>
          </div>
        </div>
     </div>
        <footer className='footerH'>
          <p>&copy; 2023 Mi Sitio Web</p>
          <img className='imgH' src={facci} alt="Logo Facci" />
        </footer>
      </body>
    </>
  );
};

export default Home;
