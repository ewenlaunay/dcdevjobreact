import React, {Component} from 'react';
import './AddJob.scss';


class AddJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titre: null,
            entreprise: null,
            competences: [],
            url: null,
            description: null

        }
    }






    handleChange = e => {
        if (e.target.id === "competences") {
            this.state.competences = [].filter.call(e.target.options, o => o.selected).map(o => o.value)
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
        console.log(this.state)
    };


    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.competences);

        let s = [];
        fetch('https://127.0.0.1:8000/api/jobs', {method:"POST", headers: {'Content-Type':'application/json'},
            "title": this.state.titre,
            "company": this.state.entreprise,
            "skills": this.state.competences,
            "url": this.state.url,
            "description": this.state.description,
        })
    };



    render() {

        return (


            <div>
                <h1>Ajouter un emploi</h1>
                <form action="" className="form-container">
                    <label htmlFor="">Titre:
                        <input type="text" class="form-control" id="titre" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label htmlFor="">Entreprise:
                        <input type="text" class="form-control" id="entreprise" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">Compétences:</label>

                    </div>
                    <br/>
                    <label htmlFor="">URL:
                        <input type="text" class="form-control" id="url" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>Description:
                        <textarea class="form-control" id="description" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button type="submit" class="btn btn-primary" onSubmit={this.handleSubmit}>Ajouter</button>
                </form>


            </div>
        );
    }
}

export default AddJob;