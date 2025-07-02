import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/img/trash.png'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([]); 

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers(){    
    const usersFromApi = await api.get('/users');

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
      await api.post('/users', {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value
      });

      getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers();
  }


  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="container">
      <form onSubmit={(e) => {
        e.preventDefault();

        if (
          inputName.current.value &&
          inputAge.current.value &&
          inputEmail.current.value
        ) {
          createUsers();
        }
        }}>
        <h1>Cadastro de Usuários</h1>
        <input required name="name" type="text" placeholder="Nome" ref={inputName} />
        <input required name="age" type="number" placeholder="Idade" ref={inputAge} />
        <input required name="email" type="email" placeholder="E-mail" ref={inputEmail} />
        <button type="submit">Cadastrar</button>
      </form>


      {users.map(user => (
      <div key={user.id} className='card'>
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>E-mail: <span>{user.email}</span></p>
        </div>
        <button onClick={() => deleteUsers(user.id)}>
          <img src={Trash} alt="" />
        </button>
      </div>    
      ))}
    </div>
    
  )
}

export default Home
