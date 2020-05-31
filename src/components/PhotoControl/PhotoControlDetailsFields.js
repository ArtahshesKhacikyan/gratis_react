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
        schema: Yup.string()
            .trim()
            // .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            // .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
            // .max(100, errorMessages.maxCharacters.replace('enter-count', 100))
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'name': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.name,
        name: 'name',
        label: strings.placeholder.name,
        initialValue: '',
        schema: Yup.string()
            .trim()
            .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
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
        schema: Yup.string()
            .trim()
            .matches(/^[a-zA-Z]/, {message: errorMessages.startLetters, excludeEmptyString: true })
            .matches(/^[a-zA-Z.-\s]*$/, {message: errorMessages.namesCharacters, excludeEmptyString: true })
            // .max(100, errorMessages.maxCharacters.replace('enter-count', 100))
            .required(errorMessages.requiredInput)
            .nullable()
    },
}