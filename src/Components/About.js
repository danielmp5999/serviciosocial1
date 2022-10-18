import React, { Component } from 'react';

class About extends Component {
  render() {
/*    variables de texto almacenados en resumeData.json*/    
   if(this.props.data){
      var bio = this.props.data.bio;
      var emision = this.props.data.emision;
      var sostenpic= "images/"+this.props.data.image2;
      var mpa= "images/"+this.props.data.image3;
      var gases= "images/"+this.props.data.image4; 
      var consideracion1 = this.props.data.importancia1;
      var consideracion2 = this.props.data.importancia2;
      var consideracion3 = this.props.data.importancia3;
    }
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="item-wrap"  src={sostenpic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Sostenibilidad</h2>

            <p>{bio}</p> 
            <div className="row">
               <div className="columns contact-details">
                  <h2>Emisiones de CO2 en el mundo</h2>
                  <p className="address">
						   <span>{emision}</span><br />
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
                     <img className="item-wrap"  src={mpa} alt="Tim Baker Profile Pic" />
                  </p>
               </div>

              

            </div>

            <div className="columns contact-details">
                  <h2>Importancia de medir los GEI</h2>
                  <p className="address">
                  <ul>
                     <li type="square"><span>{consideracion1}</span></li>
                     <li type="square"><span>{consideracion2}</span></li>
                     <li type="square"><span>{consideracion3}</span></li>
                  </ul>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
                     <img className="item-wrap"  src={gases} alt="Tim Baker Profile Pic" />
                  </p>
               </div>



         </div>
      </div>

   </section>
    );
  }
}

export default About;
