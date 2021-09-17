import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "../schema/PizzaFormSchema";
import styled from "styled-components";

const ErrorMessage = styled.p`
    color: red;
`;

const initialFormData = {
    name: '',
    size: '',
    toppingOne: false,
    toppingTwo: false,
    toppingThree: false,
    toppingFour: false,
    special: ''
};
const initialFormErrors = {
    name: '',
    size: ''
}

function PizzaForm(props){
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);

    const validate = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const onSubmit = (event)=> {
        event.preventDefault();
        axios.post('https://reqres.in/api/orders', {...formData, name:formData.name.trim(), special:formData.special.trim()})
            .then(() => setFormData(initialFormData))
            .catch(err => console.error(err));
    };

    const onChange = (event) => {
        const { name, type, value, checked } = event.target;
        const data = type==='checkbox' ? checked : value;
        setFormData({...formData, [name]:data});
        validate(name, value);
    };

    useEffect(()=>{
        schema.isValid(formData).then(valid => setDisabled(!valid));
    }, [formData]);

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <label>Name: <input type='text' id='name-input' name='name' onChange={onChange} value={formData.name}/></label>
            {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
            <br/>
            <label>Pizza Size: <select id='size-dropdown' name='size' onChange={onChange} value={formData.size}>
                    <option value=''>--Select A Size--</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
            </label>
            {formErrors.size && <ErrorMessage>{formErrors.size}</ErrorMessage>}
            <br/>
            <div id='toppings-checklist'>
                <h3>Toppings:</h3>
                <label>Extra Cheese:<input type='checkbox' name='toppingOne' onChange={onChange} checked={formData.toppingOne}/></label>
                <br/>
                <label>Pepperoni:<input type='checkbox' name='toppingTwo' onChange={onChange} checked={formData.toppingTwo}/></label>
                <br/>
                <label>Pineapple:<input type='checkbox' name='toppingThree' onChange={onChange} checked={formData.toppingThree}/></label>
                <br/>
                <label>Ham:<input type='checkbox' name='toppingFour' onChange={onChange} checked={formData.toppingFour}/></label>
            </div>
            <br/>
                <label>Special Instructions:<br/><input type='text' id='special-text' name='special' onChange={onChange} value={formData.special}/></label>
            <br/>
            <br/>
            <input type='submit' disabled={disabled} id='order-button'/>
        </form>
    );
};

export default PizzaForm;