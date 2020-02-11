import React, {Component} from 'react';
import './AddJob.scss';

class AddJob extends Component {
    render() {
        return (

            <div >
                <h1>Ajouter un emploi</h1>
                <form action="" className="form-container">
                    <label htmlFor="">Titre:
                        <input type="text" class="form-control"/>
                    </label>
                    <br/>
                    <label htmlFor="">Entreprise:
                        <input type="text" class="form-control"/>
                    </label>
                    <br/>
                    <label htmlFor="">Compétences:
                        <input type="text" class="form-control"/>
                    </label>
                    <br/>
                    <label htmlFor="">URL:
                        <input type="text" class="form-control"/>
                    </label>
                    <br/>
                    <label htmlFor="">Description:
                        <textarea class="form-control"></textarea>
                    </label>
                    <br/>
                    <button type="submit" class="btn btn-primary">Ajouter</button>
                </form>


            </div>
        );
    }
}

export default AddJob;