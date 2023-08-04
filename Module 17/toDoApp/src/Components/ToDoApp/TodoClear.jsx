import {useDispatch, useSelector} from "react-redux";
import { allCelarData } from "../../Redux/State/TodoApp/TodoState";

const TodoClear = (props) => {

    const clearTodoData = useDispatch();

    const todovalueData = useSelector((state)=>state.todoApp.value);

    const clearTodo = ()=>{
        if(todovalueData.length){
            clearTodoData(allCelarData()),props.value(false);
        }else{
            return
        }
    }

    return (
        <div>
            <div className="Full-screen">
            <div className="Card-body">
                <div className="div-1">
                    <h1>are you sure</h1>
                </div>
                <div className="div-border">
                <hr />
                </div>
                <div className="div-3">
                    <button onClick={clearTodo} className="btn-increase">{"i'm sure"}</button>
                    <button onClick={()=>props.value(false)}  className="btn-increase">cancel</button>
                </div>
        </div>
        </div>
        </div>
    );
};

export default TodoClear;