import './style.css'
import Trash from '../../assets/img/trash.png'

function Home() {
  const users = [{
    id: '2314tr42',
    name: 'Rodolfo',
    age: 33,
    email: 'rod@email.com'
  },

  {
    id: '2219vt92',
    name: 'Pedro',
    age: 21,
    email: 'ped@email.com'
  },

    {
    id: '2113vt92',
    name: 'Paulo',
    age: 25,
    email: 'paulo@email.com'
  }
]


  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="name" type='text' placeholder='Nome'/>
        <input name="age" type='number' placeholder='Idade'/>
        <input name="email" type='email' placeholder='E-mail'/>
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
      <div key={user.id} className='card'>
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>E-mail: <span>{user.email}</span></p>
        </div>
        <button>
          <img src={Trash} alt="" />
        </button>
      </div>    
      ))}
    </div>
    
  )
}

export default Home
