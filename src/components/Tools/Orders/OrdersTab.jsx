import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import OrdersTable from "./OrdersTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

class OrdersTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsValue: 0,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      tabsValue: newValue,
    });
  };

  render() {
    return (
      <div className="orders-tabs">
        <AppBar position="static" color="default" className="">
          <Tabs
            value={this.state.tabsValue}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Клиент" {...a11yProps(0)} />
            <Tab label="Водитель" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.tabsValue} index={0}>
          <div className="orders-table">
            <OrdersTable />
          </div>
        </TabPanel>
        <TabPanel value={this.state.tabsValue} index={1}>
          <OrdersTable />
        </TabPanel>
      </div>
    );
  }
}

export default OrdersTab;
