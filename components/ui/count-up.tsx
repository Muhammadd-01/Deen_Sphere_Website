"use client"

import { useEffect, useState } from "react"

interface CountUpProps {
    end: number
    duration?: number
    suffix?: string
}

export const CountUp = ({ end, duration = 2000, suffix = "" }: CountUpProps) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = (currentTime - startTime) / duration

            if (progress < 1) {
                setCount(Math.floor(end * progress))
                animationFrame = requestAnimationFrame(animate)
            } else {
                setCount(end)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration])

    return <>{count}{suffix}</>
}
