import Banner from "../components/Banner";
import BreadcrumbComponent from "../components/Breadcrumb";
import Products from "../components/Products";
import ColumnText from "../components/ColumnText";
import IconTextGroup from "../components/IconTextGroup";

const Home = () => (
    <>
        <BreadcrumbComponent currentPage="Main Page" />
        <Banner />
        <ColumnText />
        <IconTextGroup />
        <Products />
    </>
);

export default Home;