import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Form(){
          

    return(
      <div className="conatainer bg-success w-50 m-auto">
        <form action="" method="get" className="text-center mt-5">
            <label htmlFor="firstName">First Nam: </label>
            <input type="text" name="firstName" id="fName"/><br/><br/>
            <label htmlFor="lasttName">Last Name: </label>
            <input type="text" name="lastName" id="lName"/><br/><br/>
            <label htmlFor="mail">Email: </label>
            <input type="email" name="mail" id="email"/><br/><br/>
            <label htmlFor="comments">Comments: </label>
            <textarea name="comments" />

        </form>
        </div>
       
    )
}
export default Form