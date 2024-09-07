import './SquareBtn.scss'

const SquareBtn = ({ icon, onClick }) => (
  <div className='square-btn-container row' onClick={onClick}>{icon}</div>
)

export default SquareBtn