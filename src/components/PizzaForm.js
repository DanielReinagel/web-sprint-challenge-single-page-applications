function PizzaForm(props){
    const onSubmit = (event)=> event.preventDefault();

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <label>Name: <input type='text' id='name-input' name='name'/></label>
            <br/>
            <label>Pizza Size:
                <select id='size-dropdown' name='size'>
                    <option value=''>--Select A Size--</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
            </label>
            <br/>
            <div id='toppings-checklist'>
                <h3>Toppings:</h3>
                <label>Topping 1:<input type='checkbox'/></label>
                <br/>
                <label>Topping 2:<input type='checkbox'/></label>
                <br/>
                <label>Topping 3:<input type='checkbox'/></label>
                <br/>
                <label>Topping 4:<input type='checkbox'/></label>
            </div>
            <br/>
                <label>Special Instructions:<br/><input type='text' id='special-text'/></label>
            <br/>
            <br/>
            <input type='submit'/>
        </form>
    );
};

export default PizzaForm;