export default {
  appointmentDate: {
    type: inputType.muiDateField,
    placeholder: strings.placeholder.date,
    name: "appointmentDate",
    label: strings.calendarPopup.labels.date,
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
        errorMessages.appointments.startIsGreaterThanEnd,
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
        errorMessages.appointments.endIsSmallerThanStart,
        function (endTime) {
          return moment(this.parent.startTime) < moment(endTime);
        }
      )
      .typeError(errorMessages.validDate)
      .nullable(),
  },
};
