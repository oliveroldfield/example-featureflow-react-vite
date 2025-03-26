# React + Vite with Featureflow Integration

This template demonstrates how to integrate Featureflow's powerful feature flagging system with a modern React + Vite application. Featureflow provides a highly optimized, performant solution for feature management, utilizing a global CDN and advanced caching methods to deliver feature flags to your React application.

## 🚀 Quick Start

1. Install the required dependencies:
```bash
npm install react-featureflow-client
```

2. Configure Featureflow in your application:
```jsx
import { withFeatureflowProvider } from 'react-featureflow-client'

const FF_KEY = 'your-featureflow-api-key'
const user = {
  id: 'user-123',
  attributes: {
    email: 'user@example.com',
    plan: 'premium'
  }
}
```

3. Wrap your app with the Featureflow HOC:
```jsx
function App() {
  // Your app code here
}

export default withFeatureflowProvider({
  apiKey: FF_KEY,
  user,
})(App)
```

4. Use feature flags in your components:
```jsx
import { useFeatureflow } from 'react-featureflow-client'

function MyComponent() {
  const featureflow = useFeatureflow()
  
  return (
    <div>
      {featureflow.evaluate('my-feature-key').isOn() ? (
        <NewFeature />
      ) : (
        <OldFeature />
      )}
    </div>
  )
}
```

## ✨ Benefits of Featureflow

- **Lightning Fast**: Utilizes a global CDN and advanced caching methods for instant feature flag delivery
- **Zero Latency**: Feature flags are cached locally, ensuring immediate access
- **Real-time Updates**: Changes to feature flags are reflected instantly without page reload
- **User Targeting**: Sophisticated user targeting based on attributes and rules
- **A/B Testing**: Built-in support for A/B testing and gradual rollouts
- **Analytics**: Comprehensive analytics and reporting for feature usage

## 🔧 Configuration

The example includes a simple feature flag implementation that toggles between two welcome messages. You can modify the feature key and user attributes in `App.jsx` to match your Featureflow configuration.

## 🛠️ Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## 📚 Additional Resources

- [Featureflow Documentation](https://docs.featureflow.io)
- [React Featureflow Client](https://www.npmjs.com/package/react-featureflow-client)
- [Vite Documentation](https://vitejs.dev)
