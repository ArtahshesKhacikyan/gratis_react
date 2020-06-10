import * as Yup from 'yup';
import errorMessages from '../../resources/en/errorMassages';
import inputType from '../../resources/inputType';
import strings from '../../resources/en/strings';

export default {
    'tarriffs': {
        type: inputType.muiCheckbox,
        name: '',
        label: '',
        initialValue: false,
        schema: Yup.bool()
    },
}