import { useRef } from "react";
import {useDispatch} from "react-redux";
import { updateTOdoData } from "../../Redux/State/TodoApp/TodoState";

const TodoSingleUpdate = (props) => {

    const todoUseRef = useRef();
    const todoUpdate = useDispatch();

    const updateDataTodo=()=>{
       if(todoUseRef.current.value.length !==0){
         return todoUpdate(updateTOdoData({index:props.index,text:todoUseRef.current.value})),props.value(false);
       }else{
           return
       }
    }

    return (
        <div>
                <div className="Full-screen">
                <div className="Card-body">
                    <div className="div-1">
                        <h1>update to-do data</h1>
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
                        <button onClick={updateDataTodo} className="btn-increase">update value</button>
                        <button onClick={()=>props.value(false)} className="btn-increase">cancel</button>
                    </div>
               </div>
               </div>
      </div>
    );
};

export default TodoSingleUpdate;