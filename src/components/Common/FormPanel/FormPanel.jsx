
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Media from 'react-media';
import { connect } from 'react-redux';

import Field from '../Field/Field';
import fieldTypes from '../../../resources/fieldTypes';

class FormPanel extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        infoText: PropTypes.string,
        fields: PropTypes.object.isRequired,
        mobileLayout: PropTypes.array.isRequired,
        tabletLayout: PropTypes.array.isRequired,
        desktopLayout: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        // handleFileChange: PropTypes.func,
        className: PropTypes.string,
        storage: PropTypes.object,
        errors: PropTypes.object,
        touched: PropTypes.object,
        disabled: PropTypes.bool
        // files: PropTypes.object
    }

    renderRows = (rows, sizes) => {
        let formRows = [];
        rows.forEach((row, index) => {
            formRows.push(
                <Row key={index} className={`fields-row ${row.classname}`}>
                    {this.renderCols(row.cols, sizes)}
                </Row>
            );
        });
        return formRows;
    }

    getDefaultSize = (fields) => {
        let sum = 0;
        let haveNoSizeCount = 0;
        fields.forEach((field) => {
            if (field.size) {
                sum += field.size;
            } else {
                ++haveNoSizeCount;
            }
        });

        const defaultSize = Math.ceil((12 - sum) / haveNoSizeCount);

        if (haveNoSizeCount * defaultSize + sum > 12) {
            // eslint-disable-next-line no-console
            console.log('Warning: columns sizes count > 12, so You have wrapped rows. Check Your layout');
        }

        return defaultSize;
    }

    renderCols = (fields, sizes) => {
        const defaultSize = this.getDefaultSize(fields);
        let colFields = [];
        fields.forEach(field => {
            let opts = {};
            sizes.forEach(viewport => {
                let size = defaultSize;
                if (field.size) {
                    size = field.size;
                }
                opts[viewport] = size;
            });
            // console.log("This err", this.props.errors)
            // console.log("Fild name err", field.name)

            colFields.push(
                <Col key={field.name} {...opts} className={`field-col ${field.className || ''}`}>
                    {fieldTypes.htmlContentType === this.props.fields[field.name].type ?
                        <Field field={this.props.fields[field.name]} /> :
                        <Field
                            value={this.props.storage[field.name]}
                            handleChange={this.props.handleChange}
                            field={this.props.fields[field.name]}
                            error={this.props.errors[field.name] || false}
                            touched={this.props.touched[field.name]}
                            handleBlur={this.props.handleBlur}
                            disabled={this.props.disabled}
                            // handleFileChange={this.props.handleFileChange}
                            // files={this.props.files}
                        />
                    }
                </Col>
            );
        });
        return colFields;
    }

    render = () => {
        const { title, mobileLayout, tabletLayout, desktopLayout, className } = this.props;
        return (
            <div className={`panel form-panel ${className}`}>
                {title && <p className='panel-title'>{title}</p>}
                <div className='panel-body'>
                    <Media query='(max-width: 767px)'>
                        {matches =>
                            matches && this.renderRows(mobileLayout, ['xs'])
                        }
                    </Media>

                    <Media query='(min-width: 768px) and (max-width: 1199px)'>
                        {matches =>
                            matches && this.renderRows(tabletLayout, ['sm', 'md'])
                        }
                    </Media>

                    <Media query='(min-width: 1200px)'>
                        {matches =>
                            matches && this.renderRows(desktopLayout, ['lg'])
                        }
                    </Media>
                </div>
            </div>
        );
    }
}

export default FormPanel;
