// import React from 'react'
// import { Typography, useTheme } from '@mui/material'
// import FlexBetween from 'components/FlexBetween'
// import WidgetWrapper from 'components/WidgetWrapper'

// const AdvertWidget = () => {
//     const { palette } = useTheme();
//     const dark = palette.neutral.dark;
//     const main = palette.neutral.main;
//     const medium = palette.neutral.medium;

//     return (
//         <WidgetWrapper>
//             <FlexBetween>
//                 <Typography color={dark} variant="h5" fontWeight="500">
//                     Sponsored
//                 </Typography>
//                 <Typography color={medium}>Create Ad</Typography>
//             </FlexBetween>
//             <img
//                 width="100%"
//                 height="auto"
//                 alt="advert"
//                 src="https://connect-c6ou.onrender.com/assets/info4.jpeg"
//                 style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
//             />
//             <FlexBetween>
//                 <Typography color={main}>MikaCosmetics</Typography>
//                 <Typography color={medium}>mikacosmetics.com</Typography>
//             </FlexBetween>
//             <Typography color={medium} m="0.5rem 0">
//                 Your pathway to stunning and immaculate beauty and made sure your skin
//                 is exfoliating skin and shining like light.
//             </Typography>
//         </WidgetWrapper>
//     )
// }

// export default AdvertWidget


import React, { useState, useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const adData = [
    {
        title: "MikaCosmetics",
        url: "https://connect-c6ou.onrender.com/assets/info4.jpeg",
        company: "MikaCosmetics",
        website: "mikacosmetics.com",
        description: "Your pathway to stunning and immaculate beauty and made sure your skin is exfoliating skin and shining like light."
    },
    {
        title: "NovaTech",
        url: "https://connect-c6ou.onrender.com/assets/post10.jpg",
        company: "NovaTech",
        website: "novatech.com",
        description: "Innovative tech solutions for a modern world. Empowering businesses with cutting-edge technology."
    },
    {
        title: "HealthyLife",
        url: "https://connect-c6ou.onrender.com/assets/post9.jpg",
        company: "HealthyLife",
        website: "healthylife.com",
        description: "Your companion to a healthy lifestyle. Quality products for a better life."
    },
    // Add more ads as needed
];

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const [currentAd, setCurrentAd] = useState(adData[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomAd = adData[Math.floor(Math.random() * adData.length)];
            setCurrentAd(randomAd);
        }, 4000); // Change ad every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src={currentAd.url}
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>{currentAd.company}</Typography>
                <Typography color={medium}>{currentAd.website}</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                {currentAd.description}
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;

