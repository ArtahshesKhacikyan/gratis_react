import * as Yup from 'yup';
import errorMessages from '../../../resources/en/errorMassages';
import inputType from '../../../resources/inputType';
import strings from '../../../resources/en/strings';

export default {
    'category': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.category,
        name: 'category',
        label: strings.placeholder.category,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'color': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.color,
        name: 'color',
        label: strings.placeholder.color,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
            .nullable()
    }, 
    'mark': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.mark,
        name: 'mark',
        label: strings.placeholder.mark,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
            .nullable()
    }, 
    'carNum': {
        type: inputType.muiTextField,
        placeholder: strings.placeholder.carNum,
        name: 'carNum',
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
    'model': {
        type: inputType.muiSelectField,
        placeholder: strings.placeholder.model,
        name: 'model',
        label: strings.placeholder.model,
        initialValue: '',
        options: [],
        disabled: true,
        schema: Yup.string()
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'vinCode': {
        type: inputType.muiTextField,
        placeholder: 'VIN',
        name: 'vinCode',
        label: 'VIN',
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
}