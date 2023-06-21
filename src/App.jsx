import './App.css'
import shoplogo from './assets/logo.svg'
import shopcart from './assets/cart.svg'

import ShoppingCart from './components/ShoppingCart'
import ShoppingList from './components/ShoppingList'
import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ListIcon from '@mui/icons-material/List';
import ReplayIcon from '@mui/icons-material/Replay';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
export default function App() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='zoom'>
      <div className='lefttabs'>
        <div>
          <img src={shoplogo} alt="shoppingifylogo" />
        </div>
        <div className='tabs'>
          {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
            <Tabs
              orientation="vertical" 
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example">
              <Tab className='icontab' icon={<ListIcon />} value="1" />
              <Tab className='icontab' icon={<ReplayIcon />} value="2" />
              <Tab className='icontab' icon={<AssessmentOutlinedIcon />} value="3" />
            </Tabs>
          {/* </Box> */}
        </div>
        <div>
          <img className='shopcart' src={shopcart} alt="shoppingcart" />
        </div>
      </div>
      <div className='mainbody'>
        <TabContext value={value}>
          <TabPanel value="1"><ShoppingList/></TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </div>
      <div className='rightlist'>
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  )
}
