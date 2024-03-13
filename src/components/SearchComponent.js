import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
  //setear los hooks useState
  //para traernos los datos de usuarios de jsonplaceholder
  const [ users, setUsers ] = useState([])
  //para las busquedas
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'https://jsonplaceholder.typicode.com/users'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    
    setUsers(data)
  } 
  //llamamos a la funcion para mostrar los valores de data del console.log
  //showData()  
   //función de búsqueda que va insertando
  const searcher = (e) => {
      setSearch(e.target.value)   
      //console.log(e.target.value)
  }
   //metodo de filtrado 1 ver video asociado
   //esta línea de código filtra el array users y devuelve un nuevo array (results) que contiene solo los usuarios cuyos nombres coinciden (de forma parcial o completa, sin importar mayúsculas o minúsculas) con la cadena de búsqueda proporcionada.
   /*  let results = []
   if(!search)
   {
       results = users
   }else{
        results = users.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

   //metodo de filtrado 2 con operadores ternarios
   const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  //input para la busqueda
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>NAME</th>
                    <th>USER NAME</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default SearchComponent