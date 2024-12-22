import User from "../../types";

interface MainProps {
  users: User[];  // C: No need to have a User[] here
}


const Main = (props: MainProps) => {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
};
//C:  should map the tab in App.tsx, not here (But it's a OK solution)

export default Main;
