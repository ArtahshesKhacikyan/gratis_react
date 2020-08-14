import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

class MuiTimeField extends React.Component {
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
        error: PropTypes.string,
        variant: PropTypes.string,
        disableFuture: PropTypes.bool
    }

    format = 'hh:mm A';

    static defaultProps = {
        visible: true,
        variant: 'outlined',
        value: null
    }

    constructor(props) {
        super(props);
        let pureDate = null;
        if (props.value) {
            pureDate = props.value;
        }
        this.state = {
            value: props.value,
            pureDate
        };
    }

    handleEvent = (date, name, onChange) => {
        const pureDate = this.state.pureDate;
        let value = date;
        if (date && pureDate) {
            value = moment([
                pureDate.year(),
                pureDate.month(),
                pureDate.date(),
                date.hours(),
                date.minutes(),
                date.seconds()
            ]);
        }
        this.setState({
            value
        });
        onChange({
            target: { name, value }
        });
    }

    onClose = () => {
        const { name, onBlur } = this.props;
        onBlur({
            target: { name, value : this.state.value }
        });
    }

    render() {
        const { visible, className, name, onChange, variant, label, required, error, onBlur } = this.props;
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
                            <KeyboardTimePicker
                                className='mui-textfield mui-timefield'
                                size='small'
                                name={name}
                                value={this.state.value}
                                onBlur={onBlur}
                                onChange={(date) => this.handleEvent(date, name, onChange)}
                                inputVariant={variant}
                                ampm={true}
                                label={label}
                                variant='inline'
                                autoOk={true}
                                mask="__:_ M"
                                required={required}
                                helperText={error}
                                error={!!error}
                                onClose={this.onClose}
                                keyboardIcon={<ScheduleIcon />}
                                KeyboardButtonProps={{
                                    tabIndex: '-1'
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

export default connect(mapStateToProps)(MuiTimeField);