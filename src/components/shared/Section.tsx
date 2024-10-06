import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  // cx는 string이 아닌 array type도 받을 수 있다. (여러 개의 클래스 적용 가능)
  return <section className={cx(['container', className])}>{children}</section>
}

export default Section
