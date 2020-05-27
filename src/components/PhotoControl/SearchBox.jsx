import React, { Fragment } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { InputBase } from '@material-ui/core'

class SearchBoxInput extends React.Component {

    render() {
        return (
            <Fragment>
                <SearchOutlinedIcon style={{ color: '#00b63d' }} className="search-loop"/>
                <InputBase
                    placeholder="Search…"
                    key={1}
                    className="search-box-input"
                    onChange={this.searchboxChange}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Fragment>
        )
    }
}

export default SearchBoxInput;