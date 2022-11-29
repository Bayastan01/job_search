import { db } from "../../farebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import {  Form} from 'react-bootstrap'
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { OutlinedInput } from '@mui/material';
import Modal from '@mui/material/Modal';
import Sceleton from '../Header/Sceleton'
import Jobs from '../Jobs'
import { useDispatch,useSelector } from "react-redux";
// import {addjobs} from '../../redux/Action'
// import {addusername} from '../../redux/Action'
import { Addusername, getJobs } from "../../redux/Addusername";
import { GET_JOBS } from "../../redux/types";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'red',
  border: '2px solid #666',
  boxShadow: '24 greys',
  p: 4,
};
function AdminAdd() {
  const dispatch = useDispatch()
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [option , setOption] = useState('')
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const [loding,setLoding] = useState(true);

  const jobs = useSelector(s => s.Addusername.jobs)
  const handleTodoChange1 = (e) => {
    setName(e.target.value);
  };
  const handleTodoChange4 = (e) => {
    setNumber(e.target.value);
  };
  const handleTodoChange3 = (e) => {
    setUsername(e.target.value);
  };
  const handleTodoChange2 = (e) => {
    setDescription(e.target.value);
  };
  const handleTodoChange5 = (e) => {
    setOption(e.target.value);
  };


  useEffect(() => {
    dispatch(getJobs(todos))
  }, [todos])

  useEffect(() => {
    setLoding(true)
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((name) => {
          setTodos((oldArray) => [...oldArray, name]);
          setLoding(false)
        });
      }
    });
  }, []);

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      description,
      name,
      username,
      number,
      option,
      uuid,
    });
    setName("");
    setDescription("");
    setNumber("");
    setUsername("");
  };

  const handleDelete = (todo) => {
    remove(ref(db,`/${todo.uuid}`));
  };

  const skeletons = [...new Array(1) ].map((_,index) => {
    return (
      <di style={{marginTop:30}}>
        <Sceleton key={index}/>
      </di>
    )
   })
   
  const searchs =  
  <Container>
    {jobs.map((todo) => (
      <>
      <Card sx={{ maxWidth: "100%" ,marginTop:'10%'}} >
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
       
        <Button variant="contained" style={{backgroundColor:'red'}} onClick={() => handleDelete(todo)}>
          delete
        </Button>
      </>
    ))
    }
 </Container>
  return (
    <>
    <Container>
    <Card sx={{ maxWidth: "100%" ,marginTop:'10%'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <TextField
        helperText="H: Офисянт, Дом, Машина, цена."
        id="demo-helper-text-aligned"
        label="Назавние реклам "
        value={name} onChange={handleTodoChange1}
      />
      <Form.Select aria-label="Default select example" className={'mb-3'} onChange={handleTodoChange5} >
                      <option value='0'>Все</option>
                      <option value='1'>от 18 до 20лет</option>
                      <option value="2">от 30 до 40лет</option>
                      <option value="3">до 50лет</option>
        </Form.Select>
        </Typography>
        <TextField
        label="Описание"
        style={{width:'100%',height:'20%'}}
        value={description} onChange={handleTodoChange2}
      />
      </CardContent>
      <CardActions>
      <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
            flexWrap:'wrap'
          }}
      >
      <TextField
          helperText="Имя и номер клиента"
          id="demo-helper-text-aligned"
          label="ФИО"
          value={username} onChange={handleTodoChange3}
      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Номер телефон"
        value={number} onChange={handleTodoChange4}
      />
        <Button variant="contained" onClick={writeToDatabase}>Добавить</Button>
    </Box>
      </CardActions>
    </Card>
    </Container>
    {
       loding ?
       skeletons
          :
       searchs
    }
  </>
  );
}

export default AdminAdd;