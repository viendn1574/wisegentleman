import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
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
        <div style={{ marginTop: "30px", color: "#494949" }}>
            <Carousel
                // className="Example"
                // next={(now, previous) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                
                // navButtonsProps={{style: {backgroundColor: 'black', borderRadius: 30}}}
                // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                // indicatorContainerProps={{style: {margin: "30px"}}}
                // NextIcon={<KeyboardArrowRightIcon />} 
                indicators={false}
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
                {/* {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} from={2} to={2} />
                    })
                } */}
            </Carousel>
            <br/>
        </div>
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
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        );

        items.push(media);
    }


    return (
        // <Card className="Banner">

        // </Card>
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
                Name: "TAM GIÁC",
                Image: "/products/Tam_giac_nho_xam.jpg",
                Url: "tam-giac-lung-nho"
            },
            {
                Name: "TAM GIÁC",
                Image: "/products/Tam_giac_lon_xanh_nhat.jpg",
                Url: "tam-giac-lung-lon"
            }
        ]
    },
    {
        Name: "Combo",
        Items: [
            {
                Name: "BOXER",
                Image: "/products/Combo_boxer.jpg"
            },
            {
                Name: "TAM GIÁC",
                Image: "/products/Combo_tam_giac_nho.jpg"
            },
            {
                Name: "TAM GIÁC",
                Image: "/products/Combo_tam_giac_lon.jpg"
            }
        ]
    },

];

export default CardSlider;