import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type TTodo = {

    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}

type TinitialState = {

    todosss: TTodo[];
}

const initialState: TinitialState = {

    todosss: []
}


export const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todosss.push({ ...action.payload, isCompleted: false });
        },

        removeTode : (state , action : PayloadAction<string> ) => {

           state.todosss = state.todosss.filter((item) => item.id != action.payload )
        },

        toggleComplete : (state , action:PayloadAction<string>) => {

            const task = state.todosss.find((item) => item.id === action.payload) ;

            task!.isCompleted = !task?.isCompleted ;
        } ,


        updateTodo: (state, action: PayloadAction<TTodo>) => {
            const { id, title, description } = action.payload;
            const todoIndex = state.todosss.findIndex((todo) => todo.id === id);
            if (todoIndex !== -1) {
                state.todosss[todoIndex] = { ...state.todosss[todoIndex], title, description };
            }
        },

    },

});


export const { addTodo , removeTode , toggleComplete , updateTodo} = todoSlice.actions;

export default todoSlice.reducer;


