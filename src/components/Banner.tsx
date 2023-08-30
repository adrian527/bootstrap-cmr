import { useState } from "react";
import { styled } from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import colors from "../assets/colors";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return <BannerContainer className='mb-5 pd-5'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} slide>
            <Carousel.Item>
                <ImageContainer>
                    <img src="https://cdn.pixabay.com/photo/2022/05/14/15/53/happy-birthday-7195976_1280.jpg" alt='' />
                </ImageContainer>
            </Carousel.Item>
            <Carousel.Item>
                <ImageContainer>
                    <img src="https://cdn.pixabay.com/photo/2016/03/27/17/49/cupcakes-1283247_1280.jpg" alt='' />
                </ImageContainer>
            </Carousel.Item>
            <Carousel.Item>
                <ImageContainer>
                    <img src="https://cdn.pixabay.com/photo/2018/07/22/16/36/muffin-3554917_1280.jpg" alt='' />
                </ImageContainer>
            </Carousel.Item>
        </Carousel>
    </BannerContainer>;
};

const BannerContainer = styled.div`
    .carousel-caption {
        color: ${colors.primary};
        background-color: ${colors.darkBackground};
    }

    .carousel-indicators [data-bs-target] {
        background-color: ${colors.primary};
    }

    border-radius: 15px;
`;

const ImageContainer = styled.div`
    height: 560px;
    width: 100%;
    border-radius: 15px;
    & img {
        max-width: 100%;
        max-height: 100%;
        min-height: 100%;
        min-width: 100%;
        border-radius: 15px;
    }
`;


export default Banner;