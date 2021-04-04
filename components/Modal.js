import styled from 'styled-components'

const Modal = (props) => {
    return (
        <ModalWrapper onClick={ props.onClose }>
          <ModalMessage>
            { props.children }
          </ModalMessage>
        </ModalWrapper>
    )
}

export default Modal

const ModalWrapper = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`
const ModalMessage = styled.div `
  display: inline-block;
  width: 30%;
  clear: both;
  // height: 300px;
  background-color: #fff;
  margin-top: 35%;
  border-radius: 3px;
  padding: 2rem;
`
