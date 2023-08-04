import { useRef, useState } from "react";
import { FcFullTrash } from "react-icons/fc";
import { HiPencil } from "react-icons/hi2";
import TodoPop from './TodoPop';
import TodoClear from './TodoClear';
import TodoSIngleDelete from './TodoSIngleDelete';
import TodoSingleUpdate from './TodoSingleUpdate';
import {useSelector} from "react-redux";
const Todoapp = () => {
    
    
    const [truee,setTrue] = useState(false);
    const [clear,setClear] = useState(false);
    const [deletee,setDelete] = useState(false);
    const [updatee,setUpdate] = useState(false);
    const [vis,setvis] = useState(true)
    const checked = useRef();
    
    const todoComplete = ()=>{
        if(vis){
            checked.current.classList.add("lineDelete")
        }else{
            checked.current.classList.remove("lineDelete")
        }
        setvis(!vis);
    };


    const todovalueData = useSelector((state)=>state.todoApp.value);


    return (
        <div className="todoApp">
                <div className="todoHeader">
                      <h1>To-Do App</h1>
                </div>
                <div className="todoButton">
                    <button onClick={()=>setTrue(!truee)} className="buttonTodo">Add data</button>
                    {truee &&  <TodoPop value={setTrue}/>}
                    <buttonn onClick={()=>setClear(!clear)} className="buttonTodo">All Clear</buttonn>
                    {clear &&  <TodoClear dataValue={todovalueData} value={setClear}/>}

                </div>
                <div className="todoContent">
                    {
                        todovalueData.length !==0?(
                            todovalueData.map((element,index)=>{
                                return(
                                    <ul key={index.toString()}>
                                        <li>
                                            <div className="todoDataDiv">
                                                <div className="left-data">
                                                         <div className="ck">
                                                                 <input onClick={todoComplete} type="checkbox" />
                                                                 <span className="checkmark"></span>
                                                         </div>
                                                    <div className="value">
                                                          <h4 ref={checked}>{element}</h4>
                                                    </div>
                                               </div>
                                                <div className="right-data">
                                                     <button onClick={()=>setDelete(!deletee)} className="btnTodo"><FcFullTrash/></button>
                                                     {deletee &&  <TodoSIngleDelete index={index} value={setDelete}/>}
                                                      <button onClick={()=>setUpdate(!updatee)}  className="btnTodo"><HiPencil/></button>
                                                     {updatee &&  <TodoSingleUpdate index={index} element={element} value={setUpdate}/>}
                                                 </div>
                                           </div>
                                      </li>
                                    </ul>
                                )
                            })
                        ):(
                        <div className="empty-main"> <div className="empty">no todo</div></div>
                        )
                    }
                </div>
        </div>
    );
};

export default Todoapp;