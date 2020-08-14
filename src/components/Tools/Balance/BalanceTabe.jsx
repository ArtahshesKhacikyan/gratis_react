import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import AllBalance from "./AllBalance/AllBalance";
import Balance from "./Balance";
import Deposit from "./Deposit/Deposit";
import WriteOff from "./WriteOff/WriteOff";

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

class BalanceTabe extends React.Component {
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
      <div className="balance-tabs">
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
            <Tab label="Все" {...a11yProps(0)} />
            <Tab label="Пополнение" {...a11yProps(1)} />
            <Tab label="Списание" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <div className="balance-info">
          <form>
            <label>Баланс:</label>
            <label>Бизнес баланс:</label>
            <label>Личный баланс:</label>
            <label>Доступная сумма:</label>
          </form>
        </div>
        <TabPanel value={this.state.tabsValue} index={0}>
          <AllBalance />
        </TabPanel>
        <TabPanel value={this.state.tabsValue} index={1}>
          <Deposit />
        </TabPanel>
        <TabPanel value={this.state.tabsValue} index={2}>
          <WriteOff />
        </TabPanel>
      </div>
    );
  }
}

export default BalanceTabe;
