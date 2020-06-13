import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl, MenuItem, Input, Checkbox, Select, ListItemText, Chip, } from '@material-ui/core/';

class MuiMultiSelectField extends React.Component {
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
        const { visible, onBlur, onChange, variant, options, selectedSections, value } = this.props;
        if (!visible) {
            return null;
        }
        return (
            <FormControl >
                <Select
                    id="demo-mutiple-checkbox"
                    className="mui-multiple-select"
                    multiple
                    onChange={onChange}
                    onBlur={onBlur}
                    value = {value}
                    variant={variant}
                    input={<Input />}
                    renderValue={selected => (
                        <div className="chips">
                            {selected.map(value => (
                                <Chip
                                    deletable="true"
                                    key={value}
                                    label={value}
                                    onDelete={() => {
                                        let filterSections = selectedSections.filter(item => item !== value);
                                        this.setState({
                                            selectedSections: filterSections
                                        });
                                    }}
                                />
                            ))}
                        </div>
                    )}
                >
                    {options.map(option => (
                        <MenuItem key={option.id} value={option.name}>
                            <Checkbox color="primary"  checked={selectedSections.indexOf(option.name) > -1}  />
                            <ListItemText primary={option.name} className="multi-selection-widget-list-item" />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}

function mapStateToProps(state) {
    return {
        trialExpired: state.uiStorage.trialExpired
    };
}

export default connect(mapStateToProps)(MuiMultiSelectField);