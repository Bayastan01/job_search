import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
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
export default function Jobs(props) {
  const [open, setOpen] =useState(false);
  const [todos, setTodos] =useState(props.todo);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(todos)
  return (
    <div>
       {
        todos.map((todo)=>{
          <Card sx={{ maxWidth: "100%" ,marginTop:'10%'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {todo.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}><span>Показать контакты</span></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {todo.username}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{color:'blue'}}>
              {todo.number}
            </Typography>
          </Box>
        </Modal>
      </CardActions>
    </Card>
        })
       }
    </div>
  )
}
