function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h1 style={{ 
        fontFamily: 'var(--font-display)', 
        fontSize: '3rem', 
        fontWeight: 700,
        letterSpacing: '-0.03em'
      }}>
        <span style={{ color: 'var(--text-primary)' }}>Open</span>
        <span style={{ color: 'var(--accent-primary)' }}>Match</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)' }}>
        Setup complete ✅
      </p>
    </div>
  )
}

export default App