import React from 'react'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import {Link } from "react-router-dom";
import ListItemText from '@mui/material/ListItemText';
import './sity.css'
const img = [{
  "img":"https://janejacksoncoach.com/wp-content/uploads/2015/01/JJC-JOB-SEARCH-ONLINE-PIC.jpg",
  "name":'Все работы'},
 {"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/MA_Route_18.svg/2048px-MA_Route_18.svg.png",
  "name":'От 18 лет'},
 { "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsKf0nIBOysXeU7RmO5dPMVSlbc3HdlRQzA&usqp=CAU",
  "name":'От 30 лет'},
  {"img":"https://i.pinimg.com/736x/a8/aa/e8/a8aae88c70d14564b5d8acbbc6620742.jpg",
  "name":'До 50 лет'},
             ]
export default function Sity({value, onclickCategory},open) {
  return (
    <div>
      <Divider />
        <List>
        {img.map((item,i) => (
          
            <ListItem  disablePadding sx={{ display: 'block' }} 
               key={i} onClick={() => onclickCategory(i)} className={value === i ? 'active' :''}
            >
            <Link to={`/jobs${value}`} style={{ textDecoration: 'none' ,color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 58,
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
          </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
    </div>
  )
}
