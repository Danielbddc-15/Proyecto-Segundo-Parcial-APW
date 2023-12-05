import React, { useEffect, useState } from 'react';
import { InlineIcon } from '@iconify/react';
import calendarIcon from '@iconify-icons/flat-color-icons/calendar';
import assistantIcon from '@iconify-icons/flat-color-icons/assistant';
import okIcon from '@iconify-icons/flat-color-icons/ok';
import homeIcon from '@iconify-icons/flat-color-icons/home';
import downLeftIcon from '@iconify-icons/flat-color-icons/down-left';
import { Link } from 'react-router-dom';
import '../estilos/Ver.css';
import perfil from '../imagenes/perfil.png';


function Ver() {

  const [practicasAsignadas, setPracticasAsignadas] = useState([]);

  useEffect(() => {
    cargarPracticasEstudiante();
  }, []);

  function cargarPracticasEstudiante() {
    const storedPracticas = JSON.parse(localStorage.getItem('practicas')) || [];

    // Actualizar el estado con las prácticas cargadas
    setPracticasAsignadas(storedPracticas);
  }

  return (
    <div>
      <body className='bodyIE'>
    <nav className='navIE'>
      <header className='headerIE'>
        <div class="barIE"></div>
        <div class="userIE">
          <img className='img2' src={perfil} alt="" />
          <div class="name">Perfil Estudiante</div>
        </div>
      </header>

      <div class="linksIE">
        
      <Link to="/PerfilEstudiante">
  <div className="icon">
    <InlineIcon icon={assistantIcon} width="32" height="32" />
  </div>
  <div className="title">Perfil de usuario</div>
</Link>
<Link to="/">
  <div className="icon">
    <InlineIcon icon={homeIcon} width="32" height="32" />
  </div>
  <div className="title">Cerrar Sesión</div>
</Link>
<Link to="/InicioEstudiante">
  <div className="icon">
    <InlineIcon icon={downLeftIcon} width="32" height="32" />
  </div>
  <div className="title">Volver</div>
</Link>
      </div>
    </nav>
   
  </body>
  <body className='bodyVer'>
          <div class="body_table">
            <table>
              <caption>Practicas asignadas</caption>
              <thead>
                <tr>
                  <th>Alumno</th>
                  <th>Empresa</th>
                  <th>Estado</th>
                  <th>Duración</th>
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
                    <td>{practica.encargado}</td>
                    <td>{practica.contacto}</td>
                    <td>{practica.calificacion}</td>
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
                </tr>
              </tfoot>
            </table>
          </div>
        </body>
      
    </div>
  )
}
export default Ver;