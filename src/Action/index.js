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
export const removeTodo = ()=>{
    return {
        type: "removetodo"
    }
}
//
