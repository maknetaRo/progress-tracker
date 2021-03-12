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
            progress: 45
        },
        {
            id: 3,
            day: "W",
            progress: 20
        },
        {
            id: 4,
            day: "T",
            progress: 55
        },
        {
            id: 5,
            day: "F",
            progress: 70
        },
        {
            id: 6,
            day: "S",
            progress: 90
        },
        {
            id: 7,
            day: "S",
            progress: 30
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
