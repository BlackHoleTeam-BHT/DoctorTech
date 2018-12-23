import React, { Component } from 'react';

class CreatePatient extends Component{



  render(){
    return(
      <div>
        <div className="container">
        

        <div class="row">
        <form class="col s12">
        <div class="input-field col s6">
           <input  id="first_name" type="text" class="validate"/>
           <label for="first_name">First Name</label>
        </div>   
        <div class="input-field col s6">
           <input id="last_name" type="text" class="validate"/>
            <label for="last_name">Last Name</label>
        

        </div>
        </form>
          </div>




        </div>
      </div>
    )
  }
}


export default CreatePatient