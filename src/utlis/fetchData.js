import axios from 'axios';

export const fetchData = async (token = '133|lQ6hiNPMLOOZPR1MgQG81VxiFRRBs8NO5xhj8DMC' ) => {
      const data = await axios.get('https://tasks-crud.academlo.com/api/tasks', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
  return data.data;

}



// export default fetchData;