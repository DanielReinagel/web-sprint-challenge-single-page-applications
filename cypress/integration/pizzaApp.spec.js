describe('Pizza Web App Tests', ()=>{
    beforeEach(()=>{
        cy.visit('localhost:3000/pizza');
    });

    const nameInput = () => cy.get('input[name=name]');
    const sizeDropdown = () => cy.get('select[name=size]');
    const topping = string => cy.get(`input[name=topping${string}`);
    const specialInput = () => cy.get('input[name=special]');
    const submitInput = () => cy.get('input[type=submit]');

    describe('Test Inputting', ()=>{
        it('type into name input', ()=>{
            nameInput().should('have.value', '').type('Tony Stark').should('have.value', 'Tony Stark');
        });
        it('choosing a size', ()=>{
            sizeDropdown().should('have.value', '').select('Large').should('have.value', 'Large');
        });
        describe('checking toppings', ()=>{
            it('checking toppingOne', ()=>{
                topping('One').should('not.be.checked').click().should('be.checked').click().should('not.be.checked');
            });
            it('checking toppingTwo', ()=>{
                topping('Two').should('not.be.checked').click().should('be.checked').click().should('not.be.checked');
            });
            it('checking toppingThree', ()=>{
                topping('Three').should('not.be.checked').click().should('be.checked').click().should('not.be.checked');
            });
            it('checking toppingFour', ()=>{
                topping('Four').should('not.be.checked').click().should('be.checked').click().should('not.be.checked');
            });
            it('checking all toppings at the same time', ()=>{
                topping('One').click();
                topping('Two').click();
                topping('Three').click();
                topping('Four').click();
                topping('One').should('be.checked');
                topping('Two').should('be.checked');
                topping('Three').should('be.checked');
                topping('Four').should('be.checked');
            });
        });
        it('adding special instructions', ()=>{
            specialInput().should('have.value', '').type('These are special instructions').should('have.value', 'These are special instructions');
        });
    });
    describe('form submission tests', ()=>{
        it('submitting form', ()=>{
            nameInput().type('Tony Stark');
            sizeDropdown().select('Large');
            topping('Three').click();
            specialInput().type('Be quick');
            submitInput().click();
            nameInput().should('have.value', '');
            sizeDropdown().should('have.value', '');
            topping('One').should('not.be.checked');
            topping('Two').should('not.be.checked');
            topping('Three').should('not.be.checked');
            topping('Four').should('not.be.checked');
            specialInput().should('have.value', '');
        });
    });
});