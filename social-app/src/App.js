import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
//mui
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//pages
//import AuthRoute from './utils/AuthRoute';
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
//components
import Navbar from './components/Navbar';

const theme = createMuiTheme({
palate  :{
  primary:{
    light: '#757ce8',
      main: '#3f51b5',
      dark: '#002884',
      contrastText: '#fff',
  },secondary:{
    light: '#ff7961',
    main: '#f50057',
    dark: '#ba000d',
    contrastText: '#000',
  }
},
form:{
  textAlign:'center'
},
image:{
  margin:'20px auto 20px auto'
},
pageTittle:{
  margin:'10px auto 20px auto'
},
textField:{
  margin:'10px auto 20px auto'
},
button:{
  marginTop:20,
  position:'relative'
},
errorWarning:{
  color:'red',
  fontSize:'0.8em'
},
progress:{
  position:'absolute'
}
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/"  component={home}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
          </Switch>
          </div>
        </Router>
      </div>  
      </MuiThemeProvider>
    );
  }
}

export default App;
