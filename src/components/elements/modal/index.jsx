import styled from 'styled-components'
import { CancelIcon } from '@icons'

const Wrapper = styled.div`
    position: fixed;
    top: 10rem;
    width: 32vw;
    min-height: 50vh;
    border-radius: 4px;
    border: 1px solid black;
    z-index: 15;
    display: grid;
    place-content: center;
`;

const ModalDiv = styled.div`
    min-height: 12vh;
    width: ${props => props.width || '30vw'};
    max-height: 75vh;
    max-width: 75vw;
    overflow-y: auto;
    padding: 1.25rem;
    border-radius: 16px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`;

const Contents = styled.div`
    display: grid;
`;

const CancelSpan = styled.span`
    position: absolute;
    right: 2rem;
    cursor: pointer;
`

const Heading = styled.h4`
    font-size: 1.5rem;
`;

const Modal = ({ visible, setVisible, width, title, children }) => {
    return (visible && <Wrapper>
        <ModalDiv width={width}>
            <CancelSpan onClick={() => { setVisible(false) }}>{CancelIcon}</CancelSpan>
            {title && <>
                <Heading>{title}</Heading>
                <br />
            </>}
            <Contents>
                {children}
            </Contents>
        </ModalDiv>
    </Wrapper>
    )
}

export default Modal
