import { useParams, useNavigate } from 'react-router-dom'
import MatchScoreRing from '../components/projects/MatchScoreRing'

const sampleProjects = [
  {
    id: '1',
    name: 'TypeScript Utility Library',
    description: 'A popular utility library for TypeScript developers. We need help with new features, bug fixes, and documentation. This project has been active for 3 years and has over 3,000 GitHub stars.',
    maintainer: { name: 'Priya S.', trustLevel: 3 },
    skills: [
      { name: 'TypeScript', hasSkill: true, mandatory: true },
      { name: 'Node.js', hasSkill: true, mandatory: true },
      { name: 'Jest', hasSkill: false, mandatory: false },
      { name: 'Rollup', hasSkill: false, mandatory: false },
    ],
    matchScore: 85,
    minTrustLevel: 1,
    userTrustLevel: 2,
    githubRepo: 'example/ts-utils',
    stars: 3200,
    forks: 412,
    openIssues: [
      { id: 'i1', title: 'Add support for recursive types', difficulty: 'Intermediate', trustLevel: 1 },
      { id: 'i2', title: 'Fix type inference for generics', difficulty: 'Advanced', trustLevel: 2 },
      { id: 'i3', title: 'Improve README documentation', difficulty: 'Beginner', trustLevel: 0 },
    ]
  },
  {
    id: '2',
    name: 'Go gRPC Framework',
    description: 'High performance gRPC framework for Go. Looking for contributors with distributed systems experience.',
    maintainer: { name: 'Marcus T.', trustLevel: 4 },
    skills: [
      { name: 'Go', hasSkill: false, mandatory: true },
      { name: 'gRPC', hasSkill: false, mandatory: true },
      { name: 'Protobuf', hasSkill: false, mandatory: false },
    ],
    matchScore: 62,
    minTrustLevel: 2,
    userTrustLevel: 2,
    githubRepo: 'example/go-grpc',
    stars: 1800,
    forks: 203,
    openIssues: [
      { id: 'i4', title: 'Implement connection pooling', difficulty: 'Advanced', trustLevel: 2 },
      { id: 'i5', title: 'Add retry middleware', difficulty: 'Intermediate', trustLevel: 1 },
    ]
  },
]

const difficultyColors: Record<string, string> = {
  Beginner: 'var(--state-success)',
  Intermediate: 'var(--state-warning)',
  Advanced: 'var(--state-error)',
}

export default function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = sampleProjects.find(p => p.id === id)

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
        <h2 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
          Project not found
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', marginBottom: '24px' }}>
          This project does not exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/projects')}
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-inverse)',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Browse Projects
        </button>
      </div>
    )
  }

  const canApply = project.userTrustLevel >= project.minTrustLevel

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Back button */}
      <button
        onClick={() => navigate('/projects')}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-display)',
          fontSize: '14px',
          cursor: 'pointer',
          marginBottom: '24px',
          padding: 0
        }}
      >
        Back to Projects
      </button>

      {/* TWO COLUMN LAYOUT */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>

        {/* LEFT COLUMN */}
        <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Project name + GitHub link */}
          <div>
            <h1 style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 700,
              marginBottom: '8px'
            }}>
              {project.name}
            </h1>
            <a
              href={`https://github.com/${project.githubRepo}`}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                textDecoration: 'none'
              }}
            >
              github.com/{project.githubRepo}
            </a>
          </div>

          {/* Maintainer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-inverse)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              fontWeight: 600
            }}>
              {project.maintainer.name[0]}
            </div>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '14px' }}>
              Maintained by <strong style={{ color: 'var(--text-primary)' }}>{project.maintainer.name}</strong>
            </span>
          </div>

          {/* About */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px'
          }}>
            <h2 style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '12px'
            }}>
              About this project
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              lineHeight: '1.7',
              margin: '0 0 16px 0'
            }}>
              {project.description}
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '24px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              {[
                { label: 'Stars', value: project.stars.toLocaleString() },
                { label: 'Forks', value: project.forks.toLocaleString() },
                { label: 'Min Level', value: `Level ${project.minTrustLevel}` },
              ].map(stat => (
                <div key={stat.label}>
                  <p style={{
                    color: 'var(--text-tertiary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '12px',
                    margin: '0 0 4px 0'
                  }}>
                    {stat.label}
                  </p>
                  <p style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px'
          }}>
            <h2 style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              What we are looking for
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.skills.map(skill => (
                <div key={skill.name} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  backgroundColor: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>{skill.hasSkill ? 'YES' : 'NO'}</span>
                    <span style={{
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px'
                    }}>
                      {skill.name}
                    </span>
                  </div>
                  {skill.mandatory && (
                    <span style={{
                      color: 'var(--state-error)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: 500
                    }}>
                      Required
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Open opportunities */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px'
          }}>
            <h2 style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              Open Opportunities
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.openIssues.map(issue => (
                <div key={issue.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  backgroundColor: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <span style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px'
                  }}>
                    {issue.title}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span style={{
                      color: difficultyColors[issue.difficulty],
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: 500,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      border: `1px solid ${difficultyColors[issue.difficulty]}`,
                      backgroundColor: `${difficultyColors[issue.difficulty]}20`
                    }}>
                      {issue.difficulty}
                    </span>
                    <span style={{
                      color: 'var(--text-tertiary)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px'
                    }}>
                      Level {issue.trustLevel}+
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN — sticky action panel */}
        <div style={{ flex: '0 0 300px', position: 'sticky', top: '24px' }}>
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>

            {/* Match score */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <MatchScoreRing score={project.matchScore} size="lg" />
              <p style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                margin: 0
              }}>
                Your Match Score
              </p>
            </div>

            {/* Trust requirement */}
            <div style={{
              padding: '12px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: canApply ? 'var(--state-success-bg)' : 'var(--state-warning-bg)',
              border: `1px solid ${canApply ? 'var(--state-success)' : 'var(--state-warning)'}`,
              textAlign: 'center'
            }}>
              <p style={{
                color: canApply ? 'var(--state-success)' : 'var(--state-warning)',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                margin: 0,
                fontWeight: 500
              }}>
                {canApply
                  ? 'You meet the requirements'
                  : `Level ${project.minTrustLevel} required — you are at Level ${project.userTrustLevel}`
                }
              </p>
            </div>

            {/* Apply button */}
            <button
              disabled={!canApply}
              style={{
                backgroundColor: canApply ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                color: canApply ? 'var(--text-inverse)' : 'var(--text-tertiary)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: '12px 20px',
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: 600,
                cursor: canApply ? 'pointer' : 'not-allowed',
                width: '100%'
              }}
            >
              {canApply ? 'Apply to Contribute' : `Level ${project.minTrustLevel} Required`}
            </button>

            {/* Save button */}
            <button style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 20px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              cursor: 'pointer',
              width: '100%'
            }}>
              Save Project
            </button>

          </div>
        </div>

      </div>
    </div>
)
}