export const addTodo = (data)=> {
    return {
        type: "Addtodo",
        payload : {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = (id)=>{
    return {
        type: "Deletetodo",
        
            id:id
       
    }
}
<<<<<<< HEAD
export const removeTodo = ()=>{
    return {
        type: "removetodo"
    }
}
//
=======
>>>>>>> 1de2219fb138fb165e2b7624b882b7eebbaa28a3
