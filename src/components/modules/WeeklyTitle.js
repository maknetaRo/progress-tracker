import React from 'react'
import styled from 'styled-components'

const StyledDayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(StyledDayTitle)`
    color: #61ffb8;
`

const WeeklyTitle = (props) => {
    const {day} = props      

    return (
      <>
        { day.startsWith("S") === true 
          ? <WeekendTitle>{day}</WeekendTitle> 
          : <StyledDayTitle>{day}</StyledDayTitle>}
      </>    
    )


}

export default WeeklyTitle