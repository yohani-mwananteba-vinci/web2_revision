// Interface propsCompo
interface HeaderProps {
  logo: string;
  children: React.ReactNode;
}

// Const Compo
const Header = (props: HeaderProps) => {
  return (
    <header>
      <img src={props.logo} />
      <div>{props.children}</div>
    </header>
  );
};

// Export Compo
export default Header;
