import React, { useState } from 'react';
import {Link} from 'react-router-dom'
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
          
          <Link to='/'>
            <li>
              Inicio <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvtldENwyAMRO82aTdpRukonaSjNJs0m7hyBMghNDmq5i/+iYjgnjFnIA4OHqwPGWBmFwDPlNCd5KQkJwGC+C2JuvigQHYBlXjO2ncjQTYBtTjJa/r3AiBBvgJa4rnmPZAmYEu8F7ICKOI9kAWgR1yFFEBtRZK7Dqsg75aFI8CdkX2OHoALm5mFxhtJDj6OAM/ArTfH3wFhu3MmvwLqdS0XnYBFVc4SFevnPlBctOgH5dUKcya/0uOa1hl4N/vTWJpOhIwAHiT9W0K+b0TIatrhgA9YJ6gZGkpWPAAAAABJRU5ErkJggg==" className='logoSide'/>
            </li>
          </Link>

          <li>
            Acerca de
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWRJREFUSEvFVYtNw0AMfW8TOgl0EtpJgEloJ4FOQpnE6EX2yZfPXYiIOCm6NrH97tnPPmLnxZ3jowtgZk8A9Dz6fgfwCeBbO0n9XlyLAGb2AODdg7ZiCPBIUvtkzQKY2SuAF7eW4zVO68BipAM8+z7YkJRftSYAo+Bvc04RwcFO6TAT+wrAHb48gGg385uAxOgDgJics98YQEYyvpA8j+mamekdyRbzO8lD+BZDMxNVFbUyyCAdgCyKwj4DRGGbeW/JKdWvxMgAOr1YKIeXLQ3oPaM0qz+OQzpToVRc0TwsabqVIsVJIilp/lMAB6mEkAFCQYvyXMEghFJU+KsirwCYCCUDlGbJOl4rU09PZKEIJQNkHW9ptFBhUVClopEK9He1XJM85VfVcK7lo1Ay7jZdbzjOAShVeULGBXPzi0bAslHNYlwvHuZ/LpzRvNdp9cSVqc9iNTDqjfTunbxlJmWf3QF+AO/G3RleaZstAAAAAElFTkSuQmCC" className='info'/>
          </li>

          <li>Servicios
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMRJREFUSEu9leERwjAIRvk2cRU30UnUSXQT3cRuQi93iRcjtBAS+zt9D/jIBTT5w2Q+hQTMfCKiA4CrVmi3IMPvGXzTJBHBO1VfVS5KIoIEf1aSB4BzOyqXII/lQkRHAAszF8lLgieZWdDMfKklSRYKuYEX1keyteq7HSjwxBRn7sogCt/MYARcFYyCi4KRcE3AwlaYApW26WeLmLkVdMMtHYTgrpvc+27sXrRecPnv/wIhZFcTAL6KtmzRWIGLZjg8PYMVNjpdGVsL2WEAAAAASUVORK5CYII=" className='services'/>
          </li>

          <li>Contacto
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPNJREFUSEvFlesNwjAQg+1N6CawCZsAkwCTwCZ0EyNXDSpNW/KgEIlfNP5y9uVCrLy4sj4igKQtgDOATQW8Jdl4/xTgBsCQqkWy054CqEq531wKOJE8SrJ9ewCHucOUADrxoaAkQ5xXtCKApE/WNCTbEcCVPFYDWHjuYN+yyJZN5lACsD1XAJfekryQEzLI6t6SkAPAlfi3eBlzLbKg2zTY43DDKHGbRrAcQNT/Y68kRWGnWnQnuUsxX5IrcfDdSgVEl2sO1k9hD8ppQPhj2E3hFCkVjC9dTgap+m/f/RWw+oPjnvZ8qXnVXt33+0e/KNGFTU/DzokZXwmtegAAAABJRU5ErkJggg==" className='contact'/> 
          </li>

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

