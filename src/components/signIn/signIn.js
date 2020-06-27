import React from 'react';

class SignIn extends React.Component {
	
	constructor(){
		super();
		this.state={
			signInEmail:"",
			signInPassword:""
		}
	}

	onEmailChange = (event) =>{
		this.setState( {signInEmail:event.target.value} )
	}

	onPasswordChange = (event) =>{
		this.setState( {signInPassword:event.target.value} )
	}

	onSubmit = () =>{
		fetch('http://localhost:3030/signin',{
			method:'POST',
			headers: {"Content-type": "application/json; charset=UTF-8"},
			body: JSON.stringify({
				email:this.state.signInEmail,
				password:this.state.signInPassword
			})
		})
					this.props.onRouteChange('home');
	}

	render(){
		const { onRouteChange } = this.props;
		return(	
		<article className="br4 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
		<main className="pa4 black-80">
	  		<form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input style={{'borderColor':'#000'}} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" name="email-address" onChange={this.onEmailChange} id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input style={{'borderColor':'#000'}} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			         type="password" name="password" onChange={this.onPasswordChange} id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input style={{'borderColor':'#000'}} onClick={this.onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3">
			      <a onClick={()=>onRouteChange('register')} className="f6 link dim black db" style={{cursor:'pointer'}}>Register</a>
			    </div>
	 		 </form>
		</main>
		</article>
	);
	}
	
}

export default SignIn; 

