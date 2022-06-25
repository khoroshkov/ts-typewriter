import React, { useRef, useEffect } from 'react'
import Typewriter from '../Typewriter'

export const Main = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (targetRef.current != null) {
      console.log('fires!')
      const typewriter = new Typewriter(targetRef.current, {
        loop: true,
        typingSpeed: 100,
        deletingSpeed: 80
      })

      typewriter
        .typeString('Where do I start?')
        .pauseFor(2000)
        .typeString('\n\nfunctio')
        .deleteChars(7)
        .typeString('const temp')
        .pauseFor(350)
        .deleteAll(10)
        .typeString('Why is this so hard?')
        .pauseFor(3000)
        .typeString('\n\nDoes everyone struggle this much?')
        .pauseFor(1000)
        .typeString('\n\nThere has to be an easier way')
        .pauseFor(1000)
        .deleteAll(10)
        .start()
    }
  }, [])

  return <div className="whitespace" ref={targetRef}></div>
}
