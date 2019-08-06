const axios = require('axios')

const GET_CATEGORIES = 'GET_CATEGORIES'

const getCategories = categories =>({
  type: GET_CATEGORIES,
  categories
})

export const fetchCategories = () =>{
  return async dispatch =>{
   try{
      const {data} = await axios.get('/api/category')
      dispatch(getCategories(data))
   } catch(err){
     console.error(err)
   }
  }
}

export default function categoryReducer(state = [], action){
  switch(action.type){
    case GET_CATEGORIES:
      return action.categories;
    default:
      return state
  }
}
