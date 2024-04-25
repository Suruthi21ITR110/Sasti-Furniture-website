import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url:'https://img.freepik.com/premium-photo/interior-photo-ikea-damansara-malaysia-during-member-preview-sale_176841-43127.jpg'
        },
        {
            alt: 'image2',
            url: 'https://images.pexels.com/photos/6830012/pexels-photo-6830012.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6830012.jpg&fm=jpg'
        },
        {
            alt: "image3",
            url: 'https://t4.ftcdn.net/jpg/03/08/19/83/240_F_308198387_XYl071GNfGuMfcm65RM6fmSw0EjOPNFm.jpg'
        },
        {
            alt: "image4",
            url: 'https://as2.ftcdn.net/v2/jpg/06/54/79/53/1000_F_654795345_x6tPW1CykqzSXJv9H6BbA30UCHj8ZlI6.jpg'
        },
        {
            alt: "image5",
            url: 'https://as1.ftcdn.net/v2/jpg/06/33/42/24/1000_F_633422401_w6MrmCt9l2dt5bm5OEsIK8zuSFxJ02cP.jpg'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'DESIGN YOUR DREAM HOUSE WITH US'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    
                </Typography>
                {/* <Paragraph text={
                    'Elevate your performance with our premium \
                    collection of sports wear. From moisture-wicking compression\
                     shirts to breathable running shorts, our apparel is designed to keep \
                     you comfortable and focused on your game'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                /> */}
            </Box>
            
            <Box sx={{ 
                maxWidth: 500,
                width: '200%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery;