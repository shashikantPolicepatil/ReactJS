import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        console.log(this.props.values);
        this.props.nextStep();
    }
    render() {
        const {values,handleChange} = this.props;
        return (
            <div>
                <h1>Hello from user details.</h1>
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user Details"/>
                        <TextField 
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('fName')}
                        defaultValue={values.fName}/>
                        <br/>
                         <TextField 
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lName')}
                        defaultValue={values.lName}/>
                        <br/>
                         <TextField 
                        hintText="Enter your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}/>
                        <br/>
                        <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}/>
                </React.Fragment>
            </MuiThemeProvider>
            </div>
        );
    }
}
const styles = {
    button:{
        margin:15
    }
}
export default FormUserDetails;
