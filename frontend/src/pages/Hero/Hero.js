// // import React from 'react';
// // import './Hero.css';
// // const Hero = () => {
// //     return (
// //         <section style={{ backgroundColor: '#f3f4f6' }} className="hero-container">
// //             <div style={{ maxWidth: '90%', margin: '0 auto', padding: '20px' }} className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
// //                 <div style={{ marginRight: 'auto', alignSelf: 'center' }} className="lg:col-span-2">
// //                     <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800', lineHeight: '1.1' }} className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
// //                         Best Sports Collection
// //                     </h1>
// //                     <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#4b5563' }} className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
// //                     Discover the power of precision with Runsports' 
// //                     high-performance equipment, engineered to deliver 
// //                     maximum performance and durability. Whether you're looking for 
// //                     the perfect basketball for your next game-winning shot or a tennis racket that will help
// //                      you dominate the court, Runsports' collection has it all.
// //                     </p>
// //                     <button
// //                         type="button"
// //                         style={{ marginTop: '0.375rem', backgroundColor: '#000', padding: '0.75rem 1.25rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}
// //                         className="mt-1.5 inline-block bg-blue px-5 py-3 text-xs font-medium uppercase tracking-wide text-black"
// //                     >
// //                         Explore Shop Collection
// //                     </button>
// //                 </div>
// //                 <div style={{ marginTop: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} className="lg:mt-0 lg:col-span-1 lg:flex image-container">
// //                     <img
// //                         src="https://png.pngtree.com/background/20210710/original/pngtree-colorful-people-silhouette-sports-meeting-template-poster-background-material-picture-image_1047807.jpg"
// //                         alt="Explore Shop Collection"
// //                         style={{ maxWidth: '50%', height: 'auto', paddingBottom:'40px'}}
// //                     />
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // };

// // export default Hero;



// import React from 'react'
// import { Box, Button, styled, Typography } from "@mui/material";
// import { Link } from 'react-router-dom'
// //img
// // import headerImg from '.././assets/Heroimage-removebg-preview.png';

// const headerImg = 'https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg';

// const Hero = () => {

//     const CustomBox = styled(Box) (({ theme }) => ({
//         minHeight: '80vh',
//         display: 'flex',
//         justifyContent: 'center',
//         // tamanhos
//         gap: theme.spacing(2),
//         paddingTop: theme.spacing(10),
//         // cor de fundo
//         backgroundColor: 'lightblue',
//         [theme.breakpoints.down('md')]: {
//             flexDirection: 'column',
//             alignItems: 'center',
//             textAlign: 'center',
//         }
//     }));

//     const BoxText = styled(Box) (({ theme }) => ({
//         flex: '1',
//         paddingLeft: theme.spacing(8),
//         [theme.breakpoints.down('md')]: {
//             flex: '2',
//             textAlign: 'center',
//             paddingLeft: theme.spacing(2),
//             paddingRight: theme.spacing(2),
//         },
//     }));


//   return  (
//         <CustomBox component='header'>
//             {/*  Box text  */}
//             <BoxText 
//             component='section'
//             >
//                 <Typography
//                 variant='h2'
//                 component= 'h1'
//                 sx={{
//                     fontWeight: 700,
//                     color: 'black',
//                 }}
//                 >
//                     Unleash Your Potential with Us
//                 </Typography>

//                 <Typography
//                 variant='p'
//                 component='p'
//                 sx={{
//                     py: 3,
//                     lineHeight: 1.6,
//                     color: 'lightblack',
//                 }}
//                 >
//                      Our products undergo rigorous quality 
//                      control measures
//                 </Typography>

//                 <Box>
//                     <Button 
//                     variant='contained'
//                     sx={{
//                         mr: 2,
//                         px: 4, 
//                         py: 1,
//                         fontSize: '0.9rem',
//                         textTransform: 'capitalize',
//                         borderRadius: 0,
//                         borderColor: '#14192d',
//                         color: '#fff',
//                         backgroundColor: '#14192d',
//                         "&&:hover": {
//                             backgroundColor: "#343a55"
//                         },
//                         "&&:focus": {
//                             backgroundColor: "#343a55"
//                         }
//                     }}
//                     >
//                         buy now
//                     </Button>
//                     <Button 
//                     component={Link} 
//                     to={'/aboutus'}
//                     variant='outlined'
//                     sx={{
//                         px: 4, 
//                         py: 1,
//                         fontSize:'0.9rem',
//                         textTransform: 'capitalize',
//                         borderRadius: 0,
//                         color: '#fff',
//                         backgroundColor: 'transparent',
//                         borderColor: '#fff',
//                         "&&:hover": {
//                             color: '#343a55',
//                             borderColor: '#343a55',
//                         },
//                         "&&:focus": {
//                             color: '#343a55',
//                             borderColor: '#343a55',
//                         }
//                     }}
//                     >
//                         explore
//                     </Button>
//                 </Box>
//             </BoxText>

//             <Box sx={theme => ({
//                 [theme.breakpoints.down('md')]:{
//                     flex: '1',
//                     paddingTop: '30px',
//                     alignSelf: 'center',
//                 },
//                 [theme.breakpoints.up('md')]:{
//                     flex: '2',
//                     alignSelf: 'flex-end',
//                 },
//             })}
//             >
//                 <img
//                 src={headerImg}
//                 alt="headerImg"
//                 style={{ 
//                     width: "90%",
//                     height:"20rem", 
//                     marginBottom: 20,
//                 }}
//                 />
//             </Box>

//         </CustomBox>
//     )
// }

// export default Hero


import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
// import headerImg from '.././assets/Heroimage-removebg-preview.png';

const headerImg = 'https://t4.ftcdn.net/jpg/05/65/75/59/360_F_565755935_GLp4UQXwqgB4wYBGorgOVWm6NqU1taTE.jpg';

const Hero = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'lightblue',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: 'black',
                }}
                >
                    SASTI FURNITURE
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: 'lightblack',
                }}
                >
                     STYLE , COMFORT AND AFFORDABLE FURNITURE STORE
                </Typography>

                <Box>
                    {/* <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        buy now
                    </Button> */}
                    <Button 
                    component={Link} 
                    to={'/aboutus'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        
                        color: '#fff',
                        backgroundColor: '#14192d',
                        
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        explore about us
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "90%",
                    height:"30rem", 
                    marginBottom: 80,
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Hero