import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import useScrollTop from "../utils/scrollTop";

const Main = () => {
    useScrollTop();

    return (
        <MainContainer>
            <Header />
            <Outlet />
            <div className="footer-separator" />
            <Footer />
        </MainContainer>
    )
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    .footer-separator {
        flex-grow: 1;
    }
    min-height: calc(100vh - 80px);
`;

export default Main;