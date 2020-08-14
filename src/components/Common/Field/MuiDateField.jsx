
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Event from '@material-ui/icons/Event';
import moment from 'moment';

class MuiDateField extends React.Component {
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
        value: PropTypes.object,
        minDate: PropTypes.object,
        maxDate: PropTypes.string,
        error: PropTypes.string,
        variant: PropTypes.string,
        disableFuture: PropTypes.bool
    }

    format = 'MM/DD/YYYY';

    static defaultProps = {
        visible: true,
        variant: 'outlined',
        value: null
    }

    state = {
        value: this.props.value,
        opened: false
    }

    handleDateChange = (date, name, onChange) => {
        const value = moment(date, this.format);

        this.setState({
            value
        });

        onChange({
            target: { name, value }
        });
    }

    onClose = () => {
        this.setState({
            opened: false
        });
    }

    onOpen = () => {
        this.setState({
            opened: true
        });

    }

    render() {
        const { visible, className, label, name, required, onBlur, onChange, disabled, error, variant, minDate, maxDate, disableFuture } = this.props;
        if (!visible) {
            return null;
        }

        const defaultMaterialTheme = createMuiTheme({
            palette: {
                primary: blue
            },
        });

        return (
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className={`form-cell ${className ? className : ''}`}>
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <DatePicker
                                className='mui-textfield mui-datefield'
                                size='small'
                                format={this.format}
                                autoOk={true}
                                disableFuture={disableFuture}
                                variant='inline'
                                minDate={minDate}
                                maxDate={maxDate}
                                inputVariant={variant}
                                name={name}
                                label={label}
                                value={this.state.value}
                                onChange={(date) => this.handleDateChange(date, name, onChange)}
                                onBlur={!this.state.opened ? onBlur : null}
                                required={required}
                                helperText={error}
                                error={!!error}
                                disabled={disabled}
                                onClose={this.onClose}
                                onOpen={this.onOpen}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton edge="end" tabIndex="-1">
                                                <Event />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </ThemeProvider>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        // trialExpired: state.uiStorage.trialExpired
    };
}

export default connect(mapStateToProps)(MuiDateField);