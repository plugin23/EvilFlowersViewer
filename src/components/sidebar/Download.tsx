import { useState } from 'react'
import { SIDEBAR_TABS } from '../../utils/enums'
import ModalWrapper from '../modal/Modal'

interface IHomeProps {
  setActiveSidebar: (bool: any) => void
  title: string
  text: string
}

const Download = ({ setActiveSidebar, title, text }: IHomeProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(false)
    setActiveSidebar(SIDEBAR_TABS.NULL)
  }

  return (
    <div>
      <ModalWrapper
        label="Download"
        isOpen={isOpen}
        onClose={() => handleClick()}
      >
        <h2 className="text-lg font-medium leading-6 text-gray-900">{title}</h2>
        <div className="mt-3 text-sm text-gray-500">
          <p>{text}</p>
        </div>
      </ModalWrapper>
    </div>
  )
}
export default Download
