import Navigationbar from "./Navigationbar";
import Routing from "./Routing";

function LoggedIn({ currentUser, setCurrentUser }) {
  return (
    <div>
      <h1>Welcome, {currentUser.username}</h1>
      <Navigationbar setCurrentUser={setCurrentUser}/>
      <Routing currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  );
};

export default LoggedIn;