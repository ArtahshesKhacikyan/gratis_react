import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    getDriverCountryList,
    getUserCategory,
    getCarsList,
    verifyPhotocontrol,
    getPhotocontrolData,
} from "./photoControlStore/action";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import strings from "../../resources/en/strings";

class PhotoControlForms extends React.Component {
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
            isSaveButtonDisabled: true,
            carDataInfoChecked: false,
            personalDataChecked: false,
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
    }

    render() {
        // const { initialValues, validationSchema } = this.state;
        // if (!initialValues || !validationSchema) return "";

        return (
            <div className="personal-data-section">
                <div className='photo-control-header'>
                    <p className="edit-icon-section">
                        {" "}
                        {strings.photoControlHeaderText} ID:
              {this.state.selectedUserData.userId} O.H:{" "}
                        {this.state.selectedUserData.id}
                    </p>

                </div>
                <p className="personal-data-section-paragraph">
                    {strings.personalDataText}
                </p>
                <div className="edit-create-modal">
                    <Form>
                        <Field />
                    </Form>
                </div>
            </div>
        )
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
)(PhotoControlForms);