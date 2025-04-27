import { useState, useEffect } from 'react'

const TypingEffect = ({ text, speed = 100, className }) => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, speed)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text, speed])

    return <span className={className}>{displayedText}</span>
}

export default TypingEffect