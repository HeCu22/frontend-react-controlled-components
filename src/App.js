import React from 'react';
import './App.css';

function App() {
    // const [inputValue, setInputValue] = React.useState("");
    // const [numberValue, setNumberValue] = React.useState(0);
    // const [remarkValue, setRemarkValue] = React.useState("");
    const [subscrChecked, toggleSubscrChecked] = React.useState(false);
    const [state, setState] = React.useState({
        inputValue: "",
        remarkValue: "",
        numberValue: 0,
        subscrChecked: false

    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Het formulier is verstuurd`);
        console.log(`Naam:`, state.inputValue);
        toggleSubscrChecked(!state.subscrChecked);
    }

    function handleChange(evt) {
        const value =
            evt.target.type === "checkbox" ? evt.target.checked :  evt.target.value;
        setState({...state, [evt.target.name]: value});
        console.log('new value', evt.target.name, evt.target.value, evt.target.checked);
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
                                       value={state.name}
                                       onChange={handleChange}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label htmlFor="age-field">
                                <span className="span"> Leeftijd: </span>
                                <input type="number" id="age-field"
                                       name="leeftijd"
                                       value={state.name}
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
                                    value={state.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <br/>
                            <label htmlFor="subscribe-field">
                                <input type="checkbox"
                                       id="subscribe-field"
                                       name="inschrijven"
                                       checked={state.name}
                                       onChange={handleChange}

                                />
                                <span> Ik schrijf me in voor de nieuwsbrief </span>

                            </label>
                            <br/>
                            <br/>
                            <button type="submit"
                                    disabled={state.subscrChecked === false}>
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
