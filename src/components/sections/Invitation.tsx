import styles from './Invitation.module.scss'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import Text from '@shared/Text'

const cx = classNames.bind(styles)

function Invitation({ message }: { message: string }) {
  return (
    <Section className={cx('container')}>
      <IconPost className={cx('ico-post')} />
      <Text>{message}</Text>
    </Section>
  )
}

export default Invitation

function IconPost({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g data-name="19. Send" id="_19._Send">
        <path d="M21,16.6a3,3,0,0,1-1.66-.51l-4.89-3.26a1,1,0,0,1,1.1-1.66l4.9,3.26a1,1,0,0,0,1.1,0l4.9-3.26a1,1,0,0,1,1.1,1.66l-4.89,3.26A3,3,0,0,1,21,16.6Z" />
        <path d="M29,25H13a3,3,0,0,1-3-3V10a3,3,0,0,1,3-3H29a3,3,0,0,1,3,3V22A3,3,0,0,1,29,25ZM13,9a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1Z" />
        <path d="M7,19H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" />
        <path d="M7,15H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" />
        <path d="M7,11H1A1,1,0,0,1,1,9H7a1,1,0,0,1,0,2Z" />
      </g>
    </svg>
  )
}
