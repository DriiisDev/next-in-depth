import MainNavigation from "./mainNavigation";
import "./layout.css";

const Layout = (props) => {
  return (
    <div>
        <MainNavigation/>
        <main className="layout-main">
            {props.children}
        </main>
    </div>
  );
}

export default Layout;