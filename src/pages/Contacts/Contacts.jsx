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
          <Typography variant='h3' sx={{ textAlign: "center", paddingTop: 15, paddingBottom: 5, fontWeight: 400, color: "#fff" }}>Contact Information</Typography>

          <Stack gap={5} sx={{ mx: "auto", py:5, justifyContent: "center", maxWidth: 500, paddingLeft: { xs: 13, sm: 17 }, }}>

            <Stack direction='row' gap={5}>
              <AccessibilitySharpIcon sx={{ fontSize: 45 }} />
              <Box >
                <Typography sx={{ fontSize: 20, }}>Name</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 100 }}>Seyidova Aysu</Typography>
              </Box>
            </Stack>

            <Stack direction='row' gap={5}>
              <EmailSharpIcon sx={{ fontSize: 45 }} />
              <Box>
                <Typography sx={{ fontSize: 20 }}>E-mail</Typography>
                <Link sx={{ fontSize: 20, fontWeight: 100, color:"#fff", textDecorationColor:"#f34d74" }} href="mailto:aysuseyidova36@gmail.com" variant="body2">aysuseyidova36@gmail.com</Link>
              </Box>
            </Stack>

            <Stack direction='row' gap={5}>
              <GitHubIcon sx={{ fontSize: 45 }} />
              <Box>
                <Typography sx={{ fontSize: 20 }}>GitHub</Typography>
                <Link sx={{ fontSize: 20, fontWeight: 100, color:"#fff", textDecorationColor:"#f34d74" }} href="https://github.com/sydvys" target="_blank" variant="body2" >sydvys</Link>
              </Box>
            </Stack>

            <Stack direction='row' gap={5}>
              <TelegramIcon sx={{ fontSize: 45 }} />
              <Box>
                <Typography sx={{ fontSize: 20 }}>Telegram</Typography>
                <Link sx={{ fontSize: 20, fontWeight: 100, color:"#fff", textDecorationColor:"#f34d74" }} href="https://t.me/HlpMiplz" target="_blank" variant="body2">sydvys</Link>

              </Box>
            </Stack>

            {/* <Stack direction='row' gap={5}>
              <TelegramIcon sx={{ fontSize: 45 }} />
              <Box>
                <Typography sx={{ fontSize: 20 }}>CV</Typography>
                <Link sx={{ fontSize: 20, fontWeight: 100 }} href="https://t.me/HlpMiplz" target="_blank" underline="none" color="inherit">Click To Download</Link>
              </Box>
            </Stack> */}

          </Stack>

        </Box>
      </PageContainer>
    </>
  )
}

export default Contacts
