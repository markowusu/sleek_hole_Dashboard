import LoginCard from '../components/auth';
import Layout from "../components/layout";
export default function Login(){
    return(
        <Layout cls="h-full" header={true}>
             <LoginCard/>
        </Layout>
       
    );
}