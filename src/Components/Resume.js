import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var metodo= "images/"+this.props.data.description32image1;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
            <h1>{work.titledescription2}</h1>
            <p>{work.description2}</p>
            <h1>{work.titledescription3}</h1>
            <p>{work.description3}</p>
            <ul>
              <li type="circle"><span>{work.description3lista1}</span></li>
              <li type="circle"><span>{work.description3lista2}</span></li>
              <li type="circle"><span>{work.description3lista3}</span></li>
              <li type="circle"><span>{work.description3lista4}</span></li>
            </ul>
            <p>{work.description31}</p>
            <ul>
              <li type="square"><span>{work.description31lista1}</span></li>
              <li type="square"><span>{work.description31lista2}</span></li>
              <li type="square"><span>{work.description31lista3}</span></li>
              <li type="square"><span>{work.description31lista4}</span></li>
            </ul>
            <p>{work.description32}</p>
            <p><img className="item-wrap"  src={metodo} alt="Metodologia a seguir" /></p>

        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col"> 
            <h1><span>Compromiso social</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Metodología</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
