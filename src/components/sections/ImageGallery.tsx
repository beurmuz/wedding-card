import classNames from 'classnames/bind'

import Section from '@shared/Section'
import styles from './ImageGallery.module.scss'
import ImageViewer from '@/components/ImageViewer'
import { useState } from 'react'

import generateImageUrl from '@/utils/generateImageUrl'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  // 닫기
  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              {/* <img src={src} alt="사진첩 이미지" /> */}
              <picture>
                {/* <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.png`} alt="사진첩 이미지" /> */}
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                    option: 'w_300,h_300,q_auto,c_fill',
                  })}
                  type="image/webp"
                />
                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'png',
                    option: 'w_300,h_300,q_auto,c_fill',
                  })}
                  alt="사진첩 이미지"
                />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
