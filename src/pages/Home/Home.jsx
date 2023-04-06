import React from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from '../../components/HomeFooter/HomeFooter';
import styles from "./Home.module.css"
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


const Home = () => {
  const [inView] = useInView({
    threshold: 0.1,
  });
  return (
    <>
      <PageContainer>
        <Box className={styles.home}>
          <motion.h1
            className={styles.topText}
            initial={{ y: "-10vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Typography sx={{ fontSize: { xs: 40, sm: 70 } }}>Hello</Typography>

          </motion.h1>

          <motion.h4
            className={styles.bottomText}
            initial={{ y: "10vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Typography sx={{ fontSize: { xs: 43, sm: 75 } }}>I'm a Front-End Developer</Typography>

          </motion.h4>
          
        </Box>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
