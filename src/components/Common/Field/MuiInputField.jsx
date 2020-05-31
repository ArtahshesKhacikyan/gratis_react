import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import inputTypes from '../../../resources/inputType';

class MuiInputField extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        disabled: PropTypes.bool,
        visible: PropTypes.bool,
        id: PropTypes.string,
        required: PropTypes.bool,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object]),
        error: PropTypes.string,
        variant: PropTypes.string,
        maxLength: PropTypes.number,
        readOnly: PropTypes.bool
    }

    constructor(props) {
        super(props);
        let type = 'text';

        switch (props.type) {
        case inputTypes.muiNumberField:
            type = 'number';
            break;
        case inputTypes.muiEmailField:
            type = 'email';
            break;
        case inputTypes.muiPasswordField:
            type = 'password';
            break;
        }

        this.state = {
            showPassword: false,
            type
        };
    }

    static defaultProps = {
        visible: true,
        variant: 'outlined',
        readOnly: false,
        value: ''
    }

    toggleState(stateName) {
        let state = {
            [stateName]: !this.state[stateName]
        };
        this.setState(state);
    }

    isPasswordType() {
        return 'password' === this.state.type;
    }

    render() {
        const { visible, className, label, name, id, required, onChange, onBlur, disabled, error, variant, value, maxLength, readOnly } = this.props;
        if (!visible) {
            return null;
        }

        return (
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className={`form-cell ${className ? className : ''}`}>
                    <TextField
                        className="mui-textfield"
                        size='small'
                        required={required}
                        label={label}
                        variant={variant}
                        type={this.isPasswordType() && this.state.showPassword ? 'text' : this.state.type}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        id={id || name}
                        disabled={disabled}
                        error={!!error}
                        helperText={error}
                        value={value}
                        inputProps= {{
                            maxLength: maxLength,
                            required: false, // getting rid of browser checks for required fields
                            readOnly: readOnly,
                        }}
                        InputProps={{
                            'endAdornment': this.isPasswordType() ? (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.toggleState.bind(this, 'showPassword')}
                                        edge="end"
                                        tabIndex="-1"
                                    >
                                        {this.state.showPassword ?
                                            <Visibility className="light-icon" fontSize="small" /> :
                                            <VisibilityOff className="light-icon" fontSize="small" />
                                        }
                                    </IconButton>
                                </InputAdornment>) : null,
                        }}
                    />
                </Col>
            </Row>
        );
    }
}


export default MuiInputField;