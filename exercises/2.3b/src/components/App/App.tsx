import TitlePage from "../TitlePage/TitlePage";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import User from "../../types";

const App = () => {
  const title = "Welcome to My App";
  const UsersTable: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];
  const footerText = "© 2023 My App";

  //C: should map the tab here
  return (
    <div>
      <TitlePage title={title} />
      <Main users={UsersTable} />
      <Footer footerText={footerText} />
    </div>
  );
};

export default App;
