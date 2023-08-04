import { useRef } from "react";
import {useDispatch} from "react-redux";
import { addData } from "../../Redux/State/TodoApp/TodoState";

const TodoPop = (props) => {

    const todoUseRef = useRef();

    const todoStore = useDispatch();


    const change = ()=>{
        if(todoUseRef.current.value){
          return todoStore(addData(todoUseRef.current.value)),props.value(false);
        }else{
            return
        }
    };

    return (
        <div>
        <div className="Full-screen">
        <div className="Card-body">
            <div className="div-1">
                <h1>Add to-do data</h1>
            </div>
            <div className="div-border">
            <hr />
            </div>
            <div className="div-2">
                <input ref={todoUseRef} type="text" placeholder="Inter Your Data" />
            </div>
            <div className="div-border">
            <hr />
            </div>
            <div className="div-3">
                <button onClick={change} className="btn-increase">add value</button>
                <button onClick={()=>props.value(false)}  className="btn-increase">cancel</button>
            </div>
    </div>
    </div>
        </div>
    );
};

export default TodoPop;


// onClick={()=>{todoStore(addData(todoUseRef.current.value)),props.value(false)}} 