import classNames from 'classnames/bind'
import styles from './FullScreenMessage.module.scss'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? <Heart /> : <Error />}
    </div>
  )
}

function Heart() {
  return (
    <svg
      className={cx('ico-heart')}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
          fill="#c0392b"
        />
      </g>
    </svg>
  )
}

function Error() {
  return (
    <div>
      <p>ERROR가 발생했습니다!</p>
      <p>잠시후 다시 시도해주세요.</p>
    </div>
  )
}

export default FullScreenMessage
