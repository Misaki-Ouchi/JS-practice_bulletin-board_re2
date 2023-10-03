import TopTitle from "../dom/Header";
import ThreadComments from "../threads/ThreadComments";
import Footer from "../dom/Footer";

const EditCommentPage = (props) => {

  return (
    <>
      <TopTitle />
      <ThreadComments title_id="props.title_id"/>
      <Footer />
    </>
  );
};

export default EditCommentPage;
