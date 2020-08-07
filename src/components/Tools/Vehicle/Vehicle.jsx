import React from "react";
import { Formik, Form } from "formik";
import FormPanel from "../../Common/FormPanel/FormPanel";
import * as Yup from "yup";
import strings from "../../../resources/en/strings";
import VehicleInfo from "./VehicleInfo";
import DesktopLayout from "./Layout/Desktop-layout";

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: null,
      validationSchema: null,
      isEditableField: true
    };
  }

  componentDidMount = async () => {
    const { initialValues, validationSchema } = this.init();
    this.setState({
      initialValues,
      validationSchema,
    });
  };

  init = () => {
    const validationShape = {};
    const initialValues = {};
    Object.values(VehicleInfo).forEach((value) => {
      validationShape[value.name] = value.schema;
      initialValues[value.name] = value.initialValue;
    });
    return {
      initialValues,
      validationSchema: Yup.object().shape(validationShape),
    };
  };

  editButtonClick = () => {
    this.setState({
      isEditableField: false,
    });
  };

  closeButton = () => {
    this.setState({
      isEditableField: true,
    });
  };
  
  render() {
    const { initialValues, validationSchema } = this.state;
    if (!initialValues || !validationSchema) return "";
    return (
      <div className="container-fluid">
        <div className="vehicle-section">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
          >
            {(data) => {
              console.log("DAta", data);
              return (
                <Form>
                  <FormPanel
                    mobileLayout={DesktopLayout}
                    tabletLayout={DesktopLayout}
                    desktopLayout={DesktopLayout}
                    storage={data.values}
                    fields={VehicleInfo}
                    errors={data.errors}
                    touched={data.touched}
                    disabled={this.state.isEditableField}
                    handleChange={(e) =>
                      this.handleEvent(e, data, data.handleChange)
                    }
                    handleBlur={data.handleBlur}
                  />
                  <div className="general-button-section">
                    {this.state.isEditableField ? (
                      <button
                        className="edit-button"
                        onClick={this.editButtonClick}
                      >
                        Редактировать
                      </button>
                    ) : (
                      <div>
                        <button className="save-button">Сохранить</button>
                        <button
                          onClick={this.closeButton}
                          className="close-button"
                        >
                          Закрыть
                        </button>
                      </div>
                    )}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Vehicle;
