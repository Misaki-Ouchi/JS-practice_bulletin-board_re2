import { useContext } from "react";
import WriteNewTitle from "./parts/links&btns/WriteNewTitle";
import ThreadTitles from "./parts/threads/ThreadTitles";
import ThreadsAreas from "./parts/threads/ThreadsAreas";
import { Titles } from "./App";
import { DataList } from "./Router";

const MainPage = () => {
  const dataList = useContext(DataList);
  const titles = useContext(Titles);

  return (
    <>
        <WriteNewTitle />
        <ThreadTitles titles={titles}/>
        <ThreadsAreas count="4" dataList={dataList} />
    </>
  );
};

export default MainPage;
