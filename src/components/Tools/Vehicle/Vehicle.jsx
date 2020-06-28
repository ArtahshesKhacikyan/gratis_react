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

  render() {
    const { initialValues, validationSchema } = this.state;
    if (!initialValues || !validationSchema) return "";
    return (
      <div className="container-fluid">
        <div className='vehicle-section'>
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
                    handleChange={(e) =>
                      this.handleEvent(e, data, data.handleChange)
                    }
                    handleBlur={data.handleBlur}
                  />
                  <div className="general-button-section">
                    <button className="edit-button">Редактировать</button>
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
