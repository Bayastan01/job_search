import React from 'react'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import {NavLink } from "react-router-dom";
import ListItemText from '@mui/material/ListItemText';
import './sity.css'
const img =
  [{
      "img":"https://janejacksoncoach.com/wp-content/uploads/2015/01/JJC-JOB-SEARCH-ONLINE-PIC.jpg",
      "name":'Jobs',
  }]
export default function Sity({value, onclickCategory},open) {
 
  return (
    <div>
      <Divider />
        <List>
        {img.map((item,i) => (
          
            <ListItem  disablePadding sx={{ display: 'block' }} 
                             key={i} onClick={() => onclickCategory(i)} className={value === i ? 'active' :''}
            >
            <NavLink to={item.name} style={{ textDecoration: 'none' ,color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                key={i} onClick={() => onclickCategory(i)} className={value === i ? 'active' : ''}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  
                >
                <Avatar
                      alt="Remy Sharp"
                      src={item.img}
                      sx={{ width: 26, height: 26 }}

                    />
                  
                </ListItemIcon>
                <ListItemText 
                  primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
          </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
    </div>
  )
}
