import React from 'react';
import "./style.css";

export const Table = () => (
    <table className="table">
        <caption className="table__caption">*Kurs walut według NBP na dzień 15.06.2020 godz.17:30</caption>
        <tbody>
            <tr className="table__row">
                <th className="table__cell table__cell--header">Lp.</th>
                <th className="table__cell table__cell--header">Nazwa waluty</th>
                <th className="table__cell table__cell--header">Kupno</th>
                <th className="table__cell table__cell--header">Sprzedaż</th>
            </tr>
            <tr className="table__row">
                <th className="table__cell table__cell--header">Lp. 1</th>
                <td className="table__cell">Euro</td>
                <td className="table__cell">4,3990</td>
                <td className="table__cell">4,4878</td>
            </tr>
            <tr className="table__row">
                <th className="table__cell table__cell--header">Lp. 2</th>
                <td className="table__cell">Dolar</td>
                <td className="table__cell">3,8922</td>
                <td className="table__cell">3,9708</td>
            </tr>
            <tr className="table__row">
                <th className="table__cell table__cell--header">Lp. 3</th>
                <td className="table__cell">Funt szterling</td>
                <td className="table__cell">4,8997</td>
                <td className="table__cell">4,9987</td>
            </tr>
        </tbody>
    </table>
);