import * as Yup from 'yup';
import errorMessages from '../../resources/en/errorMassages';
import inputType from '../../resources/inputType';
import strings from '../../resources/en/strings';

export default {
    'surname': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.surname,
        name: 'surname',
        label: strings.placeholder.surname,
        initialValue: '',
        disabled: true,
        schema: Yup.string()
            .trim()
            // .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            // .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
            // .max(100, errorMessages.maxCharacters.replace('enter-count', 100))
            .required(errorMessages.requiredInput)
            .nullable()
    },
    // 'tarriffs': {
    //     type: inputType.muiCheckbox,
    //     name: 'error-checkbox-wrapper',
    //     label: '',
    //     initialValue: false,
    //     schema: Yup.bool()
    // },
    'name': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.name,
        name: 'name',
        label: strings.placeholder.name,
        initialValue: '',
        disabled: true,
        schema: Yup.string()
            .trim()
            // .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            // .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
            // .max(100, errorMessages.maxCharacters.replace('enter-count', 100))
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'driverSerialNumber': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.driverSerialNumber,
        name: 'driverSerialNumber',
        label: strings.placeholder.driverSerialNumber,
        initialValue: '',
        disabled: true,
        schema: Yup.string()
            .trim()
            // .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            // .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
            // .max(100, errorMessages.maxCharacters.replace('enter-count', 100))
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'driverCountry': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.driverCountry,
        name: 'driverCountry',
        label: strings.placeholder.driverCountry,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
            .nullable()
    }
}