import React, { useState } from 'react';
import '../estilos/Registro.css';


function RegistroUsuario() {
  const handleCancelar = () => {
    window.location.href = '/';
  };
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [campos, setCampos] = useState({
    nombre: false,
    password: false,
    correo: false,
  });

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const validarCampo = (expresion, valor, campo) => {
    if (expresion.test(valor)) {
      setCampos((prevCampos) => ({ ...prevCampos, [campo]: true }));
    } else {
      setCampos((prevCampos) => ({ ...prevCampos, [campo]: false }));
    }
  };

  const validarPassword2 = (valor) => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== valor) {
      setCampos((prevCampos) => ({ ...prevCampos, password: false }));
    } else {
      setCampos((prevCampos) => ({ ...prevCampos, password: true }));
    }
    if (inputPassword2.value !== valor) {
      setCampos((prevCampos) => ({ ...prevCampos, password: false }));
    } else {
      setCampos((prevCampos) => ({ ...prevCampos, password: true }));
    }
  };

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case 'nombre':
        validarCampo(expresiones.nombre, e.target.value, 'nombre');
        break;
      case 'password':
        validarCampo(expresiones.password, e.target.value, 'password');
        validarPassword2(e.target.value);
        break;
      case 'password2':
        validarPassword2(e.target.value);
        break;
      case 'correo':
        validarCampo(expresiones.correo, e.target.value, 'correo');
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const terminos = document.getElementById('terminos');
  
    if (campos.nombre && campos.password && campos.correo && terminos.checked) {
      // Almacena la información de registro en localStorage
      const usuarioRegistrado = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        password: document.getElementById('password').value,
        // Agrega más campos según sea necesario
      };
  
      localStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioRegistrado));
  
      // Actualiza el estado para mostrar el mensaje de registro exitoso
      setRegistroExitoso(true);
    } else {
      console.log('Error: Por favor, rellena el formulario correctamente.');
    }
  };

  return (
    <body className="BodyRegistro" >
      <div className="form-containerR">
      <div className="login-containerR">
        <h2>Registro de usuario</h2>
        <form className="formularioR" id="formulario" onSubmit={onSubmit}>
            <div className="formulario__grupo" id="grupo__nombre">
              <label htmlFor="nombre" className="formulario__label">
                Nombre
              </label>
              <div className="formulario__grupo-input">
                <input
                  type="text"
                  className="formulario__inputR"
                  name="nombre"
                  id="nombre"
                  placeholder="Kayla Elizabeth"
                  onChange={validarFormulario}
                />
                <i className="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p className="formulario__input-error">
                El nombre no puede contener números ni caracteres especiales.
              </p>
            </div>

            <div className="formulario__grupo" id="grupo__correo">
              <label htmlFor="correo" className="formulario__label">
                Correo Electrónico
              </label>
              <div className="formulario__grupo-input">
                <input
                  type="email"
                  className="formulario__inputR"
                  name="correo"
                  id="correo"
                  placeholder="correo@correo.com"
                  onChange={validarFormulario}
                />
                <i className="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p className="formulario__input-error">
                El correo solo puede contener letras, números, puntos, guiones y guion bajo.
              </p>
            </div>

            <div className="formulario__grupo" id="grupo__password">
              <label htmlFor="password" className="formulario__label">
                Contraseña
              </label>
              <div className="formulario__grupo-input">
              <input
  type="password"
  className="formulario__inputR"
  name="password"  // Asegúrate de que el atributo name sea 'password'
  id="password"
  placeholder="Arquimes_123#$"
  onChange={validarFormulario}
/>
                <i className="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p className="formulario__input-error">
                La contraseña tiene que ser de 4 a 12 dígitos.
              </p>
            </div>

            <div className="formulario__grupo" id="grupo__password2">
              <label htmlFor="password2" className="formulario__label">
                Repetir Contraseña
              </label>
              <div className="formulario__grupo-input">
                <input
                  type="password"
                  className="formulario__inputR"
                  name="password2"
                  id="password2"
                  onChange={validarFormulario}
                />
                <i className="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
            </div>

            <div className="formulario__grupo" id="grupo__terminos">
              <label className="formulario__label">
                <input
                  className="formulario__checkboxR"
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                  onChange={validarFormulario}
                />
                Acepto los Terminos y Condiciones
              </label>
            </div>

            <div className="formulario__mensaje" id="formulario__mensaje">
              <p>
                <i className="fas fa-exclamation-triangle"></i>{' '}
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </div>

            <div className="formulario__grupo formulario__grupo-btn-enviar">
              <button type="submit" className="formulario__btnR">
                Registro
              </button>
            </div>
            <div className="formulario__grupo formulario__grupo-btn-enviar">
              <input
                id="btn-cancelar"
                className="formulario__btnR"
                type="button"
                value="Cancelar"
                onClick={handleCancelar}
              />
              <p className="formulario__mensaje-exito" id="formulario__mensaje-exito">
                Registro enviado exitosamente!
              </p>
            </div>
          </form>
        </div>
        <img
          src="https://seeklogo.com/images/U/uleam-logo-853FE191D4-seeklogo.com.png"
          alt="Descripción de la imagen"
          className="welcome-screen-container"
        />
      </div>
      <script src="registrousuario.js"></script>
      <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossOrigin="anonymous"></script>
    </body>
  );
};

export default RegistroUsuario;