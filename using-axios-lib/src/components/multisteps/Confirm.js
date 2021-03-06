import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
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
        const {values:{fName,lName,email,occupation,city,bio}} = this.props;
        return (
            <div>
                <h1>Hello from user details.</h1>
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data"/>
                    <table>
                    <List>
                        <tr>
                            <th>
                        <ListItem
                        primaryText="Fist Name"                       
                        />
                            </th>
                            <th>
                            <ListItem
                        primaryText="Last Name"                       
                        />      
                            </th>
                            <th>
                        <ListItem
                        primaryText="Email"                       
                        />
                            </th>
                            <th>
                            <ListItem
                        primaryText="Occupation"                       
                        />      
                            </th>
                            <th>
                            <ListItem
                        primaryText="City"                       
                        />      
                            </th>
                            <th>
                            <ListItem
                        primaryText="Bio"                       
                        />      
                            </th>
                        </tr>
                        <tr>
                            <td>
       <ListItem secondaryText={fName} />
       </td>
       <td>
       <ListItem secondaryText={lName} />
       </td>
       <td>
       <ListItem secondaryText={email} />
       </td>
       <td>
       <ListItem secondaryText={occupation} />
       </td>
       <td>
       <ListItem secondaryText={city} />
       </td>
       <td>
       <ListItem secondaryText={bio} />
       </td>
                            </tr>
                    </List>
                        </table>
                        
                    <RaisedButton
                       label="Back"
                       primary={false}
                       style={styles.button}
                       onClick={this.back}/>
                    <RaisedButton
                       label="Confirm and Continue"
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
export default Confirm
