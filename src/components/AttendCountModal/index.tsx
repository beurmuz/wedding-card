import { Wedding } from '@/models/wedding'
import { useModalContext } from '@contexts/ModalContext'
import { useEffect, useRef } from 'react'

function AttendCountModal({ wedding }: { wedding: Wedding }) {
  const { open, close } = useModalContext()

  const $input = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('@have-seen-modal')

  useEffect(() => {
    if (haveSeenModal === 'true') return // 모달을 본 적이 있다면, 모달을 그리지 않음

    open({
      title: `현재 참석자: ${wedding.attendCount} 명`,
      body: (
        <div>
          <input
            ref={$input}
            placeholder="참석 가능 인원을 추가해주세요."
            style={{ width: '100%' }}
            type="number"
          />
        </div>
      ),
      onLeftButtonClick: () => {
        // haveSeenModal을 true로 변경하겠다!
        localStorage.setItem('@haveSeenModal', 'true')
        close()
      },
      onRightButtonClick: async () => {
        if ($input.current == null) return

        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        localStorage.setItem('@haveSeenModal', 'true')
        close()
      },
    })
  }, []) // eslint-disable-line
  return null
}

export default AttendCountModal
