import React from 'react';
import { InputLabel, Select, FormControl, MenuItem, Checkbox, ListItemText, Chip, Input } from '@material-ui/core'

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSections: []
        }
    }

    handleChange = (event) => {
        this.setState({ selectedSections: event.target.value });
    };

    render() {
        const {label} =this.props
        return (
            <FormControl className="selec-multiple">
                <InputLabel htmlFor="select-multiple-native">
                    {label}
                </InputLabel>
                <Select
                    className="apply-multi-selection-select"
                    multiple
                    value={this.state.selectedSections}
                    input={<Input />}
                    displayEmpty={true}
                    onChange={this.onSelectSection}
                    renderValue={selected => (
                        <div className="chips">
                            {selected.length ? selected.map(value => {
                                return <Chip
                                    deletable="true"
                                    key={value}
                                    label={JSON.parse(value).name}
                                    onDelete={() => {
                                        let filterSections = this.state.selectedSections.filter(item => item !== value);
                                        this.setState({
                                            selectedSections: filterSections
                                        });
                                    }}
                                />;
                            }) : <p className='chip-placeholder'></p>}
                        </div>
                    )}
                >
                    {names.map(option => (
                        <MenuItem key={option} value={option} className="multi-mix-select">
                            <Checkbox color="primary" />
                            <ListItemText primary={option} className="multi-selection-widget-list-item" />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )

    }
}
export default FormInput;