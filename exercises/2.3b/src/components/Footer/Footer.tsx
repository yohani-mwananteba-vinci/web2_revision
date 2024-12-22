interface FooterProps {
  footerText: string;
}

const Footer = (props: FooterProps) => {
  return <footer>{props.footerText}</footer>;
};

export default Footer;
