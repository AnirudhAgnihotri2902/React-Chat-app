import { ChatEngine } from 'react-chat-engine';
import "./App.css";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = ()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
        
    return (
    <ChatEngine
        height = "100vh"
        projectID = "0d9576b8-fc46-4006-8df0-44dc6e65695e"

        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}
export default App;


