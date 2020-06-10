import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imgUrl,box}) =>{
	return(	
		<div className='center ma'>
		<div className='absolute mt2'>

		  <img id="image" alt="" src={imgUrl} width='500px' height='auto'/>
		  <div className="displayBox" style={{top:box.top,left:box.left,right:box.right,bottom:box.bottom}}></div>
		</div>
		</div>
	);
}

export default FaceRecognition; 