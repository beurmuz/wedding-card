import classNames from 'classnames/bind'
import styles from './Video.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="/assets/poster.jpg"
      >
        {/* video tag에 controls={true}를 넣어주면 일시정지 및 이동이 가능해진다 */}
        <source src="/assets/main.mp4"></source>
      </video>
    </Section>
  )
}

export default Video
