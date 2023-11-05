const initialData = {
    list : []
}




const Todored = (state= initialData,action) => {
       switch (action.type) {
           case "Addtodo":
            const {id,data} = action.payload;
              
               return {
                   ...state,
                   list: [
                       ...state.list,
                       {
                           id:id,
                           data: data
                       }
                   ]
                
               }
<<<<<<< HEAD
              
                
               
=======



>>>>>>> 1de2219fb138fb165e2b7624b882b7eebbaa28a3
               case "Deletetodo":
             const newList  = state.list.filter((elem) => elem.id !== action.id)
                return {
                    ...state,
                    list: newList
                 
                }
               

               default: return state;
       } 
}

export default Todored;