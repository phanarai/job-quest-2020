import { responsiveFontSizes } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import JokeService from '../Services/Joke.service';

const URL = 'http://api.icndb.com/jokes/'

export default function Joke1() {
    const [jokes, setJokes] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setJokes(response.data.value);
    }

    const editData = async (number, firstName, lastName) => {
        const response = await axios.get(URL + 'random/' + number + '/?firstName=' + firstName + '&lastName=' + lastName)
            .then(response => {
                // console.log(response.data.value);
                setJokes(response.data.value);
            })
            .catch(err => {
                console.log('Error : ' + err);
            })

    }
    function handleChangeFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleChangeLastName(e) {
        setLastName(e.target.value)
    }

    function handleChangeNumber(e) {

        setNumber(e.target.value)
    }

    const handleClick = () => {
        editData(number, firstName, lastName)
    }

   
    const renderHeader = () => {
        let headerElement = ['id', 'jokes', 'categories']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return jokes && jokes.map(({ id, joke, categories }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td dangerouslySetInnerHTML={{ __html: joke }} />
                    <td>{categories}</td>
                </tr>
            )
        })
    }

    return (
        <div class="container">
            <h1 id='title'>Joke Table</h1>
            <form id='form'>
                <label>
                    FirstName:
                    <input type="text" name="FirstName" value={firstName} onChange={handleChangeFirstName} />
                    lastName:
                    <input type="text" name="lastName" value={lastName} onChange={handleChangeLastName} />
                    number of result jokes:
                    <input type='number' pattern="[0-9]*" inputmode='numeric' name="number" value={number} onChange={handleChangeNumber} />
                </label>
                <input type="button" value="Submit" onClick={handleClick} />
            </form>
            <table id='joke'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}
