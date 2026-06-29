import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthCard from '../components/auth/AuthCard'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/login')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [success, navigate])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password.length < 12) {
      setError('Password must be at least 12 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setSuccess(true)
  }

  return (
    <AuthCard>
      {success ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '16px' }}>✅</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '8px',
            marginTop: 0,
          }}>
            Password updated!
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            fontFamily: 'var(--font-display)',
          }}>
            Redirecting to sign in...
          </p>
        </div>
      ) : (
        <>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '8px',
            marginTop: 0,
            textAlign: 'center',
          }}>
            Set new password
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            textAlign: 'center',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
          }}>
            Minimum 12 characters.
          </p>

          <form onSubmit={handleSubmit}>
            {error && (
              <div style={{
                backgroundColor: 'var(--state-error-bg)',
                border: '1px solid var(--state-error)',
                color: 'var(--state-error)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                marginBottom: '16px',
                fontSize: '14px',
                fontFamily: 'var(--font-display)',
              }}>
                {error}
              </div>
            )}

            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                color: 'var(--text-primary)',
                fontSize: '14px',
                marginBottom: '6px',
                fontFamily: 'var(--font-display)',
              }}>
                New password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Min. 12 characters"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-base)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 14px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                color: 'var(--text-primary)',
                fontSize: '14px',
                marginBottom: '6px',
                fontFamily: 'var(--font-display)',
              }}>
                Confirm password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-base)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 14px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: '10px 20px',
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Reset password
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <Link to="/login" style={{
              color: 'var(--accent-primary)',
              fontSize: '14px',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
            }}>
              Back to sign in
            </Link>
          </div>
        </>
      )}
    </AuthCard>
  )
}