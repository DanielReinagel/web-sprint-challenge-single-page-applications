import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().trim().required('A name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().required('A pizza size is required'),
    toppingOne: yup.boolean(),
    toppingTwo: yup.boolean(),
    toppingThree: yup.boolean(),
    toppingFour: yup.boolean(),
    special: yup.string()
});

export default schema;