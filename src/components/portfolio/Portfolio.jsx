import React, { useEffect } from 'react';
import './portfolio.css';
import useFetch from "../petition/useFetch";

import IMG1 from '../../assets/portfolio1.png';


const Portfolio = () => {
  const [state, fetchProyectos] = useFetch();

    useEffect(
        function() {
            fetchProyectos({
                //url: "http://127.0.0.1:8000/portfolio/api",
                url: "http://localhost/CRUD_ENT_API_REACT/CRUD_API/public/index.php/api/proyectos",
                //url: "http://localhost/CRUD_ENT_API_REACT/back_portafolio/public/index.php/api/",
                method: "GET"
            });
        },
        [fetchProyectos]
    );

    if (state.isLoading){
      return <div>Cargando proyectos ...</div>;
    }

    if (state.isFailed){
        return <div>Fallo recuperando los proyectos</div>;
    }

    if  (state.isSuccess){

      return (
        <section id='portfolio'>
          <h5>My Portfolio</h5>
          <h2>Projects</h2>

          <div className='container portfolio__container'>
            {
              state.data.map(({id, nombre, repositorio}) => {
                return (
                  <article key={id} className='portfolio__item'>
                    <div className='portfolio__item-image'>
                      <img src={IMG1} alt={nombre} />
                    </div>
                    <h3>{nombre}</h3>
                    <div className='portfolio__item-cta'>
                      <a className='btn' target="_blank" rel="noopener noreferrer" href={repositorio} >GitHub</a>
                      <a href='/#' className='btn btn-primary' target="_blank" rel="noopener noreferrer">More Info</a>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </section>
      )
    }
  }

  export default Portfolio