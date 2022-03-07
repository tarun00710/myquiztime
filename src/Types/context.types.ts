import React from "react";

export type quizType = {
    quizResponse:{
        score:number;
        correct:number;
        incorrect:number;
        questionNo:number;
        totalQuestion:number;
        userData:{
            name:string | null
            score:number | null,
            topic:string | null
        }
    };
    dispatch:React.Dispatch<any>
}




// export type QuizPerformance = {
//     quizPerformance: {
//         questionsAttempted: number;
//         correct: number;
//         incorrect: number;
//         score: number;
//         currentQuestion: number;
//         totalQuestions: number;
//       };
//       dispatch: React.Dispatch<any>;
//     };