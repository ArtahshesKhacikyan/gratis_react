import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import strings from "../../resources/en/strings";
import { Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import FormPanel from "../Common/FormPanel/FormPanel";
import MobileLayout from "./Layout/Mobile-layout";
import TabletLayout from "./Layout/Tablet-layout";
import DesktopLayout from "./Layout/Desktop-layout";
import PhotoControlPersonalDataField from "./PhotoControlPersonalDataField";
import CarPhotoControlDetailsData from "./CarPhotoControlDetailsData";
import PhotoControlDetailsDesktopLayout from "./Layout/PhotoControlDetailsDesktop-layout";
import PhotoControlDetailsMobileLayout from "./Layout/PhotoControlDetailsMobile-layout";
import PhotoControlDetailsTabletLayout from "./Layout/PhotoControlDetailsTablet-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getDriverCountryList,
  getUserCategory,
  getCarsList,
} from "./photoControlStore/action";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
class PhotoControlFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: null,
      validationSchema: null,
      selectedUserData: {},
      isDisabled: true,
      isEdit: true,
      isTarifsChecked: false,
      tariffs: []
    };
  }

  componentDidMount = async () => {
    await this.props.getDriverCountryList();
    await this.props.getUserCategory();
    await this.props.getCarsList();
    if (this.props.getPhotoCantrolDataResponse.data) {
      let _selectedUserData = this.props.getPhotoCantrolDataResponse.data.find(
        (data) => {
          return data.id === this.props.selectUserId;
        }
      );
      this.setState({ selectedUserData: _selectedUserData });
    }
    if (this.props.getCountryListResponse) {
      Object.values(this.props.getCountryListResponse.data).forEach(
        (values) => {
          PhotoControlPersonalDataField.driverCountry.options.push({
            key: values.country,
            value: values.country,
          });
        }
      );
    }
    if (this.props.getUserCategoryResposne) {
      Object.values(this.props.getUserCategoryResposne.data).forEach(
        (values) => {
          CarPhotoControlDetailsData.category.options.push({
            key: values.name,
            value: values.name,
          });
        }
      );
    }
    if (this.props.getCarsListResponse) {
      Object.values(this.props.getCarsListResponse.data.colors).forEach(
        (values) => {
          CarPhotoControlDetailsData.color.options.push({
            key: values.key,
            value: values.name,
          });
        }
      );
      Object.values(this.props.getCarsListResponse.data.mark).forEach(
        (values) => {
          CarPhotoControlDetailsData.mark.options.push({
            key: values.key,
            value: values.name,
          });
        }
      );
      Object.entries(this.props.getCarsListResponse.data.models).forEach(
        (value) => {
          if (value[0] === this.state.selectedUserData.mark) {
            let currentYear = new Date().getFullYear();
            value[1].forEach((element) => {
              CarPhotoControlDetailsData.model.options.push({
                key: element.key,
                value: element.name,
              });
              if (element.key === this.state.selectedUserData.model) {
                for (var i = element.from_year; i <= currentYear; i++) {
                  CarPhotoControlDetailsData.year.options.push({
                    key: i,
                    value: i,
                  });
                }
              }
            });
          }
        }
      );
    }
    const { initialValues, validationSchema } = this.init();
    this.setState({
      initialValues,
      validationSchema,
    });
  };

  init = () => {
    const validationShape = {};
    const initialValues = {};
    if (this.state.selectedUserData.id) {
      Object.values(PhotoControlPersonalDataField).forEach((value) => {
        validationShape[value.name] = value.schema;
        initialValues[value.name] = this.state.selectedUserData[value.name];
        // PhotoControlPersonalDataField.driverCountry.o = this.formElementChanged;
      });
      Object.values(CarPhotoControlDetailsData).forEach((value) => {
        validationShape[value.name] = value.schema;
        initialValues[value.name] = this.state.selectedUserData[value.name];
        CarPhotoControlDetailsData.mark.onChange = (event) => {
          CarPhotoControlDetailsData.model.options = [];
          CarPhotoControlDetailsData.year.options = []
          Object.entries(this.props.getCarsListResponse.data.models).forEach(value => {
            if (value[0] === event.target.value) {
              value[1].forEach((element) => {
                CarPhotoControlDetailsData.model.options.push({
                  key: element.key,
                  value: element.name,
                });
              })
              CarPhotoControlDetailsData.model.onChange = (e) => {
                let currentYear = new Date().getFullYear();
                CarPhotoControlDetailsData.year.options = []
                let changedModel = value[1].find((element) => {
                  return element.key = event.target.value
                })
                console.log("--changedModel-----", changedModel.from_year)
                for (var i = changedModel.from_year; i <= currentYear; i++) {
                  CarPhotoControlDetailsData.year.options.push({
                    key: i,
                    value: i,
                  });
                }
              }
            }
          })
        }

      });
    } else {
      Object.values(PhotoControlPersonalDataField).forEach((value) => {
        validationShape[value.name] = value.schema;
        initialValues[value.name] = value.initialValue;
        // AddressFields[value.name].onChange = this.formElementChanged;
      });
      Object.values(CarPhotoControlDetailsData).forEach((value) => {
        validationShape[value.name] = value.schema;
        initialValues[value.name] = value.initialValue;
      });
    }

    return {
      initialValues,
      validationSchema: Yup.object().shape(validationShape),
    };
  };

  handleChangeTariffs = (event) => {
    this.state.tariffs.push(event.target.value)
  };

  getTarrifsCheckBoxes = () => {
    let categorys = this.props.getUserCategoryResposne.data.filter(
      (e) => e.name === this.state.initialValues.category
    );
    let tariifsCheck = [];
    if (typeof categorys[0] !== undefined) {
      categorys[0].classes.forEach(({ name }) => {
        let checked = this.state.selectedUserData.tariffs.includes(name)
        tariifsCheck.push(<div>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={checked}
                  onChange={this.handleChangeTariffs}
                  name={name}
                  value={name}
                  color="primary"
                />
              }
              label={name}
            />
          </FormGroup>
        </div>)
      });
    }
    console.log("----------------", this.state.tariffs)
    return <div className='tarrifs'>
      {tariifsCheck}
    </div>
  };

  handleFormChange = (e) => {
    this.formikHandleChange(e);
  };

  editButtonClick = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  onSubmitForm = (values) => {
    values.tarriffs = this.state.tarriffs
    console.log("--values--", values)
  };

  closeModal = () => {
    this.props.onHide();
  };

  canclePhotoControl = () => {
  }

  handleEvent = (e, data, eventFunction) => {
    this.setState({
      formikData: data,
      changedField: e.target.name,
    });
    eventFunction(e);
  };

  cancleEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  }

  render() {
    const { initialValues, validationSchema } = this.state;
    if (!initialValues || !validationSchema) return "";
    return (
      <div className="personal-data-header">
        <div className="personal-data-section">
          <div className="photo-control-header">
            <button className="edit-icon-button" onClick={this.editButtonClick}>
              {this.state.isEdit ? (
                <FontAwesomeIcon
                  icon={faUserEdit}
                  className="edit-icon-svg"
                  fill="red"
                />
              ) : (
                  <FontAwesomeIcon icon={faTimes} className="close-icon-svg" />
                )}
            </button>
            <p className="edit-icon-section"> Фотоконтроль водителя</p>
          </div>

          <p className="personal-data-section-paragraph">Личные данные</p>
          <Row className="our-modal-div">
            <div className="edit-create-modal">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={this.onSubmitForm}
              >
                {(data) => {
                  this.formikHandleChange = data.handleChange;
                  return (
                    <Form>
                      <FormPanel
                        mobileLayout={MobileLayout}
                        tabletLayout={TabletLayout}
                        desktopLayout={DesktopLayout}
                        storage={data.values}
                        fields={PhotoControlPersonalDataField}
                        errors={data.errors}
                        touched={data.touched}
                        handleChange={data.handleChange}
                        handleBlur={data.handleBlur}
                        disabled={this.state.isEdit}
                      />
                      <p className="personal-data-section-paragraph">
                        Фотоконтроль автомобиля
                      </p>
                      <FormPanel
                        mobileLayout={PhotoControlDetailsMobileLayout}
                        tabletLayout={PhotoControlDetailsTabletLayout}
                        desktopLayout={PhotoControlDetailsDesktopLayout}
                        storage={data.values}
                        disabled={this.state.isEdit}
                        fields={CarPhotoControlDetailsData}
                        errors={data.errors}
                        touched={data.touched}
                        handleChange={(e) =>
                          this.handleEvent(e, data, data.handleChange)
                        }
                        handleBlur={data.handleBlur}
                      />
                      {this.state.isEdit ? (
                        <div>
                          <div className="button-section">
                            <button className="success-button">
                              Верифицировать
                            </button>
                            <button
                              className="cancle-button"
                            >Отклонить</button>
                            <button
                              className="close-button"
                              onClick={this.closeModal}
                            >
                              Закрыть
                            </button>
                          </div>
                        </div>
                      ) : (
                          <div>
                            <div className="button-section">
                              <button className="success-button">
                                Сохранить
                            </button>
                              {/* <button className='cancle-button'>
                              Отклонить
                    </button > */}
                              <button
                                className="close-button"
                                onClick={this.cancleEdit}>Отменить</button>
                            </div>
                          </div>
                        )}
                      <p className="personal-data-section-paragraph">Тариф</p>
                      {this.getTarrifsCheckBoxes()}
                    </Form>
                  );
                }}
              </Formik>

            </div>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getPhotoCantrolDataResponse: state.photoControl.getPhotoCantrolDataResponse,
    getCountryListResponse: state.photoControl.getCountryListResponse,
    getUserCategoryResposne: state.photoControl.getUserCategoryResposne,
    getCarsListResponse: state.photoControl.getCarsListResponse,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getDriverCountryList,
      getUserCategory,
      getCarsList,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoControlFormSection);
