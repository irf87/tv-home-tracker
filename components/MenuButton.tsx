import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import AppBar from '@mui/material/AppBar';

function MenuButton(){
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Tabs
        value="tab-list"
        onChange={() => {}}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab id="tab-list" label="Item One" />
        <Tab id="tab-modify" label="Item Two" />
      </Tabs>
    </AppBar>
  );
}

export default MenuButton;