import HomeSection from '../components/HommeSection'
import '../styles/globals.css'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
function MyApp({ Component, pageProps }) {
  return (<HomeSection>
    <MantineProvider theme={{ colorScheme: 'dark' }} >
      <ModalsProvider labels={{ cancel: 'Cancel' }}>
        <NotificationsProvider position='top-center'>

          <Component {...pageProps} />

        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  </HomeSection >)

}
export default MyApp

