import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonDetails extends Component {
    continue = e =>{
        e.preventDefault();
        console.log(this.props.values);
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        console.log(this.props.values);
        this.props.prevStep();
    }
    render() {
        const {values,handleChange} = this.props;
        return (
            <div>
                <h1>Hello from user details.</h1>
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details"/>
                        <TextField 
                        hintText="Enter your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}/>
                        <br/>
                         <TextField 
                        hintText="Enter your City Name"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}/>
                        <br/>
                        <TextField 
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}/>
                        <br/>
                        <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}/>
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
export default FormPersonDetails;
