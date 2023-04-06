import AccessibilitySharpIcon from '@mui/icons-material/AccessibilitySharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Stack } from '@mui/system';
import PageContainer from '../../components/PageContainer/PageContainer';
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <>
      <PageContainer >
        <Box className={styles.contacts} >
          <Typography sx={{ textAlign: "center", paddingTop: 12, paddingBottom: 3, fontWeight: 400, color: "#fff", fontSize:{xs:37, md:50} }}>Contact Information</Typography>

          <Box sx={{ mx: "auto", width: {xs:270, md:300},  }}>

            <Stack direction="row" sx={{p:3, }}>
              <AccessibilitySharpIcon  sx={{fontSize:37, alignSelf:"center"}}/>
              <Box sx={{px:4}}>
                <Typography sx={{fontSize:{xs:17, md:20}}}>Name</Typography>
                <Typography sx={{fontSize:{xs:17, md:20}}}>Seyidova Aysu</Typography>
              </Box>
            </Stack>

            <Stack direction="row" sx={{p:3, }}>
              <EmailSharpIcon sx={{fontSize:34, alignSelf:"center"}}/>
              <Box sx={{px:4}}>
                <Typography sx={{fontSize:{xs:17, md:20}}}>E-mail</Typography>
                <Link sx={{fontSize:{xs:17, md:20}, color: "#fff", textDecorationColor: "#f34d74", display:{xs:"none", sm:"block"}}} href="mailto:aysuseyidova36@gmail.com" variant="body2">aysuseyidova36@gmail.com</Link>
                <Link sx={{fontSize:{xs:17, md:20}, color: "#fff", textDecorationColor: "#f34d74", display:{xs:"block", sm:"none"}}} href="mailto:aysuseyidova36@gmail.com" variant="body2">aysuseyidova36</Link>
              </Box>
            </Stack>

            <Stack direction="row" sx={{p:3, }}>
              <GitHubIcon sx={{fontSize:34, alignSelf:"center"}}/>
              <Box sx={{px:4}}>
                <Typography sx={{fontSize:{xs:17, md:20}}}>GitHub</Typography>
                <Link sx={{fontSize:{xs:17, md:20}, color: "#fff", textDecorationColor: "#f34d74"}} href="https://github.com/sydvys" target="_blank" variant="body2" >sydvys</Link>
              </Box>
            </Stack>

            <Stack direction="row" sx={{p:3, }}>
              <TelegramIcon sx={{fontSize:34, alignSelf:"center"}}/>
              <Box sx={{px:4}}>
                <Typography sx={{fontSize:{xs:17, md:20}}}>Telegram</Typography>
                <Link sx={{fontSize:{xs:17, md:20}, color: "#fff", textDecorationColor: "#f34d74"}} href="https://t.me/HlpMiplz" target="_blank" variant="body2">sydvys</Link>
              </Box>
            </Stack>

          </Box>

        </Box>
      </PageContainer>
    </>
  )
}

export default Contacts
