import React from "react";


class  SignIn extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword:''
    }
  }
  onEmailChange=(event)=>{
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () =>{
    fetch('https://young-castle-77342.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email:this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user =>{
        if(user.id){ // does the user exist? Did we receive a user with a property of id?
          this.props.loadUser(user);   
                 this.props.onRouteChange('home')
        }
      })
  }
  render (){
    const { onRouteChange} = this.props
    return (
    <div>


      <article className="hide-child relative br3 ba b--black-20 shadow-5 mw6 center">

        <main className="pa2 black-80">
          <div className="measure ">
            <fieldset className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" >Email</label>
                <input 
                 className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                 type="email" name="email-address" placeholder=" Enter Email-Address"
                 onChange={this.onEmailChange}/>
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" >Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" placeholder="Enter Password" name="password" autoComplete='tel'
                onChange={this.onPasswordChange}/>
              </div>
            </fieldset>

            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                type="submit"
                value="Log in" />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('Register')}
                href="#0" className="f6 link dim black db pointer" > Register</p>
            </div>
          </div>
        </main>
      </article>

    </div>
  );
}
}
export default SignIn;