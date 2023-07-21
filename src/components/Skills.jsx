import React, { useEffect, useState } from 'react'
import "./style/skills.css"



const Skills = () => {

  const [skillsIsIsVisible, setSkillsIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Skills Visible');
          setSkillsIsVisible(true)
        } else {
          console.log('Skills Not visible');
          setSkillsIsVisible(false)
        }
      });
    },
      {
        rootMargin: '0px',
        threshold: 0
      }



    );

    const targetElement = document.getElementById('skills');

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <section id='skills'>

      <div className={`skills ${skillsIsIsVisible && "slideInRigth"}`}>

        <div className='img_container'>
          <img className='img' src="/Technologies/Javascript.png" alt="" />
          <p className='img_info'>Javascript</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/Html.png" alt="" />
          <p className='img_info'>Html</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/Css.png" alt="" />
          <p className='img_info'>Css</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/React.png" alt="" />
          <p className='img_info'>React</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/React Router.png" alt="" />
          <p className='img_info'>React Router</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/Redux.png" alt="" />
          <p className='img_info'>Redux</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/Git.png" alt="" />
          <p className='img_info'>Git</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/Git Hub.png" alt="" />
          <p className='img_info'>Git Hub</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/Postgre SQL.png" alt="" />
          <p className='img_info'>PostgreSQL</p>
        </div>

        <div className='img_container'>
          <img className='img' src="/Technologies/Node Js.png" alt="" />
          <p className='img_info'>Node.js</p>
        </div>
      </div>







    </section>
  )
}

export default Skills