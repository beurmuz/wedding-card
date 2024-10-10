import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Map.module.scss'
import { ReactNode, useEffect, useRef } from 'react'
import { Location } from '@/models/wedding'

declare global {
  interface Window {
    kakao: any
  }
}

const cx = classNames.bind(styles)

function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true // script tag를 비동기로 받아오겠다는 건, 렌더링을 방해하지 않겠다는 뜻

    document.head.appendChild(script)

    // script를 불러오는 시점(순서를 제어해주는 것)에 카카오로 실행하겠다!
    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        // marker의 위치 지정
        const marker = new window.kakao.maps.Marker({
          position,
        })

        // 지도 만들기
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        marker.setMap(map) // marker 생성
      })
    }
  }, [])

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는 길</span>
          <span className={cx('txt-subtitle')}>{location.name}</span>
          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="black"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  )
}

export default Map

function WayToCome({ label, list }: { label: ReactNode; list: string[] }) {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map((waytocome) => (
          <li>{waytocome}</li>
        ))}
      </ul>
    </div>
  )
}
