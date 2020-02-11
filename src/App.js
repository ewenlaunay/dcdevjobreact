import React from 'react';
import './App.scss';
import AddJob from "./components/AddJob";
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink, Route} from "react-router-dom";
import PageJobs from "./components/PageJobs";
import Accueil from "./components/Accueil";


 function App(){


     return (

        <main className="main-container container">
            <nav className="nav-container ">
                <ul className="col-12 row justify-content-around">
                    <li  className="col-3 list-group-item list-group-item-primary"><NavLink to="/">Accueil</NavLink></li>
                    <li className="col-3 list-group-item list-group-item-primary"><NavLink to="/offresdemplois">Offres d'emplois</NavLink></li>
                    <li className="col-3 list-group-item list-group-item-primary"><NavLink to="/ajouterunemploi">Ajouter un emploi</NavLink></li>
                </ul>
            </nav>
            <div class="page-container">
                <Route path="/" component={Accueil}/>
                <Route path="/offresdemplois" component={PageJobs}/>
                <Route path="/ajouterunemploi" component={AddJob}/>
            </div>
        </main>
    );

}




export default App;
