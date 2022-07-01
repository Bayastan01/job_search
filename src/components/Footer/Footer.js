import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import ButtonGroup from '@mui/material/ButtonGroup';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './footer.css'
// import { makeStyles } from '@mui/material';
const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'2%'
};

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Fab variant="extended" size="small" color="primary" aria-label="add"onClick={handleOpen} >
          <NavigationIcon sx={{ mr: 1 }}  />
          Отправить заявка на рекламу
        </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 800,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" className='modalText'>
              Zayavka
            </Typography>
            <Divider />
                <Divider />
            <ButtonGroup disableElevation variant="contained">
             <div >
              <Button className='button' onClick={()=>handleClose()}>Two</Button>
             </div>
            </ButtonGroup>
          </Box>
        </Fade>
      </Modal>
    </>
        
      
  )
}
