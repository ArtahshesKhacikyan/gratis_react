import * as Yup from 'yup';
// import errorMessages from '../../resources/en/errorMassages';
import inputType from '../../../resources/inputType';
import strings from '../../../resources/en/strings';

export default {
    'idGuest': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.idGuest,
        name: 'idGuest',
        label: strings.placeholder.idGuest,
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
    'operationSystem': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.operationSystem,
        name: 'operationSystem',
        label: strings.placeholder.operationSystem,
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
    'language': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.language,
        name: 'language',
        label: strings.placeholder.language,
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
    'carMark': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.carMark,
        name: 'carMark',
        label: strings.placeholder.carMark,
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
    'cordinate': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.carNum,
        name: 'cordinate',
        label: strings.placeholder.carNum,
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
    'appVersion': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.appVersion,
        name: 'appVersion',
        label: strings.placeholder.appVersion,
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