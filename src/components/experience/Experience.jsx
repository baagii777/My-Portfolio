import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import { frontend_skills, backend_skills } from './skills';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontend_skills.map((skill)=>{
              return (
                <article key={skill.id} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>{skill.skillName}</h4>
                    <small className='text-light'>{skill.level}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <div className="experience__backend">
            <h3>Backend Development</h3>
          <div className="experience__content">
            {backend_skills.map((skill)=>{
              return (
                <article key={skill.id} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>{skill.skillName}</h4>
                    <small className='text-light'>{skill.level}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience