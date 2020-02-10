import React from 'react';
import './App.scss';
import AddJob from "./components/AddJob";
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink, Route} from "react-router-dom";
import JobList from "./components/JobList";
import JobItem from "./components/JobItem";

 class App extends React.Component{



     constructor(props) {
         super(props);
         this.state = {
             jobs: [],
             loading: true
         };
     }

     componentDidMount() {
         fetch('https://127.0.0.1:8000/api/jobs')
             .then(response => response.json())
             .then(data => this.setState({jobs: data["hydra:member"], loading: false}))
     }

     render() {

     return (

        <main className="main-container">
            <nav>
                <ul>
                    <li><NavLink to="/">Acceuil</NavLink></li>
                    <li><NavLink to="/offresdemplois">Offres d'emplois</NavLink></li>
                    <li><NavLink to="/ajouterunemploi">Ajouter un emploi</NavLink></li>
                </ul>
            </nav>
            <div class="page-container">
                <Route path="/offresdemplois" component={JobList}/>
                <Route path="/ajouterunemploi" component={AddJob}/>
            </div>
        </main>
    );
    }
}

export default App;
