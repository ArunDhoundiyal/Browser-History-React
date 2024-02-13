import './index.css'

const BrowserHistory = props => {
  const {historyItem, onDeleteBrowserHistory} = props
  const {id, timeAccessed, title, domainUrl, logoUrl} = historyItem
  const onClickDeleteButton = () => {
    onDeleteBrowserHistory(id)
  }

  return (
    <li className="card-container">
      <div className="text-logo-container">
        <div className="textLogo-container">
          <p className="time-text">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logo-size" />
          <p className="company-name-text">{title}</p>
          <p className="company-website">{domainUrl}</p>
        </div>
      </div>
      <div className="delete-container">
        <button type="button" onClick={onClickDeleteButton}>
          <img
            className="delete-img"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
