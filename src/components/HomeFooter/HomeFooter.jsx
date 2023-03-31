import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, IconButton } from '@mui/material';
import styles from "./HomeFooter.module.css";

const Footer = () => {
  return (
    <>
      <Box direction="row" className={styles.footer} sx={{}}>
          <IconButton href="https://github.com/sydvys" target="_blank"> <GitHubIcon sx={{ color: "#fff", fontSize: 28 }} /> </IconButton>
          <IconButton href="https://t.me/HlpMiplz" target="_blank"> <TelegramIcon sx={{ color: "#fff", fontSize: 28 }} /> </IconButton>
          <IconButton href="mailto:aysuseyidova36@gmail.com"> <EmailIcon sx={{ color: "#fff", fontSize: 28 }} /> </IconButton>
      </Box>
    </>
  )
}

export default Footer
