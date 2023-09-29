import TopTitle from "../Header";
import Footer from "./../Footer";
import AThreadsArea from "./../AThreadsArea";

const AllThreadPage = (props) => {

  return (
    <>
      <TopTitle />
      <AThreadsArea title={props.title}/>
      <Footer />
    </>
  );
};

export default AllThreadPage;
