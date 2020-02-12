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

        fetch('https://127.0.0.1:8000/api/jobs', {
            method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                "title": this.state.titre,
                "company": this.state.entreprise,
                "skills": this.state.competences,
                "url": this.state.url,
                "description": this.state.description,
            })
        })

    };


    render() {

   // const skills = this.props.skills.map(skill =>
   //      <option value={"/api/skills/" + skill.id} key={skill.id}>{skill.name}</option>);
        return (


            <div>
                <h1>Ajouter un emploi</h1>
                <form  className="form-container" method="POST" onSubmit={this.handleSubmit} action="Accueil.js">
                    <label htmlFor="">Titre:
                        <input type="text" className="form-control" id="titre" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label htmlFor="">Entreprise:
                        <input type="text" className="form-control" id="entreprise" onChange={this.handleChange}/>
                    </label>
                    <br/>
                        <label htmlFor="exampleFormControlSelect2">Compétences:</label>
                        <select name="" id="">
                            {/*{skills}*/}
                        </select>
                    <br/>
                    <label htmlFor="">URL:
                        <input type="text" className="form-control" id="url" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>Description:
                        <textarea className="form-control" id="description" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>


            </div>

        );

    }
}

export default AddJob;