// This is the left sidebar with all navigation links
// Active link gets a teal highlight, others are muted

import { useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Zap,
  FolderGit2,
  Search,
  Users,
  MessageSquare,
  BookOpen,
  Shield,
  Settings
} from 'lucide-react'

// List of all navigation items
const navItems = [
  { label: 'Dashboard',     icon: LayoutDashboard, path: '/dashboard' },
  { label: 'My Matches',    icon: Zap,             path: '/matches' },
  { label: 'My Projects',   icon: FolderGit2,      path: '/my-projects' },
  { label: 'Find Projects', icon: Search,          path: '/projects' },
  { label: 'Mentorship',    icon: Users,           path: '/mentorship' },
  { label: 'Messages',      icon: MessageSquare,   path: '/messages' },
  { label: 'Learning Paths',icon: BookOpen,        path: '/learning' },
  { label: 'Trust Score',   icon: Shield,          path: '/trust' },
  { label: 'Settings',      icon: Settings,        path: '/settings' },
]

export default function Sidebar() {
  // useLocation tells us what the current URL path is
  const location = useLocation()
  // useNavigate lets us change the page when a link is clicked
  const navigate = useNavigate()

  return (
    <div style={{
      width: '240px',
      backgroundColor: 'var(--bg-surface)',
      borderRight: '1px solid var(--border-subtle)',
      flexShrink: 0,
      padding: '8px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }}>

      {navItems.map((item) => {
        // Check if this link matches the current page
        const isActive = location.pathname === item.path
        const Icon = item.icon

        return (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 16px',
              margin: '0 8px',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              // Active page gets teal tint + teal text
              // Inactive pages get muted text
              backgroundColor: isActive ? 'rgba(0,212,177,0.12)' : 'transparent',
              color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
              borderLeft: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 150ms ease'
            }}
          >
            <Icon size={20} />
            {item.label}
          </div>
        )
      })}

    </div>
  )
}