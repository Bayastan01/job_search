import React,{useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../redux/Addusername';
import { onValue, ref } from 'firebase/database';
import { db } from '../farebase';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'white',
  border: '2px solid #666',
  boxShadow: '24',
  borderRadius:'10px',
  p: 6,
};

export default function Jobs2() {
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const [todos, setTodos] = useState([]);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const jobs = useSelector(s => s.Addusername.jobs)
  useEffect(() => {
    dispatch(getJobs(todos))
  }, [todos])
  
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((name) => {
          setTodos((oldArray) => [...oldArray, name]);
        });
      }
    });
  }, []);
const jobs2 = jobs.filter(word => word.option == 2 )
console.log(jobs2);

  return (
    <div>
      {
        jobs2.map((jobs)=>{
          return(
            <Card sx={{ maxWidth: "100%" ,marginTop:'10%'}} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {jobs.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {jobs.description}
        </Typography>
      </CardContent>
     
      <div style={{dispaly:'flex'}}>
          <div  style={{marginLeft:'2%'}}>
             Имя: {jobs.username}
           </div>
              <div style={{marginLeft:'2%',color:'blue'}}>
            Тел: {jobs.number}
              </div>
          </div>
         </Card>
          )
        })
      }
    </div>
  )
}
