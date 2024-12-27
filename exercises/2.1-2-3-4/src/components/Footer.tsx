// Interface propsCompo
interface FooterProps {
    logo: string;
    children: React.ReactNode;
  }
  
  // Const Compo
  const Footer = (props: FooterProps) => {
    return (
      <header>
        <img src={props.logo} />
        <div>{props.children}</div>
      </header>
    );
  };
  
  // Export Compo
  export default Footer;
  
