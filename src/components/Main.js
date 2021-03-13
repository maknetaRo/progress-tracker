import React from 'react'
import Title from './modules/Title'
import Section from './modules/Section'



const Main = () => {
    const weekDays = [
        {
            id: 1,
            day: "M",
            progress: 10
        },
        {
            id: 2,
            day: "T",
            progress: 25
        },
        {
            id: 3,
            day: "W",
            progress: 40
        },
        {
            id: 4,
            day: "T",
            progress: 55
        },
        {
            id: 5,
            day: "F",
            progress: 65
        },
        {
            id: 6,
            day: "S",
            progress: 80
        },
        {
            id: 7,
            day: "S",
            progress: 95
        },
    ]

    return (
        <>
            <Title>Progress tracker</Title>

            {weekDays.map((day) => {
                console.log(day)
                return (
                    <Section key={day.id} {...day} />
                )

            })}

        </>
    )
}

export default Main
