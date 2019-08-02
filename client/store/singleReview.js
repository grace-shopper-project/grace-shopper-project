// const axios=require('axios');

// const ADD_REVIEWS = 'ADD_REVIEWS';

// export const addReview = review => ({
//  type: ADD_REVIEWS,
//  review
// })

// export const submitReview = review =>  {
//     try {
//      const response = await axios.post("api/reviews", review);
//      dispatch(addReview(response.data));
//     }catch(err){
//       console.log("There's an error with submitReview")
//     }
//   }
//   const singleReviewReducer = (state = [], action) => {
//     switch(action.type){
//        case ADD_REVIEWS:
//        return [...state, action.review]
//       default:
//        return state;
//     }
//   };

//   export default singleReviewReducer
