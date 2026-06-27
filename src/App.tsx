import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'

// Temporary placeholder page — we'll replace this later
function DashboardPage() {
  return (
    <div style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>Dashboard</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Content will go here.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* DashboardLayout wraps all these pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* We'll add more routes here later */}
        </Route>

        {/* Redirect / to /dashboard for now */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}