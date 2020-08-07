import React from "react";
import { Formik, Form } from "formik";
import FormPanel from "../../Common/FormPanel/FormPanel";
import * as Yup from "yup";
import strings from "../../../resources/en/strings";
import VerificationInfo from "./VerificationInfo";
import DesktopLayout from "./Layout/Desktop-layout";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import userImage from "../../../assets/images/userimage.jpg";
import VerificationImageSlider from "./VerificationImageSlider";

class Verification extends React.Component {
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
    Object.values(VerificationInfo).forEach((value) => {
      validationShape[value.name] = value.schema;
      initialValues[value.name] = value.initialValue;
    });
    return {
      initialValues,
      validationSchema: Yup.object().shape(validationShape),
    };
  };

  imageTableRender = () => {
    return (
      <TableContainer component={Paper} className="cars-photo-table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Тех. Паспорт A</TableCell>
              <TableCell align="center">Тех. Паспорт B</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" align="center" scope="row">
                <img src={userImage} alt="" />
              </TableCell>
              <TableCell align="center">
                <img src={userImage} alt="" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
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
      <div className="container-fluid verification-section-header">
        <div className="verification-section">
          <h2 className="tools-verification-header">Верификация</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
          >
            {(data) => {
              console.log("DAta", data);
              return (
                <Form>
                  <p className="tools-verification-paragraph">Личные данные</p>
                  <FormPanel
                    mobileLayout={DesktopLayout}
                    tabletLayout={DesktopLayout}
                    desktopLayout={DesktopLayout}
                    storage={data.values}
                    fields={VerificationInfo}
                    errors={data.errors}
                    touched={data.touched}
                    disabled={this.state.isEditableField}
                    handleChange={(e) =>
                      this.handleEvent(e, data, data.handleChange)
                    }
                    handleBlur={data.handleBlur}
                  />
                  <div>{this.imageTableRender()}</div>
                  <div>
                    {this.state.isEditableField ? (
                      <button
                        className="edit-button"
                        onClick={this.editButtonClick}
                      >
                        Редактировать
                      </button>
                    ) : (
                      <div className="save-button-section">
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
        <div>
          <VerificationImageSlider />
        </div>
      </div>
    );
  }
}

export default Verification;
