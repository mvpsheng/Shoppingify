import Item from './Item'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function ShoppingList() {
  return (
    <div className="shoppinglist">
      <div className="shoppinglistHeader">
        <div className='slogan'>
          <p><span class="first-word">Shoppingify</span> allows you take your shopping list wherever you go</p>
        </div>
        <div>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="search item"
              inputProps={{ 'aria-label': 'search item' }}
            />
          </Paper>
        </div>
      </div>

      <div className='shoppinglistbody'>
        <p className='listcatagories'>Fruit and vegetables</p>  
        <Item value="Banana"></Item>
      </div>

    </div>
  )
}