
import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'

class CheckBoxInput extends React.Component {

    render() {
        return (
            <FormGroup row className="checbox-section">
                <FormControlLabel
                    control={<Checkbox checked name="checkedA" style={{color : '#00b63d'}}/>}
                    label="Нет GPS"
                />
                <FormControlLabel
                    control={<Checkbox checked name="checkedA" style={{color : '#00b63d'}}/>}
                    label="Нет интернета"
                />
            </FormGroup>
        )
    }
}

export default CheckBoxInput;
