import {useDispatch} from "react-redux";
import { deleteData } from "../../Redux/State/TodoApp/TodoState";

const TodoSIngleDelete = (props) => {

    const deleteTodoData = useDispatch();

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
                    <button onClick={()=>{deleteTodoData(deleteData(props.index)),props.value(false)}} className="btn-increase">delete</button>
                    <button onClick={()=>props.value(false)}  className="btn-increase">cancel</button>
                </div>
                
        </div>
        </div>
        </div>
    );
};

export default TodoSIngleDelete;