import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

class HtmlContentField extends React.Component {
    static propTypes = {
        html: PropTypes.element.isRequired,
        className: PropTypes.string,
        visible: PropTypes.bool
    }

    static defaultProps = {
        visible: true
    }

    render() {
        const { html, className, visible } = this.props;
        if (!visible) {
            return null;
        }
        return (
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className={className}>{html}</Col>
            </Row>
        );
    }

}

export default HtmlContentField;
