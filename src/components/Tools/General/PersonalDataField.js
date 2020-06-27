import * as Yup from 'yup';
// import errorMessages from '../../resources/en/errorMassages';
import inputType from '../../../resources/inputType';
import strings from '../../../resources/en/strings';

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
            // .required(errorMessages.requiredInput)
            .nullable()
    },
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
            // .required(errorMessages.requiredInput)
            .nullable()
    }, 
    'workPhoneNumber': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.workPhoneNumber,
        name: 'workPhoneNumber',
        label: strings.placeholder.workPhoneNumber,
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
    'phoneNumber': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.phoneNumber,
        name: 'phoneNumber',
        label: strings.placeholder.phoneNumber,
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
    'email': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.email,
        name: 'email',
        label: strings.placeholder.email,
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
    'comment': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.comment,
        name: 'comment',
        label: strings.placeholder.comment,
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
    'registerDate': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.registerDate,
        name: 'registerDate',
        label: strings.placeholder.registerDate,
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
    'countryByPhone': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.countryByPhone,
        name: 'countryByPhone',
        label: strings.placeholder.countryByPhone,
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
    'driverRegisterDate': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.driverRegisterDate,
        name: 'driverRegisterDate',
        label: strings.placeholder.driverRegisterDate,
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