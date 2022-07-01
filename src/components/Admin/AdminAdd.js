import { db } from "../../farebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
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
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const [loding,setLoding] = useState(true);

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
      uuid,
    });
    setName("");
    setDescription("");
    setNumber("");
    setUsername("");
  };

  const handleDelete = (todo) => {
    console.log(todo)
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
    {todos.map((todo,index) => (
      <>
        <Jobs todo={todos}/>
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
        label="Назавние реклам"
        value={name} onChange={handleTodoChange1}
      />
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