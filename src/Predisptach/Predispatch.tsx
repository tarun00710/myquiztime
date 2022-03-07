import axios from 'axios';

export const updateScore = async(score:number,topic:any,userId:any,dispatch:any) => {
    try{
    const response = await axios.post(`https://quiz-fun-app.herokuapp.com/user/${userId._id}/topic/${topic}/score/${score}`)
    if(response.status === 200)
        dispatch({type:"USERINFO",payload:response.data.findUser})
    }
    catch(err){
        console.log(err)
    }

}