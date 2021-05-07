import '../styles/global.scss'

import { Header } from '../components/header/index'
import { Player } from '../components/player/index'

import styles from '../styles/app.module.scss'
import { PlayerContextProvider } from '../contexts/PlayerContext'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
      </PlayerContextProvider>
  )
}

export default MyApp
    