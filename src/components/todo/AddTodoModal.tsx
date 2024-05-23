import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch } from "@/redux/hook";
// import { addTodo, updateTodo } from "@/redux/features/todoSlice";
import { useAddTodosMutation } from "@/redux/api/api";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";





type Todo = {
    id: string;
    title: string;
    description: string;
}

type AddTodoModalProps = {
    todo?: Todo;

}


const AddTodoModal = ({ todo }: AddTodoModalProps) => {


    const [task, setTask] = useState(todo ? todo.title : '');
    const [description, setDescription] = useState(todo ? todo.description : '');

    // **** For Local Store ............
    // const dispatch = useAppDispatch();

    //******For Server******

    const [priority , setPriority] = useState('') ;

    const [addTodo, { data, isLoading, isSuccess, isError }] = useAddTodosMutation();

    




    const onSubmit = (e: FormEvent) => {

        e.preventDefault();



        // **** For Local Store ............

        // if (todo) {

        //     dispatch(updateTodo({

        //         id: todo.id,
        //         title: task,
        //         description,
        //     }))
        // }

        // else {


        //     const randomString = Math.random().toString(36).substring(2, 7);
        //     const taskDetails = {
        //         id: randomString,
        //         title: task,
        //         description: description,

        //     };


        //     dispatch(addTodo(taskDetails));

        // }


        // const randomString = Math.random().toString(36).substring(2, 7);
        const taskDetails = {
            title: task,
            description: description,
            isCompleted : false ,
            priority ,

        };

        addTodo(taskDetails) ;





    }

    return (

        <>

            {
                todo ? (
                    <Dialog>
                        <DialogTrigger>
                            <Button className="bg-primary-gradient text-xl font-semibold">

                                <svg
                                    className="size-5"
                                    fill="none"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    ></path>
                                </svg>

                            </Button>

                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <form onSubmit={onSubmit}>
                                <DialogHeader>
                                    <DialogTitle>Update Your Information</DialogTitle>
                                    <DialogDescription>
                                        Update Your Information that you want to finish.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="task" className="text-right">
                                            Information
                                        </Label>
                                        <Input id="task" value={task} onChange={(e) => setTask(e.target.value)} className="col-span-3" required />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="description" className="text-right">
                                            Description
                                        </Label>
                                        <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" required />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <DialogClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </DialogClose>
                                </div>
                            </form>
                        </DialogContent>

                    </Dialog>

                ) : (

                    <Dialog>
                        <DialogTrigger>
                            <Button className="bg-primary-gradient text-xl font-semibold">Add Todo</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <form onSubmit={onSubmit}>
                                <DialogHeader>
                                    <DialogTitle>Add Your Information</DialogTitle>
                                    <DialogDescription>
                                        Add Your Information that you want to finish.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="task" className="text-right">
                                            Information
                                        </Label>
                                        <Input id="task" value={task} onChange={(e) => setTask(e.target.value)} className="col-span-3" required />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="description" className="text-right">
                                            Description
                                        </Label>
                                        <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" required />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4" >
                                        <Label htmlFor="description" className="text-right">
                                            Priority
                                        </Label>
                                        <Select onValueChange={(value) => setPriority(value)}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a fruit" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Priority</SelectLabel>
                                                    <SelectItem value="High">High</SelectItem>
                                                    <SelectItem value="Medium">Medium</SelectItem>
                                                    <SelectItem value="Low">Low</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                </div>
                                <div className="flex justify-end">
                                    <DialogClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </DialogClose>
                                </div>
                            </form>
                        </DialogContent>

                    </Dialog>

                )
            }

        </>
    );
};

export default AddTodoModal;