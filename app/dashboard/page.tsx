import Layout from "../components/layout";
import Body from "../components/body";
import Sidebar from "../components/sidebar";
import RightNav from "../components/rightNav";
import OpenTable from "../components/openTable";
import {ChartHeader, ChartCard } from "../components/chart";
import TaskElement from "../components/taskList/taskElement";
import TaskList from "../components/taskList";
import {ChatHeader, ChatProfile, ChatCard} from "../components/chat"
function Admin(){
    return(
        
        <Layout cls="flex">
          <Sidebar/>
            <Body>
                <OpenTable/>
                <ChartCard>
                    <ChartHeader/>
                </ChartCard>
                <TaskList>
                    <TaskElement/>
                    <TaskElement/>
                    <TaskElement/>
                    <TaskElement/>
                    <TaskElement/>

                </TaskList>
            </Body>
            <RightNav>
            <ChatHeader/>
            <ChatProfile/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            </RightNav>
        </Layout>
    )
}
export default Admin;