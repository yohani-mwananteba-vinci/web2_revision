import "./App.css";
import UserCard from "./UserCard";

function App() {
  //C: Should define a User[] array and map over it to render UserCard components (see the correction below)
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

/* C: correction

import { User } from "../types";
import UserCard from "./UserCard";
const users: User[] = [
  { name: "John Doe", age: 25, isOnline: true },
  { name: "Jane Doe", age: 22, isOnline: false },
  { name: "Foo Bar", age: 30, isOnline: true },
];

const App = () => (
  <>
    <h1>Users</h1>
    {users.map((user, index) => (
      <UserCard key={index} user={user} />
    ))}
  </>
);

*/
export default App;
