import React, {useState} from 'react';
import './App.css';

function App() {
    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden

    const [state, setState] = useState({
        naam: "",
        leeftijd: "",
        opmerkingen: "",
        inschrijven: false,

    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Het formulier is verstuurd`);
        console.log(`state:`, state);
        setState(!state.inschrijven);

    }

    // handleChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleChange(evt) {
        const value =
            evt.target.type === "checkbox" ? evt.target.checked :  evt.target.value;

        setState({...state, [evt.target.name]: value});
        console.log('new value', value, evt.target.name, evt.target.value, evt.target.checked);

    }

    return (
        <>
            <main>
                <h1>ORDER FORM</h1>
            </main>
            <footer>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Gegevens</legend>
                            <label htmlFor="name-field">
                                <span className="span"> Naam : </span>
                                <input type="text" id="name-field"
                                       name="naam"
                                       value={state.naam}
                                       onChange={handleChange}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label htmlFor="age-field">
                                <span className="span"> Leeftijd: </span>
                                <input type="number" id="age-field"
                                       name="leeftijd"
                                       value={state.leeftijd}
                                       onChange={handleChange}
                                />

                            </label>
                        </fieldset>
                        <br/>
                        <fieldset>
                            <legend>Jouw review</legend>
                            <label htmlFor="remark-field">
                                <span className="span"> Opmerkingen: </span>
                                <br/>
                                <textarea
                                    id="remark-field"
                                    name="opmerkingen"
                                    placeholder="Wat vond je van het recept?"
                                    value={state.opmerkingen}
                                    onChange={handleChange}
                                />
                            </label>
                            <br/>
                            <label htmlFor="subscribe-field">
                                <input type="checkbox"
                                       id="subscribe-field"
                                       name="inschrijven"
                                       checked={state.inschrijven}
                                       onChange={handleChange}

                                />
                                <span> Ik schrijf me in voor de nieuwsbrief </span>

                            </label>
                            <br/>
                            <br/>
                            <button type="submit"
                                    disabled={state.inschrijven === false ? true : false }>
                                Verstuur
                            </button>
                        </fieldset>
                    </form>
                </div>
            </footer>
        </>
    );
}

export default App;
