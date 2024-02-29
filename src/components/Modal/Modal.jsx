import React from 'react'
import { CloseButton, ModalContent, ModalWrapper, Img } from './Modal.styled'

class Modal extends React.Component {

	componentDidMount() {
		document.body.style.overflowY = 'hidden'
		document.addEventListener('keydown', this.handleKeyDown)
  }
  
	componentWillUnmount() {
		// toast.info('Modal is closed')
		document.body.style.overflowY = 'auto'

		document.removeEventListener('keydown', this.handleKeyDown)
		clearInterval(this.intervalId)
		clearTimeout(this.timeoutId)
	}

	handleKeyDown = e => {
		console.log(e.key)
		if (e.key === 'Escape') {
			this.props.closeModal()
		}
	}

	handleBackdropClick = e => {
		// this.props.closeModal()
		// console.log('TARGET ->>>>> ', e.target)
		// console.log('CURRENT TARGET ->>>>>', e.currentTarget)
		if (e.target === e.currentTarget) {
			this.props.closeModal()
		}
	}

  render() {
		return (
			<ModalWrapper onClick={this.handleBackdropClick}>
				<ModalContent>
          <>
            <Img src={this.props.content.largeImageURL} alt="this.props.content.tags" />
					</>
					<CloseButton onClick={this.props.closeModal}>×</CloseButton>
					{this.props.children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}

export default Modal;
