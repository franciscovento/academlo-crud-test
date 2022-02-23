import axios from 'axios';

export const fetchData = async (token) => {
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


export const editStatus = async (task_id=28, status_id=3, token='205|MV5NLfU5LfamyCoLeog1K6DsLPpVIqh1mBVEcFIT') => {
  try{
    const data = await axios.post(`https://tasks-crud.academlo.com/api/tasks/${task_id}/status/${status_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }})

      return data.data;

  }  catch(error){
    console.log(error)
  }
}

