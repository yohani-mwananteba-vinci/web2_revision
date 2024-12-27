import "./UserCard.css";

interface UserCardProps {
  name: string;
  age: number;
  isOnline: boolean;
  children: React.ReactNode;
}

const UserCard = (props: UserCardProps) => {
  return (
    <div>
      <h1>{props.name} </h1>
      <div>{props.age}</div>
      <div className={props.isOnline ? "online" : "offline"}>
        {" "}
        {props.isOnline ? "En ligne" : "Hors ligne"}{" "}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default UserCard;
