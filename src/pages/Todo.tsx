import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";



const Todo = () => {
    return (
        <Container>


            <h1 className="text-4xl font-bold text-center my-9">My First Todo Projects</h1>
            
            <TodoContainer />
            
        </Container>
    );
};

export default Todo;