import {Component} from 'react'
import './index.css'
import BrowserHistory from '../BrowserHistory'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class InitialBrowserHistory extends Component {
  state = {browserHistory: initialHistoryList, search: ''}

  onClickInput = event => {
    console.log(event.target.value)
    this.setState({search: event.target.value})
  }

  onDeleteBrowserHistory = id => {
    const {browserHistory} = this.state
    const updatedBrowserHistory = browserHistory.filter(
      eachBrowserHistory => eachBrowserHistory.id !== id,
    )
    this.setState({browserHistory: updatedBrowserHistory})
  }

  render() {
    const {browserHistory, search} = this.state
    const checkUserInput = browserHistory.filter(eachList =>
      eachList.title.toLowerCase().includes(search),
    )

    return (
      <div className="bg-container">
        <div className="input-history-search-container">
          <div className="history-logo-size">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>

          <div className="input-search-container">
            <div className="search-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              type="search"
              alt="search"
              className="input-style"
              placeholder="Search History"
              onChange={this.onClickInput}
            />
          </div>
        </div>
        <ul className="box-container">
          {checkUserInput.map(historyItem => (
            <BrowserHistory
              onDeleteBrowserHistory={this.onDeleteBrowserHistory}
              key={historyItem.id}
              id={historyItem.id}
              historyItem={historyItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default InitialBrowserHistory
