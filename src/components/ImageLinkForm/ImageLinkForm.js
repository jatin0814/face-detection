import React from 'react';


const ImageLinkForm = ({onInputChange,onSubmit}) =>{
	return(
		<div className='center'>
			<div className='center pa4 ma4 shadow-2'>
				<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
				<button className='f4 grow link br2 shadow-2 w-30 ph3 pv2 dib white bg-light-purple' style={{outline:'none'}} onClick={onSubmit}>Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm; 