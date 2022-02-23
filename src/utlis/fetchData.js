import axios from 'axios';

export const fetchData = async (token = '133|lQ6hiNPMLOOZPR1MgQG81VxiFRRBs8NO5xhj8DMC' ) => {
      try {
        const data = await axios.get('https://tasks-crud.academlo.com/api/tasks', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return data.data;
      } catch (error) {
        console.log(error)
      }

}


export const userLoggin = async (email, password) => {
   try{
    const token = await axios.post('https://tasks-crud.academlo.com/api/auth/login',{
      email,
      password
    })

    return token.data;
   } catch (error){
     console.log(error)
   }
}


// export default fetchData;