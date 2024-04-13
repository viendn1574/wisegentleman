import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import './CardSlider.css'

import {
    CardMedia,
    Typography,
    Grid,
} from '@mui/material';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

const CardSlider = () => {
    const size = useWindowSize();
    return (
        <Box sx={{ marginLeft: '40px', marginRight: '40px'}}>
            <Carousel indicators={false}
                swipe={true}
                // navButtonsAlwaysVisible={false}
                // navButtonsProps={{ 
                //     style: {
                //         backgroundColor: "transparent",
                //         color:"black",
                //         opacity: 0.5,
                //         position: 'relative' 
                //     }
                // }} 
            >
                {
                    items.map((item, index) => {
                        if (size.width < 650) {
                            return (
                              <div key={index}>
                                <Banner item={item} key={index} contentPosition={item.contentPosition} from={0} to={2} />
                                <Banner item={item} key={index} contentPosition={item.contentPosition} from={2} to={3} />
                              </div>
                            );
                          } else {
                            return (
                              <React.Fragment key={index}>
                                <Banner item={item} key={index} contentPosition={item.contentPosition} from={0} to={3} />
                              </React.Fragment>
                            );
                          }
                    })
                }
            </Carousel>
            <br/>
        </Box>
    );
}


const Banner = (props) => {
    const totalItems = props.length ? props.length : 3;
    const from = props.from;
    const to = props.to;
    const size = useWindowSize();
    let items = [];
    const router = useRouter()

    const handleCloseNavMenu = (page) => {
            router.push(`/quan-sip/${page}`);
       
    };

    for (let i = from; i < to; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={size.width < 650 ? 6 : 4} key={item.Name} onClick={() => handleCloseNavMenu(item.Url)}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                />
                <Typography className="MediaCaption">
                        {item.Name}
                </Typography>
            </Grid>
        );

        items.push(media);
    }


    return (
        <Grid container spacing={5} className="Banner BannerGrid">
            {items}
        </Grid>
    );
};

const items = [
    {
        Name: "Lẻ",
        Items: [
            {
                Name: "BOXER",
                Image: "/products/Boxer_den.jpg",
                Url: "boxer"
            },
            {
                Name: "TAM GIÁC LƯNG NHỎ",
                Image: "/products/Tam_giac_nho_xam.jpg",
                Url: "tam-giac-lung-nho"
            },
            {
                Name: "TAM GIÁC LƯNG TO",
                Image: "/products/Tam_giac_lon_xanh_nhat.jpg",
                Url: "tam-giac-lung-lon"
            }
        ]
    }

];

export default CardSlider;