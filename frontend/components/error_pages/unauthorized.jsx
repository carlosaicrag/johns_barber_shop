import React from 'react';

function Unauthorized(){
  return(
    <div className="unauthorized">
      <h1 className="warning_text">
        This page is not meant for your eyes! 
            </h1>
      <div>
        <img className="gif" src="./no_hair.gif" alt="" />
      </div>

    </div>
  )
};

export default Unauthorized;