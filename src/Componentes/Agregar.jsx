import React, { useEffect, useState } from 'react';
import perfil from '../imagenes/perfil.png';
import { InlineIcon } from '@iconify/react';
import calendarIcon from '@iconify-icons/flat-color-icons/calendar';
import assistantIcon from '@iconify-icons/flat-color-icons/assistant';
import okIcon from '@iconify-icons/flat-color-icons/ok';
import homeIcon from '@iconify-icons/flat-color-icons/home';
import downLeftIcon from '@iconify-icons/flat-color-icons/down-left';
import { Link } from 'react-router-dom';
import '../estilos/Agregar.css'

 function Agregar() {

  const [practicasAsignadas, setPracticasAsignadas] = useState([]);

  useEffect(() => {
    cargarPracticas();
  }, []);


  function cargarPracticas() {
    const storedPracticas = JSON.parse(localStorage.getItem('practicas')) || [];
    setPracticasAsignadas(storedPracticas);
  }

  function agregarPractica(event) {
    event.preventDefault();

    const nombreEstudiante = document.getElementById('nombre-estudiante').value;
    const duracion = document.getElementById('duracion').value.split('/').reverse().join('-');
    const duracion2 = document.getElementById('duracion2').value.split('/').reverse().join('-');
    const empresa = document.getElementById('empresa').value;
    const encargado = document.getElementById('encargado').value;
    const contacto = document.getElementById('contacto').value;

    if (nombreEstudiante && duracion && duracion2 && empresa && encargado && contacto) {
      const nuevaPractica = {
        alumno: nombreEstudiante,
        empresa: empresa,
        estado: "En Progreso",
        duracion: duracion,
        duracion2: duracion2,
        encargado: encargado,
        contacto: contacto
      };

      setPracticasAsignadas((prevPracticas) => [...prevPracticas, nuevaPractica]);

      // Limpiar campos del formulario
      document.getElementById('nombre-estudiante').value = '';
      document.getElementById('duracion').value = '';
      document.getElementById('duracion2').value = '';
      document.getElementById('empresa').value = '';
      document.getElementById('encargado').value = '';
      document.getElementById('contacto').value = '';

      localStorage.setItem('practicas', JSON.stringify([...practicasAsignadas, nuevaPractica]));
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  function eliminarPractica(nombreEstudiante) {
    const nuevasPracticas = practicasAsignadas.filter(practica => practica.alumno !== nombreEstudiante);
    setPracticasAsignadas(nuevasPracticas);
    localStorage.setItem('practicas', JSON.stringify(nuevasPracticas));
  }


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
        
      <Link to="/PerfilDocente">
  <div className="icon">
    <InlineIcon icon={assistantIcon} width="32" height="32" />
  </div>
  <div className="title">Perfil de usuario</div>
</Link>
<Link to="/Evaluar">
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
  <main style={{ marginLeft: '800px' }}>
          <h2>Prácticas Asignadas</h2>
          <table id="tabla-practicas">
            <thead>
              <tr>
                <th> Estudiante </th>
                <th> Fecha de inicio </th>
                <th> Fecha de fin </th>
                <th> Empresa </th>
                <th> Encargado </th>
                <th> Contacto </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody id="lista-practicas">
              {practicasAsignadas.map((practica) => (
                <tr key={practica.alumno}>
                  <td> {practica.alumno} </td>
                  <td> {practica.duracion} </td>
                  <td> {practica.duracion2} </td>
                  <td> {practica.empresa} </td>
                  <td> {practica.encargado} </td>
                  <td> {practica.contacto} </td>
                  <td>
                    <button onClick={() => eliminarPractica(practica.alumno)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <section className="form-register">
                    <form onSubmit={(event) => agregarPractica(event)}>
                        <h2>Asignar Nueva Práctica</h2>
                        <input className="controls" type="text" name="nombre-estudiante" id="nombre-estudiante" placeholder="Nombre del estudiante" />
                        <p>tiempo inicio</p>
                        <input className="controls" type="date" name="duracion" id="duracion" placeholder="Duración de la práctica" />
                        <p>tiempo fin</p>
                        <input className="controls" type="date" name="duracion2" id="duracion2" placeholder="Duración de la práctica" />
                        <input className="controls" type="text" name="Empresa" id="empresa" placeholder="Nombre de la empresa" />
                        <input className="controls" type="text" name="encargado" id="encargado" placeholder="Nombre del encargado" />
                        <input className="controls" type="text" name="Contacto" id="contacto" placeholder="Contacto del encargado" />
                        <button type="submit">Agregar</button>
                    </form>
                </section>
        </main>
      </body>
    </div>
    
      
  
  );
}


export default Agregar;