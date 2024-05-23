
// import { useAppSelector } from "@/redux/hook";
import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";


const TodoContainer = () => {

    // **** For Local Store ............
    // const {todosss} = useAppSelector((state) => state.todos) ;

    const [priority , setPriority] = useState('') ;

    //******For Server******
    const {data : todos , isLoading , isError} = useGetTodosQuery(priority) ;
    

    if(isLoading) {
        return <p>Loading...</p> ;


    }

    


    return (


        <div>
            <div className="flex justify-between mb-5">

                <AddTodoModal />
               <TodoFilter priority={priority} setPriority={setPriority}/>

            </div>
            <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">

                <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">

                    
                    {
                        todos?.data?.map((item) => ( 
                        
                            <TodoCard {...item} />
                        
                        
                    ))}

                </div>

            </div>
        </div>


    );
};

export default TodoContainer;