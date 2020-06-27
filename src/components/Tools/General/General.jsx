import React from 'react'
import { Formik, Form } from 'formik';
import FormPanel from '../../Common/FormPanel/FormPanel';
import * as Yup from "yup";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import strings from '../../../resources/en/strings';
import MobileLayout from "./Layout/Mobile-layout";
import TabletLayout from "./Layout/Tablet-layout";
import DesktopLayout from "./Layout/Desktop-layout";
import PersonalDataField from "./PersonalDataField"
import CarDataMobileLayout from './Layout/CarDataMobile-layout';
import CarDataTabletLayout from './Layout/CarDataTablet-layout ';
import CarDataDesktopLayout from './Layout/CarDataDesktop-layout';
import CarDataField from './CarDataField';
import DriverLicense from './DriverLicense';
import DriverLicenseDesktopLayout from './Layout/DriverLicenseDesktop-layout';
import DriverLicenseMobileLayout from './Layout/DriverLicenseMobile-layout';
import DriverLicenseTabletLayout from './Layout/DriverLicenseTablet-layout'
import VerificationData from './VerificationData';
import VerificationDesktopLayout from './Layout/VerificationDesktop-layout';
import VerificationMobileLayout from './Layout/VerificationMobile-layout';
import VerificationTabletLayout from './Layout/VerificationTablet-layout'

class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValues: null,
            validationSchema: null,
        }
    }

    componentDidMount = async () => {
        const { initialValues, validationSchema } = this.init();
        this.setState({
            initialValues,
            validationSchema,
        });
    }

    init = () => {
        const validationShape = {};
        const initialValues = {};
        Object.values(PersonalDataField).forEach((value) => {
            validationShape[value.name] = value.schema;
            initialValues[value.name] = value.initialValue;
        });
        Object.values(CarDataField).forEach((value) => {
            validationShape[value.name] = value.schema;
            initialValues[value.name] = value.initialValue;
        });
        Object.values(VerificationData).forEach((value) => {
            validationShape[value.name] = value.schema;
            initialValues[value.name] = value.initialValue;
        });
        return {
            initialValues,
            validationSchema: Yup.object().shape(validationShape),
        };
    }

    render() {
        const { initialValues, validationSchema } = this.state;
        if (!initialValues || !validationSchema) return "";
        return (
            <div className="tools-general">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-9'>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                enableReinitialize={true}
                            >
                                {(data) => {
                                    console.log("DAta", data)
                                    return (
                                        <Form>
                                            <p className="personal-data-section-paragraph">
                                                {strings.personalDataText}
                                            </p>
                                            <FormPanel
                                                mobileLayout={MobileLayout}
                                                tabletLayout={TabletLayout}
                                                desktopLayout={DesktopLayout}
                                                storage={data.values}
                                                fields={PersonalDataField}
                                                errors={data.errors}
                                                touched={data.touched}
                                                handleChange={(e) =>
                                                    this.handleEvent(e, data, data.handleChange)
                                                }
                                                handleBlur={data.handleBlur}
                                            />
                                            <p className="personal-data-section-paragraph">
                                                {strings.car}
                                            </p>
                                            <FormPanel
                                                mobileLayout={CarDataMobileLayout}
                                                tabletLayout={CarDataTabletLayout}
                                                desktopLayout={CarDataDesktopLayout}
                                                storage={data.values}
                                                fields={CarDataField}
                                                errors={data.errors}
                                                touched={data.touched}
                                                handleChange={(e) =>
                                                    this.handleEvent(e, data, data.handleChange)
                                                }
                                                handleBlur={data.handleBlur}
                                            />
                                            <p className="personal-data-section-paragraph">
                                                {strings.driverLicense}
                                            </p>
                                            <FormPanel
                                                mobileLayout={DriverLicenseMobileLayout}
                                                tabletLayout={DriverLicenseTabletLayout}
                                                desktopLayout={DriverLicenseDesktopLayout}
                                                storage={data.values}
                                                fields={DriverLicense}
                                                errors={data.errors}
                                                touched={data.touched}
                                                handleChange={(e) =>
                                                    this.handleEvent(e, data, data.handleChange)
                                                }
                                                handleBlur={data.handleBlur}
                                            />
                                            <p className="personal-data-section-paragraph">
                                                {strings.verification}
                                            </p>
                                            <FormPanel
                                                mobileLayout={VerificationMobileLayout}
                                                tabletLayout={VerificationTabletLayout}
                                                desktopLayout={VerificationDesktopLayout}
                                                storage={data.values}
                                                fields={VerificationData}
                                                errors={data.errors}
                                                touched={data.touched}
                                                handleChange={(e) =>
                                                    this.handleEvent(e, data, data.handleChange)
                                                }
                                                handleBlur={data.handleBlur}
                                            />
                                            <div className='general-button-section'>
                                                <button className='edit-button'>
                                                    Редактировать
                                        </button>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                        <div className='col-3 all-user-info'>
                            <form action="" className='rate-section'>
                                <label htmlFor="">Следующий Фотоконтроль: </label>
                                <label htmlFor="">Статус верификации</label>
                                <label htmlFor="">Статус Фотоконтроль:</label>
                                <label htmlFor="">Категория:</label>
                            </form>
                            <p className='tarrifs-text'>{strings.tarrifText}</p>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // defaultChecked={checked}
                                            // onChange={this.handleChangeTariffs}
                                            // name={name}
                                            // value={name}
                                            color="primary"
                                        />
                                    }
                                    label='Эконом'
                                />
                                 <FormControlLabel
                                    control={
                                        <Checkbox
                                            // defaultChecked={checked}
                                            // onChange={this.handleChangeTariffs}
                                            // name={name}
                                            // value={name}
                                            color="primary"
                                        />
                                    }
                                    label='Комфорт'
                                />
                                 <FormControlLabel
                                    control={
                                        <Checkbox
                                            // defaultChecked={checked}
                                            // onChange={this.handleChangeTariffs}
                                            // name={name}
                                            // value={name}
                                            color="primary"
                                        />
                                    }
                                    label='Комфорт+'
                                />
                                 <FormControlLabel
                                    control={
                                        <Checkbox
                                            // defaultChecked={checked}
                                            // onChange={this.handleChangeTariffs}
                                            // name={name}
                                            // value={name}
                                            color="primary"
                                        />
                                    }
                                    label='Старт'
                                />
                            </FormGroup>
                            <form action="" className='rate-section'>
                                <label htmlFor="">Рейтинг Kлиент: </label>
                                <label htmlFor="">Рейтинг Водитель:</label>
                                <label htmlFor="">Активность Kлиент:</label>
                                <label htmlFor="">Активность Водитель:</label>
                                <label htmlFor="">Количества Kлиент оценка:</label>
                                <label htmlFor="">Количества Водитель оценок:</label>
                                <div></div>
                                <label htmlFor="">Количество в поколени:</label>
                                <label htmlFor="">Доход из бизнес плана:</label>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default General;