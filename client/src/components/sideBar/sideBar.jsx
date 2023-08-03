import React, { useState } from 'react';
import './Sidebar.css'; // Asegúrate de crear este archivo CSS para los estilos

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className={`toggle-button ${isSidebarOpen ? 'open' : 'close'}`} onClick={toggleSidebar}>
        ☰
      </button>
      <nav>
        <ul>
          <li>
          Inicio <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvtldENwyAMRO82aTdpRukonaSjNJs0m7hyBMghNDmq5i/+iYjgnjFnIA4OHqwPGWBmFwDPlNCd5KQkJwGC+C2JuvigQHYBlXjO2ncjQTYBtTjJa/r3AiBBvgJa4rnmPZAmYEu8F7ICKOI9kAWgR1yFFEBtRZK7Dqsg75aFI8CdkX2OHoALm5mFxhtJDj6OAM/ArTfH3wFhu3MmvwLqdS0XnYBFVc4SFevnPlBctOgH5dUKcya/0uOa1hl4N/vTWJpOhIwAHiT9W0K+b0TIatrhgA9YJ6gZGkpWPAAAAABJRU5ErkJggg==" className='logoSide'/>
          </li>
          <li>Acerca de</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className='perfilContain'> 
      <h3 className='perfil'>Jose Sanchez</h3>
      <h3 className='speciality'>Psicologo</h3>
      <img src='https://media.v2.siweb.es/uploaded_thumb_medium/409d16e4bfdd9d56bbcdede012883dd9/7853533_carnet_h.jpg' className='imgSidebar'/>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAM9JREFUSEvdld0VgjAMhe/dRDeRUZhEnATdhE1kk+sJBzwtUqO19YG85KFNvvy0CVFZWNk//guQdAJwBmA6RwYAF5KmJ4kykHQHcMjxHNgMJJsUQBOVzCqdpBf7dQY7B0jqSHapHrkl8po7OxgBNCRNR1IKYE43IS5gueBlMp8b5BaWrDTAOC3J6xKQC/AiDzK06M3588eabSlA9FPDoFzA1oWVg55km/1MPcCnJQxHzf5GRYlxPZI8psa1LZr+h53wfuF4Tcw5z1os34CqAx6ZqJgZCvBLVgAAAABJRU5ErkJggg==" className='logout'/>
      <button className='exit'></button>
      </div>
    </div>
  );
}

