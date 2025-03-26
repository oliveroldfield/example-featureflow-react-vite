import { withFeatureflowProvider, useFeatureflow } from 'react-featureflow-client'
import './App.css'

// Feature flag key
const FEATURE_KEY = 'bob2'

// Component that will be shown when feature is ON
const NewWelcomeMessage = () => (
  <div className="welcome-message new">
    <h1>Welcome to the Future!</h1>
    <p>You're seeing our new, improved welcome message</p>
  </div>
)

// Component that will be shown when feature is OFF
const OldWelcomeMessage = () => (
  <div className="welcome-message old">
    <h1>Hello World!</h1>
    <p>Welcome to React v19</p>
  </div>
)

function App() {

  const featureflow = useFeatureflow()

  return (
    <div className="app-container">
      {featureflow.evaluate(FEATURE_KEY).isOn() ? <NewWelcomeMessage /> : <OldWelcomeMessage />}
    </div>
  )
}

const FF_KEY = 'sdk-js-env-YOUR_KEY'
const user = {
  id: 'test-user-1',
  attributes: {
    email: 'test@example.com',
    plan: 'free'
  }
}

export default withFeatureflowProvider({
  apiKey: FF_KEY,  
  user,
})(App)
