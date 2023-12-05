import React, { useEffect, useState } from 'react';
import perfil from '../imagenes/perfil.png';
import {  InlineIcon } from '@iconify/react';
import calendarIcon from '@iconify-icons/flat-color-icons/calendar';
import assistantIcon from '@iconify-icons/flat-color-icons/assistant';
import homeIcon from '@iconify-icons/flat-color-icons/home';
import downLeftIcon from '@iconify-icons/flat-color-icons/down-left';
import { Link } from 'react-router-dom';
import '../estilos/Agregar.css'

function Evaluar() {
  
 
  const [practicasAsignadas, setPracticasAsignadas] = useState([]);

  useEffect(() => {
    cargarPracticasEstudiante();
  }, []);

  function cargarPracticasEstudiante() {
    const storedPracticas = JSON.parse(localStorage.getItem('practicas')) || [];

    // Actualizar el estado con las prácticas cargadas
    setPracticasAsignadas(storedPracticas);
  }

 
  
  function guardarCalificacion(index) {
    const calificacion = parseFloat(practicasAsignadas[index].calificacion); // Obtén el valor de la calificación
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
      alert('Ingrese una calificación válida entre 0 y 10');
      return;
    }

    // Actualiza el estado con la nueva calificación
    setPracticasAsignadas((prevPracticas) => {
      const newPracticas = [...prevPracticas];
      newPracticas[index].calificacion = calificacion.toString();
      return newPracticas;
    });

    // Actualiza el almacenamiento local
    localStorage.setItem('practicas', JSON.stringify(practicasAsignadas));

    alert('Calificación guardada exitosamente');
  }
  return (
    <div>
      <head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Your App Title</title>
  <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
</head>
      <body className='bodyID'>
    <nav className='navID'>
      <header className='headerID'>
        <div className="barID"></div>
        <div className="userID">
          <img className='img1' src={perfil} alt="" />
          <div className="name">Perfil Docente</div>
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
  <body className='bodyVer'>
          <div className="body_table">
            <table>
              <caption>Practicas asignadas</caption>
              <thead>
                <tr>
                  <th>Alumno</th>
                  <th>Empresa</th>
                  <th>Estado</th>
                  <th>Fecha inicio</th>
                  <th>Fecha fin</th>
                  <th>Encargado</th>
                  <th>Contacto</th>
                  <th>Calificación</th>
                </tr>
              </thead>

              <tbody>
                {practicasAsignadas.map((practica, index) => (
                  <tr key={index}>
                    <td>{practica.alumno}</td>
                    <td>{practica.empresa}</td>
                    <td>{practica.estado}</td>
                    <td>{practica.duracion}</td>
                    <td>{practica.duracion2}</td>
                    <td>{practica.encargado}</td>
                    <td>{practica.contacto}</td>
                    <td>{practica.calificacion}</td>
                    <td>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={practica.calificacion}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPracticasAsignadas((prevPracticas) => {
                          const newPracticas = [...prevPracticas];
                          newPracticas[index].calificacion = value;
                          return newPracticas;
                        });
                      }}
                    />
                    <button onClick={() => guardarCalificacion(index)}>calificar</button>
                  </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  
                </tr>
              </tfoot>
            </table>
          </div>
        </body>
      
    </div>
  )
}

export default Evaluar;