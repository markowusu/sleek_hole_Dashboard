import TaskHeader from "../taskList/taskHeader";     

function TaskList({children}:{children:React.ReactNode}){
    return(
        <div className="">
        <TaskHeader />
        <div className="">
            {children}
        </div>
        </div>

    );
}
export default TaskList;