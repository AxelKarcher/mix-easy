import { useNavigate } from 'react-router-dom'
import { FaCaretLeft } from 'react-icons/fa6'

import Separator from '@components/Separator/Separator'

import './PageBase.scss'

const PageBase = ({ className, title, children, secondary }) => {

  const navigate = useNavigate()

  return (
    <div className={`page-base-container ${className}`}>
      <div className='header-row'>
        <FaCaretLeft className='icon' onClick={() => navigate(-1)} />
        <span>{title}</span>
        {
          secondary &&
          <span className='row' onClick={secondary.onClick}>{secondary.icon}</span>
        }
      </div>
      <Separator />
      {children}
    </div>
  )
}

export default PageBase