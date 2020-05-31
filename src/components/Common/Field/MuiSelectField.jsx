import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

class MuiSelectField extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        className: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        disabled: PropTypes.bool,
        visible: PropTypes.bool,
        id: PropTypes.string,
        required: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        variant: PropTypes.string,
        options: PropTypes.array.isRequired
    }

    static defaultProps = {
        visible: true,
        variant: 'outlined'
    }

    render() {
        const { visible, className, label, name, id, onBlur, onChange, disabled, error, variant, options, value, required } = this.props;
        if (!visible) {
            return null;
        }

        return (
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className={`form-cell ${className ? className : ''}`}>
                    <FormControl
                        variant={variant}
                        error={!!error}
                        disabled={disabled}
                        required={required}
                        className='mui-textfield'
                        size='small'
                    >
                        <InputLabel htmlFor={id || name}>{label}</InputLabel>
                        <Select
                            native
                            onChange={onChange}
                            onBlur={onBlur}
                            label={label}
                            value={value}
                            inputProps={{
                                name: name,
                                id: id || name
                            }}
                        >
                            <option value='' hidden></option>
                            <option disabled>{'Select ' + label}</option>
                            {options.map(option => {
                                return <option key={option.key} value={option.key}>{option.value}</option>;
                            })}
                        </Select>
                        <FormHelperText>{error}</FormHelperText>
                    </FormControl>
                </Col>
            </Row >
        );
    }
}

function mapStateToProps(state) {
    return {
        trialExpired: state.uiStorage.trialExpired
    };
}

export default MuiSelectField;