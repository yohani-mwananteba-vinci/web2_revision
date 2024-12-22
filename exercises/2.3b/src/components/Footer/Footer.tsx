interface FooterProps {
  footerText: string;
}

const Footer = (props: FooterProps) => {
  return <footer>{props.footerText}</footer>;       //C: no need a return statement
};

export default Footer;
