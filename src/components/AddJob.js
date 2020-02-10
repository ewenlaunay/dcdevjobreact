import React, {Component} from 'react';

class AddJob extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">Titre:
                        <input type="text"/>
                    </label>
                    <br/>
                    <label htmlFor="">Entreprise:
                        <input type="text"/>
                    </label>
                    <br/>
                    <label htmlFor="">Compétences:
                        <input type="text"/>
                    </label>
                    <br/>
                    <label htmlFor="">URL:
                        <input type="text"/>
                    </label>
                    <br/>
                    <label htmlFor="">Description:
                        <textarea></textarea>
                    </label>
                    <br/>
                    <input type="submit"/>
                </form>


            </div>
        );
    }
}

export default AddJob;