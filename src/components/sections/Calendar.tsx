import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Calendar.module.scss'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const cx = classNames.bind(styles)
const css = `
    .rdp-root {
    --rdp-accent-color: var(--red)
    }

    .rdp-nav {
        display: none;
    }

    .rdp-month_caption: {
        display: none;
    }
    
    .rdp-day_button {
        cursor: default;
    }
`

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          mode="single"
          required
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
