import Header from "./parts/dom/Header";
import WriteNewTitle from "./parts/links&btns/WriteNewTitle";
import ThreadTitles from "./parts/threads/ThreadTitles";
import ThreadsAreas from "./parts/threads/ThreadsAreas";
import SideMenus from "./SideMenus";
import Footer from "./parts/dom/Footer";

// export const DataList = createContext();

const MainPage = () => {
  // const state = {
  //   count: 0,               // 表示コメント数
  //   isLoggedIn: false,      // ログイン状態
  //   showReadAllLink: true,  // 全部読むリンク
  // }

  return (
    <>
      <Header />
        <SideMenus />
        <main>
          <WriteNewTitle />
          <ThreadTitles />
          <ThreadsAreas count="4" />
        </main>
      <Footer />
    </>
  );
};

export default MainPage;
