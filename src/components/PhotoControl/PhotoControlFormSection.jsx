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
  verifyPhotocontrol,
  getPhotocontrolData,
} from "./photoControlStore/action";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import inputTypes from "../../resources/inputType";
import { values } from "lodash";
import ConfirmModal from "../Common/Modals/ConfirmModal";
import Switch from '@material-ui/core/Switch';
import { Modal, Button } from "react-bootstrap";
import PhotoControlGalary from "./PhotoControlGalary";


class PhotoControlFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: null,
      validationSchema: null,
      selectedUserData: {},
      isDisabled: false,
      isEdit: true,
      isTarifsChecked: false,
      tariffs: [],
      tarrifsChecked: [],
      isSaveButtonDisabled: true,
      carDataInfoChecked: false,
      personalDataChecked: false,
      initialErrors: null,
      confirmModalShow: false,
      surname: false,
      name: false,
      driverSerialNumber: false,
      driverCountry: false,
      category: false,
      carNum: false,
      mark: false,
      model: false,
      year: false,
      color: false,
      image1: false,
      image2: false,
      image3: false,
      disabeledCancleButton: false,
      disbledVerifyButton: false,
      showErrorModal: false,
      showTarrifErrorModal: false
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
    const { initialValues, validationSchema, initialErrors } = this.init();
    this.setState({
      initialValues,
      validationSchema,
      initialErrors
    });
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.verifyPhotocontrolRespose !== prevProps.verifyPhotocontrolRespose) {
      await this.props.getPhotocontrolData();
      this.props.onHide()
    }
  }

  init = () => {
    const validationShape = {};
    const initialValues = {};
    const initialErrors = {}
    if (this.state.selectedUserData.id) {
      Object.values(PhotoControlPersonalDataField).forEach((value) => {
        validationShape[value.name] = value.schema;
        initialValues[value.name] = this.state.selectedUserData[value.name];
        initialErrors[value.name] = false;
        Object.values(this.state.selectedUserData.errorFields).filter(error => {
          console.log("-----error----", error)
          console.log("-----VALUE----", value)
          if (error === value.name) {
            initialErrors[value.name] = true
            this.setState({ [value.name]: true })
          } else if (error === 'image1') {
            initialErrors['image1'] = true,
              this.setState({ image1: true })
          } else if (error === 'image2') {
            initialErrors['image2'] = true,
              this.setState({ image2: true })
          } else if (error === 'image3') {
            initialErrors['image3'] = true,
              this.setState({ image3: true })
          }
        })
      });
      Object.values(CarPhotoControlDetailsData).forEach((value) => {
        validationShape[value.name] = value.schema;
        initialValues[value.name] = this.state.selectedUserData[value.name];
        initialErrors[value.name] = false;
        Object.values(this.state.selectedUserData.errorFields).filter(error => {
          if (error === value.name) {
            initialErrors[value.name] = true
            this.setState({ [value.name]: true })
          }
        }),
          CarPhotoControlDetailsData.mark.onChange = (event) => {
            this.setState({
              isSaveButtonDisabled: false,
            });
            CarPhotoControlDetailsData.model.options = [];
            CarPhotoControlDetailsData.year.options = [];
            Object.entries(this.props.getCarsListResponse.data.models).forEach(
              (value) => {
                if (value[0] === event.target.value) {
                  value[1].forEach((element) => {
                    CarPhotoControlDetailsData.model.options.push({
                      key: element.key,
                      value: element.name,
                    });
                  });
                  CarPhotoControlDetailsData.model.onChange = (e) => {
                    let currentYear = new Date().getFullYear();
                    CarPhotoControlDetailsData.year.options = [];
                    let changedModel = value[1].find((element) => {
                      return (element.key = event.target.value);
                    });
                    for (var i = changedModel.from_year; i <= currentYear; i++) {
                      CarPhotoControlDetailsData.year.options.push({
                        key: i,
                        value: i,
                      });
                    }
                  };
                }
              }
            );
          };
      });
    } else {
      Object.values(PhotoControlPersonalDataField).forEach((value) => {
        validationShape[value.name] = value.schema;
        initialValues[value.name] = value.initialValue;
        initialErrors[value.name] = false
      });
      Object.values(CarPhotoControlDetailsData).forEach((value) => {
        validationShape[value.name] = value.schema;
        initialValues[value.name] = value.initialValue;
        initialErrors[value.name] = false
      });
    }

    return {
      initialValues,
      initialErrors,
      validationSchema: Yup.object().shape(validationShape),
    };
  };

  handleChangeTariffs = (event) => {
    let tarrifs = []
    tarrifs.push(event.target.value);
    this.setState({
      tarrifsChecked: tarrifs
    })
  };

  getTarrifsCheckBoxes = () => {
    let categorys = this.props.getUserCategoryResposne.data.filter(
      (e) => e.name === this.state.initialValues.category
    );
    let tariifsCheck = [];
    if (typeof categorys[0] !== undefined) {
      categorys[0].classes.forEach(({ name }) => {
        let checked = this.state.selectedUserData.tariffs.includes(name);
        tariifsCheck.push(
          <div>
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
          </div>
        );
      });
    }
    return <div className="tarrifs">{tariifsCheck}</div>;
  };

  editButtonClick = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  onSubmitForm = () => {
    this.setState({
      confirmModalShow: true
    })

    let tarrifs = this.state.tarrifsChecked.map((tarrif) => {
      return tarrif;
    });
    if (tarrifs.length === 0) {
      this.setState({ showTarrifErrorModal: true })
      return
    }
    let body = {
      status: "completed",
      isUpdated: {
        tariffs: tarrifs,
      },
    };
    this.props.verifyPhotocontrol(this.state.selectedUserData.id, body);
  };

  closeModal = (e) => {
    e && e.preventDefault();
    this.props.onHide();
  };

  handleCloseConfirmModal = () => {
    this.setState({
      confirmModalShow: false
    })
  }

  canclePhotoControl = (e, data) => {
    e && e.preventDefault();
    let _fields = [];
    Object.entries(data.initialErrors).filter(value => {
      if (value[1]) {
        return _fields.push(value[0])
      }
    })
    if (_fields.length === 0) {
      this.setState({ showErrorModal: true })
      return
    }
    let body = {
      status: "rejected",
      fields: _fields
    };
    this.props.verifyPhotocontrol(this.state.selectedUserData.id, body);
  };

  handleEvent = (e, data, eventFunction) => {
    this.setState({
      formikData: data,
      changedField: e.target.name,
      isSaveButtonDisabled: false,
    });
    eventFunction(e);
  };

  cancleEdit = (e) => {
    e.preventDefault()
    this.setState({ isEdit: !this.state.isEdit });
  };

  savePhotoControl = (e, data) => {
    e.preventDefault()
    this.setState({ isEdit: !this.state.isEdit });
  };

  handleSwichChange = (event, data) => {
    console.log("------event.target.name-----", event.target.name)
    this.setState({
      [event.target.name]: event.target.checked
    })
    if (event.target.checked) {
      data.initialErrors[event.target.name] = true
    } else {
      data.initialErrors[event.target.name] = false
    }

  }

  hideErrorModal = () => {
    this.setState({
      showErrorModal: false
    })
  }

  renderErrorModal() {
    return (
      <div>
        <Modal
          className="error-modal"
          show={this.state.showErrorModal}
          onHide={this.hideErrorModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Пожалуйста выберите один из полей которых есть неисправность</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideErrorModal}>
              Закрыть
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

  hideTarrifErrorModal = () => {
    console.log("Mtav")
    this.setState({
      showTarrifErrorModal: false
    })
  }

  renderTarrifErrorModal() {
    return (
      <div>
        <Modal
          className="error-modal"
          show={this.state.showTarrifErrorModal}
          onHide={this.hideTarrifErrorModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Пожалуйста, выберите один из тарифов</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideTarrifErrorModal}>
              Закрыть
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

  render() {
    const { initialValues, validationSchema, initialErrors } = this.state;
    if (!initialValues || !validationSchema || !initialErrors) return "";
    console.log("this.state.surname", initialErrors)
    return (
      <div className="personal-data-header">
        {this.renderErrorModal()}
        {this.renderTarrifErrorModal()}
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
            <p className="edit-icon-section">
              {" "}
              {strings.photoControlHeaderText} ID:
              {this.state.selectedUserData.userId} O.H:{" "}
              {this.state.selectedUserData.id}
            </p>
          </div>

          <Row className="our-modal-div">
            <div className="edit-create-modal">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                initialErrors={initialErrors}
                enableReinitialize={true}
                onSubmit={(e) => this.onSubmitForm(e)}
              >
                {(data) => {
                  return (
                    <Form className='photocontrol-form-section'>
                      <div>
                        <p className="personal-data-section-paragraph">
                          Личные данные
                      </p>
                        <div className='section-errors'>
                          <Switch
                            className='surname-switch'
                            checked={this.state.surname}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="surname"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                          <Switch
                            className='name-switch'
                            checked={this.state.name}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="name"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                        <div className='section-second-errors'>
                          <Switch
                            className='name-driverSerialNumber'
                            checked={this.state.driverSerialNumber}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="driverSerialNumber"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                          <Switch
                            className='name-driverCountry'
                            checked={this.state.driverCountry}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="driverCountry"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                        <FormPanel
                          mobileLayout={MobileLayout}
                          tabletLayout={TabletLayout}
                          desktopLayout={DesktopLayout}
                          storage={data.values}
                          fields={PhotoControlPersonalDataField}
                          errors={data.errors ? data.errors : data.initialErrors}
                          touched={data.touched}
                          handleChange={(e) =>
                            this.handleEvent(e, data, data.handleChange)
                          } handleBlur={data.handleBlur}
                          disabled={this.state.isEdit}
                        />
                        <p className="personal-data-section-paragraph">
                          Фотоконтроль автомобиля
                      </p>
                        <div className='details-car-section-errors'>
                          <Switch
                            className='category-switch'
                            checked={this.state.category}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="category"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                          <Switch
                            className='carNum-switch'
                            checked={this.state.carNum}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="carNum"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
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
                        <div className='details-three-car-section-errors'>
                          <Switch
                            className='mark-switch'
                            checked={this.state.mark}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="mark"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                          <Switch
                            className='model-switch'
                            checked={this.state.model}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="model"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                        <div className='details-second-car-section-errors'>
                          <Switch
                            className='color-switch'
                            checked={this.state.color}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="color"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                          <Switch
                            className='year-switch'
                            checked={this.state.year}
                            onChange={(e) =>
                              this.handleSwichChange(e, data)}
                            name="year"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                        {this.state.isEdit ? (
                          <div>
                            <div

                              className="button-section">
                              <button className="success-button"
                                disabled={this.state.surname
                                  || this.state.name ||
                                  this.state.driverSerialNumber || this.state.driverCountry
                                  || this.state.category || this.state.carNum
                                  || this.state.mark || this.state.model
                                  || this.state.color || this.state.year
                                  || this.state.image1
                                  || this.state.image2 || this.state.image3} >
                                Верифицировать
                            </button>
                              <button
                                onClick={(e) => this.canclePhotoControl(e, data)}
                                // disabled={this.state.surname
                                //   || this.state.name ||
                                //   this.state.driverSerialNumber || this.state.driverCountry
                                //   || this.state.category || this.state.carNum
                                //   || this.state.mark || this.state.model ||
                                //   this.state.color || this.state.year}
                                className="cancle-button">Отклонить</button>
                              <button
                                className="close-button"
                                onClick={(e) => this.closeModal(e, data)}
                              >
                                Закрыть
                            </button>
                            </div>
                          </div>
                        ) : (
                            <div>
                              <div className="button-section">
                                <button
                                  className="success-button"
                                  id="save"
                                  disabled={this.state.isSaveButtonDisabled}
                                  onClick={(e) => this.savePhotoControl(e, data)}
                                  type={inputTypes.submit}
                                >
                                  Сохранить
                            </button>
                                <button
                                  className="close-button"
                                  onClick={this.cancleEdit}
                                >
                                  Отменить
                            </button>
                              </div>
                            </div>
                          )}
                        <p className="personal-data-section-paragraph tarrifs-parth">Тариф</p>
                        {this.getTarrifsCheckBoxes()}
                      </div>
                      <div className='photo-control-galary'>
                        <PhotoControlGalary
                          selectUserId={this.props.selectUserId}
                          switchChange={(e) =>
                            this.handleSwichChange(e, data)}
                          image1={this.state.image1}
                          image2={this.state.image2}
                          image3={this.state.image3} />
                      </div>
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
    verifyPhotocontrolRespose: state.photoControl.verifyPhotocontrolRespose,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getDriverCountryList,
      getUserCategory,
      getCarsList,
      verifyPhotocontrol,
      getPhotocontrolData,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoControlFormSection);
