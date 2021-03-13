import React from 'react' 
import styled from 'styled-components'

const StyledBar = styled.div`
    /* change width  */
    width: ${({progress}) => progress + "%"};
    height: 100%;
    /* background: ${({progress}) => `rgba(75,0,130, calc(${progress/100}))`} ; */
    background: ${({progress}) => {
        if (progress < 25) {return 'gold'}
        else if (progress < 50) {return 'lightpink'}
        else if (progress < 75) {return 'lightgreen'}
        else {return 'lightblue'}
    }};

`

/* width: ${({progress}) => `calc(${progress}% - 50px)`}; */

const ProgressSection = styled.div`
    width: 250px;
`

const ProgresBar = (props) => {
    
    return (
        <ProgressSection>
            <StyledBar progress={props.progress} />
        </ProgressSection>
    )
}

export default ProgresBar;