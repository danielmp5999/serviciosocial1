import React, { Component } from 'react';

class Testimonials extends Component {
     render() {
    const htm = '<iframe width="640px" height="700px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=x8fjOlHq3kaVQBL0EQ6sm5w1QilvTiVGhypVsm6Zn25UNUJSMllZWkhTUDhEVEZDQVRHOVpWOTFTVi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:1000vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>';
    /* if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    } */


    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Huella de Carbono</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {/* {testimonials} */}
                  </ul>
                  {/* dangerouslySetInnerHTML={{__html: htm}} */}
                  <div id="prueba" dangerouslySetInnerHTML={{__html: htm}}/>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
