import styles from './App.module.scss';
import dangoBg from './assets/dangoBg.jpg';
import exploreScreen from './assets/exploreScreen.jpeg';
import searchScreen from './assets/searchScreen.jpeg';
import watchlistScreen from './assets/watchlistScreen.jpeg';
import notificationScreen from './assets/notificationScreen.jpeg';
import trendingScreen from './assets/trendingScreen.jpeg';
import requestScreen from './assets/requestScreen.jpeg';
import { isBrowser } from 'react-device-detect';
import { useRef, useState } from 'react';

function App() {
  const [downloadClicked, setDownloadClicked] = useState(false);
  const downloadButtonRef = useRef();

  const downloadMyApp = () => {
    setDownloadClicked(true);
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = "https://dango-media.s3.us-east-2.amazonaws.com/AppAssets/app-universal-release.apk";
    downloadAnchor.download = "dangoAPK";
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    setTimeout(() => {
      setDownloadClicked(false);
    }, 5000)
  }

  const scrollToDownload = () => {
    downloadButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className={styles.container}>
      <div className={styles.dangoBackground + " animate__animated animate__fadeIn"}>
        <div className={styles.topGradient}></div>
        <div className={styles.bottomGradient}></div>
        <div className={styles.overlay}>
          <p >D A N G O </p>
          <p>Watch Free HD Anime</p>
          {isBrowser &&
            <div className={styles.infoBar}>
              <span>WATCH</span>
              <span>•</span>
              <span>BOOKMARK</span>
              <span>•</span>
              <span>DOWNLOAD</span>
              <span>•</span>
              <span>NOTIFICATION</span>
              <span>•</span>
              <span>INFO</span>
            </div>
          }
          <div className={styles.downloadRefButton} onClick={() => scrollToDownload()}>
            Download App
          </div>
        </div>
        <img src={dangoBg} alt={"Dango Background"} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.appInfoBox}>
          <div className={styles.appInfoBoxText}>
            <p>Explore Animes.</p>
            <p>As the name suggests, you can explore through animes of your choice, be it a specific genre you like or just a casual stroll through all the available titles.</p>
          </div>
          <div className={styles.appInfoBoxImage + " animate__animated animate__pulse animate__infinite animate__slower"}>
            <img src={exploreScreen} alt={"Explore Screen"} />
          </div>
        </div>
        <div className={styles.appInfoBox}>
          <div className={styles.appInfoBoxText}>
            <p>Search Animes.</p>
            <p>Looking for a specific anime? Just type in the anime name and search. You can also just view all the animes for a particular genre with the quick search options provided.</p>
          </div>
          <div className={styles.appInfoBoxImage + " animate__animated animate__pulse animate__infinite animate__slower"}>
            <img src={searchScreen} alt={"Search Screen"} />
          </div>
        </div>
        <div className={styles.appInfoBox}>
          <div className={styles.appInfoBoxText}>
            <p>Watchlist Animes.</p>
            <p>Don't want to go through the hassle of searching your favorite anime every time you open the app? Simply add the anime to your watchlist and access them quickly. </p>
          </div>
          <div className={styles.appInfoBoxImage + " animate__animated animate__pulse animate__infinite animate__slower"}>
            <img src={watchlistScreen} alt={"Search Screen"} />
          </div>
        </div>
        <div className={styles.appInfoBox}>
          <div className={styles.appInfoBoxText}>
            <p>Notifications For New Episodes.</p>
            <p>Tired of keeping track for new episodes of your favorite ongoing anime? Just add the anime in your notifications list and let us do the all the hard work. We'll notify you as soon as the new episode is added in our database.</p>
          </div>
          <div className={styles.appInfoBoxImage + " animate__animated animate__pulse animate__infinite animate__slower"}>
            <img src={notificationScreen} alt={"Search Screen"} />
          </div>
        </div>
        <div className={styles.appInfoBox}>
          <div className={styles.appInfoBoxText}>
            <p>Trending Animes.</p>
            <p>Checkout the latest trending animes with just a tap. Trending page is courtesy of Anitrendz.</p>
          </div>
          <div className={styles.appInfoBoxImage + " animate__animated animate__pulse animate__infinite animate__slower"}>
            <img src={trendingScreen} alt={"Search Screen"} />
          </div>
        </div>
        <div className={styles.appInfoBox}>
          <div className={styles.appInfoBoxText}>
            <p>Request Animes.</p>
            <p>What you want to watch isn't there in Dango (sorryyy T_T) ? Worry not, we've got you! Just send in a request to add your anime in Dango and we'll do it in a jiffy.</p>
          </div>
          <div className={styles.appInfoBoxImage + " animate__animated animate__pulse animate__infinite animate__slower"}>
            <img src={requestScreen} alt={"Search Screen"} />
          </div>
        </div>
        <div className={styles.downloadContainer}>
          <div className={styles.downloadContainerMain}>
            <img src="https://dango-media.s3.us-east-2.amazonaws.com/AppAssets/sittingGirl.png" className={styles.downloadImageLeft} />
            <div className={styles.downloadTexts}>
              <p>Download our app now!</p>
              {
                !downloadClicked ?
                  <div className={styles.downloadButton + " animate__animated animate__pulse animate__infinite animate__slower"} onClick={() => downloadMyApp()} ref={downloadButtonRef}>Download</div>
                  : <p>Thank you for downloading our app! Your download will begin soon.</p>
              }
              <p>Only For Android 🙂</p>
            </div>
            <img src="https://dango-media.s3.us-east-2.amazonaws.com/AppAssets/bannerGirl.png" className={styles.downloadImageRight} />
          </div>
        </div>
        <p className={styles.warningText}>Please allow app installs from unknown reasons for installing this apk. Our app got taken down from playstore due to DMCA concerns which was pretty inevitable 😭</p>
        <div className={styles.footer}>
          Dango is a 100% free app to watch and download anime. We don't charge a single penny from our viewers. All animes in Dango are solely and 100% property of their respective creators and publishers. We don't claim any sort of ownership over any anime shown in the app and only rely on free sites such as gogoanime, kissanime, etc. We merely share content which is already freely available on the internet and don't promote piracy of any sorts. Happy streaming
        </div>
      </div>
    </div >
  );
}

export default App;
