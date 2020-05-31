import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MuiInputField from './MuiInputField';
import MuiCheckbox from './MuiCheckbox';
import MuiSelectField from './MuiSelectField';
import HtmlContentField from './HtmlContentField';
import inputTypes from '../../../resources/inputType';
import fieldTypes from '../../../resources/fieldTypes';


class Field extends React.Component {
    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object]),
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func,
        field: PropTypes.object.isRequired,
        error: PropTypes.string,
        touched: PropTypes.bool,
        handleFileChange: PropTypes.func,
        files: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            error: props.error ? props.error : '',
        };
    }

    static getDerivedStateFromProps = (props) => {
        if (props.error && props.touched) {
            return { error: props.error };
        }
        return { error: '' };
    }

    handleTimeChange = name => value => {
        this.props.handleChange({ target: { name, value } });
    }

    handleBlur = (e) => {
        this.props.handleBlur(e);
    }

    render = () => {
        const { field, handleChange, value, handleFileChange, files } = this.props;
        if (!field) {
            return null;
        }
        const isRequired = field.schema && field.schema._exclusive.required !== undefined;
        switch (field.type) {
        case inputTypes.muiTextField:
        case inputTypes.muiNumberField:
        case inputTypes.muiEmailField:
        case inputTypes.muiPasswordField:
            return (
                <MuiInputField
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    disabled={field.disabled || this.props.trialExpired}
                    onChange={handleChange}
                    onBlur={this.handleBlur}
                    required={isRequired}
                    value={value}
                    error={this.state.error}
                    readOnly={field.readOnly}
                />
            );
        case inputTypes.muiCheckbox:
            return (
                <MuiCheckbox
                    label={field.label}
                    name={field.name}
                    onChange={handleChange}
                    className='checkbox-input'
                    disabled={field.disabled || this.props.trialExpired}
                    checked={value}
                />
            );
        case inputTypes.muiSelectField:
            return (
                <MuiSelectField
                    label={field.label}
                    name={field.name}
                    value={value}
                    onChange={handleChange}
                    onBlur={this.handleBlur}
                    placeholder={field.placeholder}
                    disabled={field.disabled || this.props.trialExpired}
                    helpText={field.help}
                    options={field.options}
                    required={isRequired}
                    error={this.state.error}
                />
            );
        case fieldTypes.htmlContentType:
            return (
                <HtmlContentField
                    html={field.html}
                    className={field.className}
                    visible={field.visible}
                />
            );
        default:
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Field);
