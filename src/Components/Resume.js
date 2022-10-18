import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var metodo= "images/"+this.props.data.description32image1;
      var compromiso = this.props.data.compromiso.map(function(compromiso){
        return <div key={compromiso.title}><h3>{compromiso.title}</h3>
        <p className="info">{compromiso.degree} <span>&bull;</span><em className="date">{compromiso.graduated}</em></p>
        <p>{compromiso.description}</p></div>
      })
      var metodologia = this.props.data.metodologia.map(function(metodologia){
        return <div key={metodologia.title1}><h3>{metodologia.title1}</h3>
            <p className="info">{metodologia.title}<span>&bull;</span> <em className="date">{metodologia.years}</em></p>
            <p>{metodologia.description}</p>
            <h1>{metodologia.titledescription2}</h1>
            <p>{metodologia.description2}</p>
            <h1>{metodologia.titledescription3}</h1>
            <p>{metodologia.description3}</p>
            <ul>
              <li type="circle"><span>{metodologia.description3lista1}</span></li>
              <li type="circle"><span>{metodologia.description3lista2}</span></li>
              <li type="circle"><span>{metodologia.description3lista3}</span></li>
              <li type="circle"><span>{metodologia.description3lista4}</span></li>
            </ul>
            <p>{metodologia.description31}</p>
            <ul>
              <li type="square"><span>{metodologia.description31lista1}</span></li>
              <li type="square"><span>{metodologia.description31lista2}</span></li>
              <li type="square"><span>{metodologia.description31lista3}</span></li>
              <li type="square"><span>{metodologia.description31lista4}</span></li>
            </ul>
            <p>{metodologia.description32}</p>
            <p><img className="item-wrap"  src={metodo} alt="Metodologia a seguir" /></p>

        </div>
      })
      var actividades = this.props.data.actividades.map(function(actividades){
        var className = 'bar-expand '+actividades.name.toLowerCase();
        return <li key={actividades.name}><span style={{width:actividades.level}}className={className}></span><em>{actividades.name}</em></li>
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
                 {compromiso}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Metodología</span></h1>
         </div>

         <div className="nine columns main-col">
          {metodologia}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Actividades</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="actividades">
					  {actividades}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
