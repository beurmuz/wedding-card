import { parseISO, format, getDay } from 'date-fns'
import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

// days를 Heading 안에 넣으면 리렌더링 될때마다 재실행이 되면서 변수가 계속 만들어진다.
const DAYS = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
]

function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[weddingDate.getDay()]}</div>
    </Section>
  )
}

export default Heading
