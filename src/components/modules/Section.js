import styled from 'styled-components'
import WeeklyTitle from './WeeklyTitle'
import ProgresBar from './ProgresBar'

const StyledSection = styled.section`
  background-color: #ffffff;
  border: ${({weekDay, id}) => (weekDay === id) ? "solid 5px gold" : "solid 3px grey"};
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  /* justify-content: left; */
  font-size: 40px;
  color: #ff6961;
`

const WeekendTitle = styled(WeeklyTitle)`
    color: #61ffb8;
`

const Section = ({ day, progress, id }) => {
    const today = new Date()
    const weekDay = today.getDay()

    return (
        <StyledSection weekDay={weekDay} id={id}>        
            <WeeklyTitle day={day} />
            <ProgresBar progress={progress} />
        </StyledSection>
    )
}

export default Section