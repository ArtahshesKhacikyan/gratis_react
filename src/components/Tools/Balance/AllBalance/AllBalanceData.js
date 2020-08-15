import * as Yup from 'yup';
import errorMessages from '../../../../resources/en/errorMassages';
import inputType from '../../../../resources/inputType';
import strings from '../../../../resources/en/strings';

export default {
  startDate: {
    type: inputType.muiDateField,
    placeholder: strings.placeholder.date,
    name: "startDate",
    label: '',
    initialValue: null,
    schema: Yup.date().required(errorMessages.requiredInput).nullable(),
  },
  endDate: {
    type: inputType.muiDateField,
    placeholder: strings.placeholder.date,
    name: "endDate",
    label: '',
    initialValue: null,
    schema: Yup.date().required(errorMessages.requiredInput).nullable(),
  },
  startTime: {
    type: inputType.muiTimeField,
    placeholder: strings.placeholder.startTime,
    name: "startTime",
    label: strings.calendarPopup.labels.startTime,
    initialValue: null,
    schema: Yup.date()
      .required(errorMessages.requiredInput)
      .test(
        "startIsGreaterThanEnd",
        errorMessages.startIsGreaterThanEnd,
        function (startTime) {
          return moment(this.parent.endTime) > moment(startTime);
        }
      )
      .typeError(errorMessages.validDate)
      .nullable(),
  },
  endTime: {
    type: inputType.muiTimeField,
    placeholder: strings.placeholder.endTime,
    name: "endTime",
    label: strings.calendarPopup.labels.endTime,
    initialValue: null,
    schema: Yup.date()
      .required(errorMessages.requiredInput)
      .test(
        "endIsSmallerThanStart",
        errorMessages.endIsSmallerThanStart,
        function (endTime) {
          return moment(this.parent.startTime) < moment(endTime);
        }
      )
      .typeError(errorMessages.validDate)
      .nullable(),
  },
};
