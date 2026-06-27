// This is the top navigation bar shown on every dashboard page
// It has: logo on the left, notification bell + avatar on the right

import { Bell, ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <div style={{
      height: '64px',
      backgroundColor: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      flexShrink: 0
    }}>

      {/* LEFT SIDE — Logo */}
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700 }}>
        <span style={{ color: 'var(--text-primary)' }}>Open</span>
        <span style={{ color: 'var(--accent-primary)' }}>Match</span>
      </div>

      {/* RIGHT SIDE — Bell + Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

        {/* Notification Bell */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} color="var(--text-secondary)" />
          {/* Unread badge — red dot with count */}
          <div style={{
            position: 'absolute',
            top: '-6px',
            right: '-6px',
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-inverse)',
            fontSize: '10px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            borderRadius: 'var(--radius-full)',
            minWidth: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 4px'
          }}>
            3
          </div>
        </div>

        {/* Avatar + dropdown arrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          {/* Avatar circle with initials */}
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-inverse)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            fontWeight: 600
          }}>
            A
          </div>
          <ChevronDown size={16} color="var(--text-secondary)" />
        </div>

      </div>
    </div>
  )
}