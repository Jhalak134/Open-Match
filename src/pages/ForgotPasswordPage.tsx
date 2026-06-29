import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthCard from '../components/auth/AuthCard'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AuthCard>
      {!submitted ? (
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
            Reset your password
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            textAlign: 'center',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
          }}>
            Enter your email and we'll send you a reset link.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                color: 'var(--text-primary)',
                fontSize: '14px',
                marginBottom: '6px',
                fontFamily: 'var(--font-display)',
              }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
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
                marginBottom: '16px',
              }}
            >
              Send reset link
            </button>
          </form>

          <div style={{ textAlign: 'center' }}>
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
      ) : (
        <>
          <div style={{
            textAlign: 'center',
            marginBottom: '24px',
            fontSize: '32px',
          }}>
            📧
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '12px',
            marginTop: 0,
            textAlign: 'center',
          }}>
            Check your email
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            textAlign: 'center',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
            lineHeight: '1.6',
          }}>
            We've sent a password reset link to <strong style={{ color: 'var(--text-primary)' }}>{email}</strong>. It expires in 30 minutes.
          </p>
          <div style={{ textAlign: 'center' }}>
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