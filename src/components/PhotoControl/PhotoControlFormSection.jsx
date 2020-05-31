import React from "react";
import { withRouter } from "react-router-dom";
import strings from "../../resources/strings";

import { TextField, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';


class PhotoControlFormSection extends React.Component {

    render() {
        return (
            <div className="personal-data-header">
                <div className='personal-data-section'>
                    <div className="photo-control-header">
                        <button className="edit-icon-button">
                            <EditIcon />

                        </button>
                        <p className='edit-icon-section'> Фотоконтроль водителя</p>

                    </div>

                    <p className='personal-data-section-paragraph'>Личные данные</p>
                    <form autoComplete="off">
                        <TextField id="outlined-basic" label="Фамилия*" variant="outlined" />
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                        <TextField id="outlined-basic" label="Имя*" variant="outlined" />
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                    </form>
                    <form autoComplete="off">
                        <TextField id="outlined-basic" label="Серия и номер прав*" variant="outlined" />
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                    </form>
                </div>
                <div className='car-photocontrol-section'>
                    <p className='personal-data-section-paragraph'>Фотоконтроль автомобиля</p>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">Категория*</InputLabel>
                        <Select
                            native
                            // value={state.age}
                            // onChange={handleChange}
                            label="Age"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <TextField id="outlined-basic" label="Номер автомобиля*" variant="outlined" />
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                    </FormControl>
                    <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="category"
                        />
                    <FormControl variant="outlined" className="car-category-section">
                       
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">Марка*</InputLabel>
                        <Select
                            native
                            // value={state.age}
                            // onChange={handleChange}
                            label="Age"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="category"
                        />
                    </FormControl>
                   
                    <FormControl variant="outlined" className="car-category-section">
                        <InputLabel id="demo-simple-select-outlined-label">Марка*</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value='10'
                            // onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                        <InputLabel id="demo-simple-select-outlined-label">Модель*</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value='10'
                            // onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                    </FormControl>
                    <FormControl variant="outlined" className="car-category-section">
                        <InputLabel id="demo-simple-select-outlined-label">Цвет*</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value='10'
                            // onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                        <InputLabel id="demo-simple-select-outlined-label">Год*</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value='10'
                            // onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                        />
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default withRouter(PhotoControlFormSection);
