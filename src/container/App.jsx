import React,{Component,Fragment} from 'react';
import api from '../services/api';
import decode from 'jwt-decode';
import {Provider} from 'react-redux';
import {store} from '../store';
import {setCurrentUser,addError,setToken} from '../store/actions';
import Auth from '../components/Auth';
import ErrorMessage from '../components/ErrorMessage'
import {BrowserRouter as Router} from 'react-router-dom';
import RouteViews from './RouteViews';
import NavBar from './NavBar';
if(localStorage.jwtToken){
    setToken(localStorage.jwtToken);
    try {
        console.log("Hello");
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    } catch (err) {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}
const App = () =>(
    <Provider store={store}>
        <Router>
            <Fragment>
                <NavBar />
                <RouteViews />
            </Fragment>
        </Router>
    </Provider>

);




// class App extends Component{
//     async componentDidMount(){
//         const result = await api.call('post','auth/login',{
//             username:'username',
//             password:'password'
//         });
//         console.log(result);  
//     }
//     render(){
//         return <div>App works</div>;
//     }
// }
export default App;