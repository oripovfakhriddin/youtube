import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/main-layout/layout'
import HomePage from './pages/HomePage/Homepage'
import ExplorePage from './pages/ExplorePage/ExplorePage'
import ShortsPage from './pages/ShortsPage/ShortsPage'
import SubscriptionsPage from './pages/SubscriptionsPage/SubscriptionsPage'
import LibraryPage from './pages/LibararyPage/LibraryPage'
import HistoryPage from './pages/HistoryPage/HistoryPage'
import YourVideosPage from './pages/YourVideosPage/YourVideosPage'
import WatchLaterPage from './pages/WatchLaterPage/WatchLaterPage'
import WatchPage from './pages/WatchPage/WatchPage'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} /> 
            <Route path='watch' element={<WatchPage />} />
            <Route path='watch/:videoId' element={<WatchPage />} />
            <Route path='explore' element={<ExplorePage />}/>
            <Route path="shorts" element={ <ShortsPage />} />
            <Route path='subscriptions' element={<SubscriptionsPage />} />
            <Route path='library' element = { <LibraryPage /> }/>
            <Route path='history' element = { <HistoryPage /> }/>
            <Route path='yourvideos' element= { <YourVideosPage /> } />
            <Route  path='watchlater' element = { <WatchLaterPage /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
