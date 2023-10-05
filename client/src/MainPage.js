import { useContext } from "react";
import Header from "./parts/dom/Header";
import WriteNewTitle from "./parts/links&btns/WriteNewTitle";
import ThreadTitles from "./parts/threads/ThreadTitles";
import ThreadsAreas from "./parts/threads/ThreadsAreas";
import Footer from "./parts/dom/Footer";
import { Titles } from "./App";
import { DataList } from "./Router";

const MainPage = () => {
  const dataList = useContext(DataList);
  const titles = useContext(Titles);

  return (
    <>
      <Header />
      <main>
        <WriteNewTitle />
        <ThreadTitles titles={titles}/>
        <ThreadsAreas count="4" dataList={dataList} />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
