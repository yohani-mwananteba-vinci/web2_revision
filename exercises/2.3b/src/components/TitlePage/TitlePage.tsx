interface TitlePageProps {
  title: string;
}

const TitlePage = (props: TitlePageProps) => {
  return <h1>{props.title}</h1>;
};

export default TitlePage;
