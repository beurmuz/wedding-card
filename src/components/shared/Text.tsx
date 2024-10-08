// <Text>{'안녕하세요\n줄바꿈이 되나요?'}</Text>

import React from 'react'

function Text({ children }: { children: string }) {
  // array는 원본 문자열을 의미한다.
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <React.Fragment key={idx}>
        {str}
        {idx === array.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })

  return <div>{message}</div>
}

export default Text
