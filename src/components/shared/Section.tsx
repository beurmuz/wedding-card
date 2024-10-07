import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string // 옵셔널
}) {
  // cx는 string이 아닌 array type도 받을 수 있다. (여러 개의 클래스 적용 가능)
  return (
    <section className={cx(['container', className])}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}

export default Section
