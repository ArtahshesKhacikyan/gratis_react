import * as Yup from 'yup';
import errorMessages from '../../resources/en/errorMassages';
import inputType from '../../resources/inputType';
import strings from '../../resources/en/strings';

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
    'categoryError': {
        type: inputType.muiCheckbox,
        name: 'categoryError',
        label: '',
        initialValue: false,
        disabled: false,
        schema: Yup.bool()
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
            .required(errorMessages.requiredInput)
            .nullable()
    },
    'carNumError': {
        type: inputType.muiCheckbox,
        name: 'carNumError',
        label: '',
        initialValue: false,
        disabled: false,
        schema: Yup.bool()
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
    'markError': {
        type: inputType.muiCheckbox,
        name: 'markError',
        label: '',
        initialValue: false,
        disabled: false,
        schema: Yup.bool()
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
    'modelError': {
        type: inputType.muiCheckbox,
        name: 'modelError',
        label: '',
        initialValue: false,
        disabled: false,
        schema: Yup.bool()
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
    'colorError': {
        type: inputType.muiCheckbox,
        name: 'colorError',
        label: '',
        initialValue: false,
        disabled: false,
        schema: Yup.bool()
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
    'yearError': {
        type: inputType.muiCheckbox,
        name: 'yearError',
        label: '',
        initialValue: false,
        disabled: false,
        schema: Yup.bool()
    },
}