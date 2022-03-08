import axios from 'axios';

export const updateScore = async(score:number,topic:any,userId:any,dispatch:any) => {
    try{
        console.log(userId)
    const response = await axios.post(`https://quiz-fun-app.herokuapp.com/user/${userId}/topic/${topic}/score/${score}`)
    console.log(response.data)
    if(response.status === 200)
        dispatch({type:"USERINFO",payload:response.data.findUser})
    }
    catch(err){
        console.log(err)
    }

}