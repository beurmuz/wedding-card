import React from 'react'
import classNames from 'classnames/bind'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import Section from '@shared/Section'

import styles from './Intro.module.scss'
import Text from '@shared/Text'

const cx = classNames.bind(styles)

function Intro({
  groomName,
  brideName,
  locationName,
  date,
  message,
}: {
  groomName: string
  brideName: string
  locationName: string
  date: string
  message: string
}) {
  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-person')}>
        <span>{groomName}</span>
        <IconHeart className={cx('ico-heart')} />
        <span>{brideName}</span>
      </div>

      <div className={cx('wrap-location')}>
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
        </span>
        <span>{locationName}</span>
      </div>

      <IconFlower className={cx('ico-flower')} />
      <Text>{message}</Text>
    </Section>
  )
}

export default Intro

function IconHeart({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 -1028.4)">
        <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" />
      </g>
    </svg>
  )
}

function IconFlower({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.98,15.804c-.093-.467-.504-.804-.98-.804-5.612,0-7.836,5.398-7.929,5.629-.123,.308-.085,.657,.101,.932s.496,.439,.828,.439c3.302,0,5.642-.812,6.956-2.415,1.416-1.727,1.042-3.698,1.025-3.781Z"
        fill="#ffe082"
      />
      <path
        d="M9,19c-.552,0-1,.447-1,1,0,.204,.091,5,8,5,.552,0,1-.447,1-1,0-.204-.091-5-8-5Z"
        fill="#ffe082"
      />
      <path
        d="M16,14c-.552,0-1,.447-1,1v13c0,.553,.448,1,1,1s1-.447,1-1V15c0-.553-.448-1-1-1Z"
        fill="#80d8ff"
      />
      <path
        d="M20.513,3.126c-1.445-.443-3.077,.273-4.513,1.924-1.437-1.649-3.067-2.369-4.513-1.924-1.557,.471-2.487,2.145-2.487,4.476,0,5.193,6.312,8.166,6.581,8.29,.133,.062,.276,.092,.419,.092s.286-.03,.419-.092c.269-.124,6.581-3.097,6.581-8.29,0-2.331-.93-4.005-2.487-4.476Z"
        fill="#f8bbd0"
      />

      <path
        d="M9,19c-.552,0-1,.447-1,1,0,.195,.101,4.568,7,4.961v3.039c0,.553,.448,1,1,1s1-.447,1-1v-6.032c2.775-.152,4.779-.949,5.956-2.383,1.416-1.727,1.042-3.698,1.025-3.781-.093-.467-.504-.804-.98-.804-2.782,0-4.73,1.327-6,2.693v-2.1c1.608-.874,6-3.654,6-7.992,0-2.331-.93-4.005-2.487-4.476-1.445-.443-3.077,.273-4.513,1.924-1.437-1.649-3.067-2.369-4.513-1.924-1.557,.471-2.487,2.145-2.487,4.476,0,4.337,4.392,7.118,6,7.992v4.93c-1.175-.852-3.039-1.524-6-1.524Zm1.411,2.063c2.53,.242,3.665,1.132,4.175,1.873-2.532-.243-3.667-1.135-4.175-1.873Zm11.576-3.98c-.074,.38-.242,.832-.599,1.258-.688,.821-1.924,1.351-3.618,1.559,.786-1.101,2.149-2.469,4.217-2.816ZM11,7.602c0-1.36,.418-2.366,1.066-2.562,.082-.025,.172-.038,.27-.038,.7,0,1.77,.661,2.832,2.253,.371,.557,1.293,.557,1.664,0,1.209-1.814,2.431-2.42,3.102-2.215,.648,.195,1.066,1.201,1.066,2.562,0,3.26-3.727,5.565-5,6.258-1.273-.692-5-2.998-5-6.258Z"
        fill="#c51162"
      />
    </svg>
  )
}
