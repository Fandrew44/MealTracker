import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppNav from './AppNav';
import '../styles/Meals.css';
import DatePicker from 'react-date-picker';
import { Container, Form, FormGroup } from 'reactstrap';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function Meals() {

    const history = useHistory();

    const [date, setDate] = useState(new Date());


    function cancelMeal() {
        history.push('/categories');
    }

    function handleChange() {

    }

    return(
        <div className="meal-div">
            <AppNav navName="Meals"/>
            <Container className="meal-container">
                <Form>
                    <FormGroup>
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for="category">Category</label>
                        <input type="text" name="category" id="category" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for="mealDate">Date</label>
                        <DatePicker selected={date} onChanage={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for="location">Location</label>
                        <input type="text" name="location" id="location" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <button className="chunky-button save-button" type="submit">Save</button>{' '}
                        <button className="chunky-button cancel-button" onClick={() => cancelMeal()}>Cancel</button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

export default Meals;