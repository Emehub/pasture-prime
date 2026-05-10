import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ErrorBoundary } from '@/components/common'
import GlobalRoute from '@/router/GlobalRoute'

const App = () => (
  <ErrorBoundary>
    <GlobalRoute />
    <ToastContainer position="top-right" autoClose={3000} newestOnTop />
  </ErrorBoundary>
)

export default App
