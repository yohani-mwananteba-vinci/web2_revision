interface PageTitleProps {
    title : string;
  }

  // display page title
const PageTitle = (props: PageTitleProps) => {
    return (
        <h1>{props.title}</h1>
    );
  }

  export default PageTitle;