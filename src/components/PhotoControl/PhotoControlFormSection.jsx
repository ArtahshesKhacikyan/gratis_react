import React from "react";
import { withRouter } from "react-router-dom";
import strings from "../../resources/en/strings";
import { Row } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FormPanel from '../Common/FormPanel/FormPanel';
import MobileLayout from './Layout/Mobile-layout';
import TabletLayout from './Layout/Tablet-layout';
import DesktopLayout from './Layout/Desktop-layout';
import PhotoControlPersonalDataField from './PhotoControlPersonalDataField'
import EditIcon from '@material-ui/icons/Edit';
import CarPhotoControlDetailsData from "./CarPhotoControlDetailsData";
import PhotoControlDetailsDesktopLayout from './Layout/PhotoControlDetailsDesktop-layout'
import PhotoControlDetailsMobileLayout from './Layout/PhotoControlDetailsMobile-layout'
import PhotoControlDetailsTabletLayout from './Layout/PhotoControlDetailsTablet-layout'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDriverCountryList } from "./photoControlStore/action";

class PhotoControlFormSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValues: null,
            validationSchema: null
        };
    }

    componentDidMount = async () => {
        await this.props.getDriverCountryList();
        const { initialValues, validationSchema } = this.init();
        this.setState({
            initialValues,
            validationSchema
        });
        console.log("-------", this.props)
    }

    init = () => {
        console.log("getUserDataResponse", this.props.getPhotoCantrolDataResponse.data)
        const validationShape = {};
        const initialValues = {};
        let selectedUserData = {}
        if (this.props.getPhotoCantrolDataResponse.data) {
            selectedUserData = this.props.getPhotoCantrolDataResponse.data.find(data => {
                return data.id === this.props.selectUserId
            })
        }
        console.log("selectedUserData", selectedUserData)
        Object.values(PhotoControlPersonalDataField).forEach(value => {
            validationShape[value.name] = value.schema;
            initialValues[value.name] = selectedUserData[value.name];
            // AddressFields[value.name].onChange = this.formElementChanged;
        });
        Object.values(CarPhotoControlDetailsData).forEach(value => {
            validationShape[value.name] = value.schema;
            initialValues[value.name] = null;
            // AddressFields[value.name].onChange = this.formElementChanged;
        });
        return {
            initialValues,
            validationSchema: Yup.object().shape(validationShape)
        };
    }

    handleFormChange = (e) => {
        this.formikHandleChange(e);
    }

    render() {
        const { initialValues, validationSchema } = this.state;
        if (!initialValues || !validationSchema) return '';
        return (
            <div className="personal-data-header">
                <div className='personal-data-section'>
                    <div className="photo-control-header">
                        <button className="edit-icon-button">
                            <EditIcon />

                        </button>
                        <p className='edit-icon-section'> Фотоконтроль водителя</p>
                    </div>

                    <p className='personal-data-section-paragraph'>Личные данные</p>
                    <Row className='our-modal-div'>
                        <div className='edit-create-modal'>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                enableReinitialize={true}
                            // onSubmit={this.props.editedContact.id ? this.onEditForm : this.onSubmitForm}
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
                                                handleChange={this.handleFormChange}
                                                handleBlur={data.handleBlur}
                                            />
                                            <p className='personal-data-section-paragraph'>Фотоконтроль автомобиля</p>
                                            <FormPanel
                                                mobileLayout={PhotoControlDetailsMobileLayout}
                                                tabletLayout={PhotoControlDetailsTabletLayout}
                                                desktopLayout={PhotoControlDetailsDesktopLayout}
                                                storage={data.values}
                                                fields={CarPhotoControlDetailsData}
                                                errors={data.errors}
                                                touched={data.touched}
                                                handleChange={this.handleFormChange}
                                                handleBlur={data.handleBlur}
                                            />

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
        getCountryListResponse: state.photoControl.getCountryListResponse
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getDriverCountryList
        },
        dispatch
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoControlFormSection);
