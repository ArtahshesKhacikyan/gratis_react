import React from "react";
import { withRouter } from "react-router-dom";
import strings from "../../resources/strings";
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Checkbox,
  ListItemText,
  Chip,
  Input,
} from "@material-ui/core";
import SearchBox from "./SearchBox";
import PhotoControlTable from "./PhotoControlTable";

const names = ["Ожидающие", "Отклоненные"];

class PhotoControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      selectedSections: [],
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  handleChange = (event) => {
    this.setState({ selectedSections: event.target.value });
  };

  renderSerchByStatus() {
    return (
      <FormControl className="selec-multiple">
        <InputLabel htmlFor="select-multiple-native">Статус: (все)</InputLabel>
        <Select
          className="apply-multi-selection-select"
          multiple
          value={this.state.selectedSections}
          input={<Input />}
          displayEmpty={true}
          onChange={this.onSelectSection}
          renderValue={(selected) => (
            <div className="chips">
              {selected.length ? (
                selected.map((value) => {
                  return (
                    <Chip
                      deletable="true"
                      key={value}
                      label={JSON.parse(value).name}
                      onDelete={() => {
                        let filterSections = this.state.selectedSections.filter(
                          (item) => item !== value
                        );
                        this.setState({
                          selectedSections: filterSections,
                        });
                      }}
                    />
                  );
                })
              ) : (
                <p className="chip-placeholder"></p>
              )}
            </div>
          )}
        >
          {names.map((option) => (
            <MenuItem key={option} value={option} className="multi-mix-select">
              <Checkbox color="primary" />
              <ListItemText
                primary={option}
                className="multi-selection-widget-list-item"
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  renderSerchByCountry() {
    return (
      <FormControl className="selec-multiple">
        <InputLabel htmlFor="select-multiple-native">Страна: (все)</InputLabel>
        <Select
          className="apply-multi-selection-select"
          multiple
          value={this.state.selectedSections}
          input={<Input />}
          displayEmpty={true}
          onChange={this.onSelectSection}
          renderValue={(selected) => (
            <div className="chips">
              {selected.length ? (
                selected.map((value) => {
                  return (
                    <Chip
                      deletable="true"
                      key={value}
                      label={JSON.parse(value).name}
                      onDelete={() => {
                        let filterSections = this.state.selectedSections.filter(
                          (item) => item !== value
                        );
                        this.setState({
                          selectedSections: filterSections,
                        });
                      }}
                    />
                  );
                })
              ) : (
                <p className="chip-placeholder"></p>
              )}
            </div>
          )}
        >
          {names.map((option) => (
            <MenuItem key={option} value={option} className="multi-mix-select">
              <Checkbox color="primary" />
              <ListItemText
                primary={option}
                className="multi-selection-widget-list-item"
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  render() {
    return (
      <div className="main-photocontrol">
        <h2>{strings.photoControlHeader}</h2>
        <div>
          <div className='filter-section'>
            <SearchBox />
            {this.renderSerchByStatus()}
            {this.renderSerchByCountry()}
          </div>
          <PhotoControlTable />
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoControl);
