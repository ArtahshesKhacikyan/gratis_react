import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class MuiCheckbox extends React.Component {
    static propTypes = {
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        className: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        visible: PropTypes.bool,
        id: PropTypes.string,
        checked: PropTypes.bool
    }

    static defaultProps = {
        visible: true,
        checked: false
    }

    render() {
        const { visible, className, label, name, id, onChange, disabled, checked } = this.props;
        if (!visible) {
            return null;
        }

        return (
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className={`form-cell ${className ? className : ''}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id={id}
                                checked={checked}
                                onChange={onChange}
                                name={name}
                            />
                        }
                        disabled={disabled}
                        label={label}
                        className="mui-checkbox"
                    />
                </Col>
            </Row>
        );
    }
}

export default MuiCheckbox;