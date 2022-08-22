import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
return (
  <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experienceContainer">
      <div className="experienceFrontend">
        <h3>Frontend Development</h3>
        <div className="experienceContent">

          <article className="experienceDetails">
             <BsFillPatchCheckFill className="experienceDetailsIcon"/>
             <div>
               <h4>HTML</h4>
               <small className='text-light'>Experience</small>
             </div>
          </article>

          <article className="experienceDetails">
              <BsFillPatchCheckFill className="experienceDetailsIcon"/>
              <div>
               <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
             </div>
          </article>

          <article className="experienceDetails">
             <BsFillPatchCheckFill className="experienceDetailsIcon"/> 
             <div>
               <h4>JavaScript</h4>
               <small className='text-light'>Intermediate</small>
             </div>
          </article>

          <article className="experienceDetails">
            <BsFillPatchCheckFill className="experienceDetailsIcon"/>  
            <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Intermediate</small>
             </div>
          </article> 
    
          <article className="experienceDetails"> 
             <BsFillPatchCheckFill className="experienceDetailsIcon"/>
             <div>
               <h4>Angular</h4>
               <small className='text-light'>Beginner</small>
             </div>
          </article>

          <article className="experienceDetails">
              <BsFillPatchCheckFill className="experienceDetailsIcon"/>
              <div>
               <h4>React</h4>
               <small className='text-light'>Beginner</small>
             </div>      
          </article>
        </div>
      </div>

    <div className="experienceBackend">
        <h3>Backend Development</h3>
        <div className="experienceContent">

         <article className="experienceDetails">
            <BsFillPatchCheckFill className="experienceDetailsIcon"/>
            <div>
               <h4>Node JS</h4>
               <small className='text-light'>Intermediate</small>
             </div>
         </article>

         <article className="experienceDetails">
             <BsFillPatchCheckFill className="experienceDetailsIcon"/>
             <div>
               <h4>Mongo DB</h4>
               <small className='text-light'>Beginner</small>
             </div>
         </article>
  
         <article className="experienceDetails"> 
             <BsFillPatchCheckFill className="experienceDetailsIcon"/>
             <div>
               <h4>PHP</h4>
               <small className='text-light'>Beginner</small>
             </div>
         </article>

         <article className="experienceDetails"> 
             <BsFillPatchCheckFill className="experienceDetailsIcon"/>
             <div>
               <h4>MySQL</h4>
               <small className='text-light'>Beginner</small>
             </div>
         </article>

         <article className="experienceDetails"> 
             <BsFillPatchCheckFill className="experienceDetailsIcon"/>
             <div>
               <h4>Python</h4>
               <small className='text-light'>Beginner</small>
             </div>
         </article>
        </div>
      </div>
      </div>
  </section>
)
}

export default experience