import User from "../../types";

interface MainProps {
  users: User[];
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

export default Main;
