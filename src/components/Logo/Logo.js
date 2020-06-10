import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css'
const Logo = () =>{
	return(
		<div>
			<Tilt className="Tilt ma4 br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"><img alt="Logo" style={{paddingTop:'5px'}} src={brain}/> </div>
			</Tilt>
		</div>
	);
}

export default Logo; 