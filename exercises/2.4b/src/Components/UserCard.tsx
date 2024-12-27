import "./UserCard.css";

//C: Should have only 1 props: user: User (which should be define in ../types.ts and imported)
interface UserCardProps {
  name: string;
  age: number;
  isOnline: boolean;
  children: React.ReactNode;    //C: No need to have a children prop
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
