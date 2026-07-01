import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import ProjectListingPage from './pages/ProjectListingPage'
import LoginPage from './pages/LoginPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import PostProjectPage from './pages/PostProjectPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import LandingPage from './pages/LandingPage'
import OnboardingPage from './pages/OnboardingPage'
import ContributorProfilePage from './pages/ContributorProfilePage'

function NotFoundPage() {
  return <div>404 — Page Not Found</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Onboarding — full screen, no sidebar */}
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Contributor public profile — no sidebar */}
        <Route path="/contributors/:id" element={<ContributorProfilePage />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectListingPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/projects/new" element={<PostProjectPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}