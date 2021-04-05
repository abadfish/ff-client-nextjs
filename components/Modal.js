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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background-color: rgba(0,0,0,0.5);

`
const ModalMessage = styled.div `
  z-index: 1000;
  width: 50%;
  clear: both;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
  border-radius: 3px;
  padding: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    width: 95%;
  }
`
