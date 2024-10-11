import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './App.module.scss'

import FullScreenMessage from '@shared/FullScreenMessage'
import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'

import { Wedding } from '@models/wedding'
import ImageGallery from '@components/sections/ImageGallery'
import Intro from '@components/sections/Intro'
import Invitation from '@components/sections/Invitation'
import Calendar from '@components/sections/Calendar'
import Map from '@components/sections/Map'
import Contact from '@components/sections/Contact'
import Share from './components/sections/Share'
import Modal from './components/shared/Modal'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // 1. wedding data 호출
  //  - 2개의 서버를 먼저 켜 주어야 함
  //    1) yarn dev:db -> JSON Server 켜기
  //    2) yarn start -> 개발 환경 켜기
  useEffect(() => {
    setLoading(true)
    // 데이터를 보장받는 방법 callback, promise, async/await
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('정보를 불러오지 못했습니다.')
        }

        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (wedding == null) return null

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />

      <Modal
        open={true}
        title="현재 참석자"
        body={
          <div>
            <input />
          </div>
        }
        onLeftButtonClick={() => console.log('왼쪽 클릭')}
        onRightButtonClick={() => console.log('오른쪽 클릭')}
      />
    </div>
  )
}

export default App
