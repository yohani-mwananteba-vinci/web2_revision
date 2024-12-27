import "./App.css";
import UserCard from "./UserCard";

function App() {
  const userName1 = "Loïc";
  const userAge1 = 25;
  const userStatus1 = true;

  const userName2 = "Alex";
  const userAge2 = 20;
  const userStatus2 = true;

  const userName3 = "Mathis";
  const userAge3 = 13;
  const userStatus3 = false;

  return (
    <div>
      <UserCard name={userName1} age={userAge1} isOnline={userStatus1}>
        <p>Il est l'aîné</p>
      </UserCard>

      <UserCard name={userName2} age={userAge2} isOnline={userStatus2}>
        <p>Il est le cadet</p>
      </UserCard>

      <UserCard name={userName3} age={userAge3} isOnline={userStatus3}>
        <p>Il est le benjamin</p>
      </UserCard>
    </div>
  );
}

export default App;
