import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Orders from './Orders/Orders';
import General from './General/General';
import ToolsHeader from './ToolsHeader';

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
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


class ToolsTabSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsValue: 0
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            tabsValue: newValue
        })
    }

    render() {
        return (
            <div className='tools-header'>
                <AppBar position="static" color="default" className='tools-tabs'>
                    <Tabs
                        value={this.state.tabsValue}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Общие" {...a11yProps(0)} />
                        <Tab label="ТС" {...a11yProps(1)} />
                        <Tab label="Фотоконтроль" {...a11yProps(2)} />
                        <Tab label="Верификация" {...a11yProps(3)} />
                        <Tab label="Баланс" {...a11yProps(4)} />
                        <Tab label="Поколение" {...a11yProps(5)} />
                        <Tab label="Заказы" {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
                <ToolsHeader />
                <TabPanel value={this.state.tabsValue} index={0}>
                    <General />
                </TabPanel>
                <TabPanel value={this.state.tabsValue} index={1}>
                    Item Two
      </TabPanel>
                <TabPanel value={this.state.tabsValue} index={2}>
                    Item Three
      </TabPanel>
                <TabPanel value={this.state.tabsValue} index={3}>
                    Item Four
      </TabPanel>
                <TabPanel value={this.state.tabsValue} index={4}>
                    Item Five
      </TabPanel>
                <TabPanel value={this.state.tabsValue} index={5}>
                    Six
                </TabPanel>
                <TabPanel value={this.state.tabsValue} index={6}>
                    <Orders />
                </TabPanel>

            </div>
        );
    }
}

export default withRouter(ToolsTabSection);