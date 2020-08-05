import * as Yup from 'yup';
import errorMessages from '../../../resources/en/errorMassages';
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
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'country': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.country,
        name: 'country',
        label: strings.placeholder.country,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
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
            .required(errorMessages.requiredInput)
            .nullable()
    }, 
    'region': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.region,
        name: 'region',
        label: strings.placeholder.region,
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
    'city': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.city,
        name: 'city',
        label: strings.placeholder.city,
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
    'codeInn': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.codeInn,
        name: 'codeInn',
        label: strings.placeholder.codeInn,
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
    'index': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.index,
        name: 'index',
        label: strings.placeholder.index,
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
    'address': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.address,
        name: 'address',
        label: strings.placeholder.address,
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
    'day': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.day,
        name: 'day',
        label: strings.placeholder.day,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'months': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.months,
        name: 'months',
        label: strings.placeholder.months,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'year': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.year,
        name: 'year',
        label: strings.placeholder.year,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'gender': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.gender,
        name: 'gender',
        label: strings.placeholder.gender,
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
    'passportOrId': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.passportOrId,
        name: 'passportOrId',
        label: strings.placeholder.passportOrId,
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