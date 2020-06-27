import * as Yup from 'yup';
// import errorMessages from '../../resources/en/errorMassages';
import inputType from '../../../resources/inputType';
import strings from '../../../resources/en/strings';

export default {
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
            // .required(errorMessages.requiredInput)
            .nullable()
    },
    'driverCountry': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.driverCountry,
        name: 'driverCountry',
        label: strings.placeholder.driverCountry,
        initialValue: '',
        disabled: true,
        schema: Yup.string()
            .trim()
            // .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            // .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
            // .max(100, errorMessages.maxCharacters.replace('enter-count', 100))
            // .required(errorMessages.requiredInput)
            .nullable()
    }, 
    'dateOfIssueLicense': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.dateOfIssueLicense,
        name: 'dateOfIssueLicense',
        label: strings.placeholder.dateOfIssueLicense,
        initialValue: '',
        disabled: true,
        schema: Yup.string()
            .trim()
            // .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            // .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
            // .max(100, errorMessages.maxCharacters.replace('enter-count', 100))
            // .required(errorMessages.requiredInput)
            .nullable()
    },
    'validUntil': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.validUntil,
        name: 'validUntil',
        label: strings.placeholder.validUntil,
        initialValue: '',
        disabled: true,
        schema: Yup.string()
            .trim()
            // .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            // .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
            // .max(100, errorMessages.maxCharacters.replace('enter-count', 100))
            // .required(errorMessages.requiredInput)
            .nullable()
    },
}