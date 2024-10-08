import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './App.module.scss'

import FullScreenMessage from '@shared/FullScreenMessage'
import Heading from '@shared/sections/Heading'
import Video from '@shared/sections/Video'

import { Wedding } from '@models/wedding'
import ImageGallery from '@shared/sections/ImageGallery'
import Intro from '@shared/sections/Intro'
import Invitation from '@shared/sections/Invitation'
import Calendar from '@shared/sections/Calendar'
import Map from '@shared/sections/Map'

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
      {/* {JSON.stringify(wedding)} */}
    </div>
  )
}

export default App
