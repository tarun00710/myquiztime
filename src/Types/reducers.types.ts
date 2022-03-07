export type Action = 
| {type : "CORRECT",payload:number}
| {type : "INCORRECT",payload:number}
| {type : "INCREMENT_QUESTION"}
| {type : "RESET"}
| {type : "USERINFO",payload:any}
