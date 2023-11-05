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