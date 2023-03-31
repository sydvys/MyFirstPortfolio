import { Box, Grid, Typography } from '@mui/material'
import PageContainer from '../../components/PageContainer/PageContainer'
import styles from "./Project.module.css"
import ProjectCard from './ProjectCard'

const Projects = ({ heading, link, pic, picText, bg }) => {
  return (
    <>
      <PageContainer>

        <Box className={styles.projectContainer} >
          <Typography variant='h3' sx={{ textAlign: "center", py: 10, fontWeight: 400, color:"#fff" }}>Projects</Typography>

          <Grid container className={styles.project} rowSpacing={6} columnSpacing={3} sx={{ maxWidth:{md:800, lg:1000}, mx:"auto" }}>
            
            
            <Grid item xs={12} md={6}>
              <ProjectCard bg={"#f6a910"} pic={"/img/portfolio.png"} heading={"My First Portfolio"} link={""} />
            </Grid>

            <Grid item xs={12} md={6}>
              <ProjectCard bg={"#f967bb"} pic={"/img/weather.png"} heading={"Weather App"} link={"https://github.com/sydvys/WeatherApp"} />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <ProjectCard bg={"#8b18bf"} pic={"/img/one.png"} heading={"HTML, CSS, Javascript Website"} link={"https://github.com/sydvys/Practise_Site_1"} />
            </Grid>

            <Grid item xs={12} md={6}>
              <ProjectCard bg={"#d84b2b"} pic={"/img/two.png"} heading={"HTML, CSS, Javascript Website"} link={"https://github.com/sydvys/Practise_Site_2"} />
            </Grid>

            <Grid item xs={12} md={6}>
              <ProjectCard bg={"#2e9dd5"} pic={"/img/chat.png"} heading={"Chat App"} link={"https://github.com/sydvys/chat-app"} />
            </Grid>

            <Grid item xs={12} md={6}>
              <ProjectCard bg={"#aed82b"} pic={"/img/marinex.png"} heading={"Marinex"} link={"https://github.com/sydvys/marinex"} />
            </Grid>

            <Grid item xs={12} md={6} >
              <ProjectCard bg={"#FF0000"} pic={"/img/todo.png"} heading={"To-Do list"} link={"https://github.com/sydvys/to-do_list"} />
            </Grid>

          </Grid>
        </Box>
      </PageContainer>
    </>
  )
}

export default Projects
