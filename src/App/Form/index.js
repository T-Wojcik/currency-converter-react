import React, { useState } from 'react';
import { Result } from "./Result";
import { currencies } from "../currencies";
import "./style.css";
import Clock from "./Clock"

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };


    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Wymiana</legend>
                <Clock />
                <p className="form__paragraph">
                    <label className="form__label">
                        <span className="form__labelText ">Kwota w zł* </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            min="1"
                            className="form__field"
                            type="number"
                            step="any"
                            required
                        />
                    </label>
                </p>

                <p className="form__paragraph">
                    <label className="form__label">
                        <span className="form__labelText">Wymień na: </span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>

                <p className="form__paragraph">
                    <button
                        className="form__button"
                    >Przelicz
                </button>
                </p>
                <Result result={result} />
            </fieldset>
        </form>
    );
};

export default Form;