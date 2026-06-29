import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Available skills for the skill picker
const availableSkills = [
  'TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Java', 'C++',
  'React', 'Vue', 'Angular', 'Node.js', 'Django', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'Redis', 'MySQL',
  'Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'GCP',
  'GraphQL', 'gRPC', 'REST APIs', 'WebSockets',
  'Jest', 'Pytest', 'Vitest', 'Playwright',
]

// Each added skill has a name and whether it's mandatory
interface SkillRequirement {
  name: string
  mandatory: boolean
}

export default function PostProjectPage() {
  const navigate = useNavigate()

  // Form field states
  const [name, setName] = useState('')
  const [githubRepo, setGithubRepo] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [fullDescription, setFullDescription] = useState('')
  const [minTrustLevel, setMinTrustLevel] = useState(0)
  const [timeCommitment, setTimeCommitment] = useState('casual')
  const [beginnerRouting, setBeginnerRouting] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<SkillRequirement[]>([])
  const [skillSearch, setSkillSearch] = useState('')

  // Filter skills based on search
  const filteredSkills = availableSkills.filter(s =>
    s.toLowerCase().includes(skillSearch.toLowerCase()) &&
    !selectedSkills.find(sel => sel.name === s)
  )

  // Add a skill to the requirements list
  function addSkill(skillName: string) {
    setSelectedSkills(prev => [...prev, { name: skillName, mandatory: true }])
    setSkillSearch('')
  }

  // Remove a skill from the list
  function removeSkill(skillName: string) {
    setSelectedSkills(prev => prev.filter(s => s.name !== skillName))
  }

  // Toggle mandatory/optional for a skill
  function toggleMandatory(skillName: string) {
    setSelectedSkills(prev =>
      prev.map(s => s.name === skillName ? { ...s, mandatory: !s.mandatory } : s)
    )
  }

  // Validate and submit
  function handlePublish() {
    if (!name.trim()) { alert('Please enter a project name.'); return }
    if (!shortDescription.trim()) { alert('Please enter a short description.'); return }
    if (selectedSkills.length === 0) { alert('Please add at least one skill requirement.'); return }

    // For now just show success and go back to projects
    alert('Project published! (This will connect to the backend later.)')
    navigate('/projects')
  }

  function handleDraft() {
    alert('Project saved as draft! (This will connect to the backend later.)')
    navigate('/projects')
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>

      {/* Page heading */}
      <h1 style={{
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-display)',
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '8px'
      }}>
        Post a New Project
      </h1>
      <p style={{
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-display)',
        fontSize: '14px',
        marginBottom: '32px'
      }}>
        Tell contributors what you are building and what help you need.
      </p>

      {/* SECTION 1 — Project Basics */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, margin: 0 }}>
          Project Basics
        </h2>

        {/* Project name */}
        <div>
          <label style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
            Project name *
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="My Awesome Library"
            maxLength={100}
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
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* GitHub repo */}
        <div>
          <label style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
            GitHub repository
          </label>
          <input
            type="text"
            value={githubRepo}
            onChange={e => setGithubRepo(e.target.value)}
            placeholder="owner/repo"
            style={{
              width: '100%',
              backgroundColor: 'var(--bg-base)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 14px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Short description */}
        <div>
          <label style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
            Short description * ({shortDescription.length}/300)
          </label>
          <textarea
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
            placeholder="A brief description of your project..."
            maxLength={300}
            rows={3}
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
              resize: 'vertical'
            }}
          />
        </div>

        {/* Full description */}
        <div>
          <label style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
            Full description (optional)
          </label>
          <textarea
            value={fullDescription}
            onChange={e => setFullDescription(e.target.value)}
            placeholder="Tell contributors more about your project, its goals, tech stack, and how they can help..."
            rows={6}
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
              resize: 'vertical'
            }}
          />
        </div>
      </div>

      {/* SECTION 2 — Skill Requirements */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <h2 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, margin: 0 }}>
          Skill Requirements *
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '13px', margin: 0 }}>
          Add the skills contributors need. Mark each as Required or Optional.
        </p>

        {/* Skill search */}
        <input
          type="text"
          value={skillSearch}
          onChange={e => setSkillSearch(e.target.value)}
          placeholder="Search skills to add..."
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
            boxSizing: 'border-box'
          }}
        />

        {/* Skill suggestions */}
        {skillSearch.length > 0 && filteredSkills.length > 0 && (
          <div style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden'
          }}>
            {filteredSkills.slice(0, 6).map(skill => (
              <div
                key={skill}
                onClick={() => addSkill(skill)}
                style={{
                  padding: '10px 14px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                + {skill}
              </div>
            ))}
          </div>
        )}

        {/* Added skills list */}
        {selectedSkills.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {selectedSkills.map(skill => (
              <div key={skill.name} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                backgroundColor: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                  {skill.name}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {/* Mandatory toggle */}
                  <button
                    onClick={() => toggleMandatory(skill.name)}
                    style={{
                      backgroundColor: skill.mandatory ? 'var(--state-error-bg)' : 'var(--state-success-bg)',
                      color: skill.mandatory ? 'var(--state-error)' : 'var(--state-success)',
                      border: `1px solid ${skill.mandatory ? 'var(--state-error)' : 'var(--state-success)'}`,
                      borderRadius: 'var(--radius-full)',
                      padding: '2px 10px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    {skill.mandatory ? 'Required' : 'Optional'}
                  </button>
                  {/* Remove button */}
                  <button
                    onClick={() => removeSkill(skill.name)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'var(--text-tertiary)',
                      cursor: 'pointer',
                      fontSize: '16px',
                      padding: '0 4px'
                    }}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state for skills */}
        {selectedSkills.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '24px',
            color: 'var(--text-tertiary)',
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            border: '1px dashed var(--border-default)',
            borderRadius: 'var(--radius-md)'
          }}>
            No skills added yet. Search above to add skill requirements.
          </div>
        )}
      </div>

      {/* SECTION 3 — Contributor Requirements */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, margin: 0 }}>
          Contributor Requirements
        </h2>

        {/* Min trust level */}
        <div>
          <label style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
            Minimum trust level
          </label>
          <select
            value={minTrustLevel}
            onChange={e => setMinTrustLevel(Number(e.target.value))}
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
              boxSizing: 'border-box'
            }}
          >
            <option value={0}>Level 0 — Anyone</option>
            <option value={1}>Level 1 — Learning</option>
            <option value={2}>Level 2 — Emerging</option>
            <option value={3}>Level 3 — Active</option>
          </select>
        </div>

        {/* Time commitment */}
        <div>
          <label style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
            Time commitment expected
          </label>
          <select
            value={timeCommitment}
            onChange={e => setTimeCommitment(e.target.value)}
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
              boxSizing: 'border-box'
            }}
          >
            <option value="casual">Casual — a few hours a week</option>
            <option value="part_time">Part-time — 5 to 10 hours a week</option>
            <option value="dedicated">Dedicated — 10+ hours a week</option>
          </select>
        </div>

        {/* Beginner routing toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '14px', margin: '0 0 4px 0', fontWeight: 500 }}>
              Enable beginner routing
            </p>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '12px', margin: 0 }}>
              Automatically route beginner-friendly issues to Level 0-2 contributors
            </p>
          </div>
          <button
            onClick={() => setBeginnerRouting(prev => !prev)}
            style={{
              width: '44px',
              height: '24px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: beginnerRouting ? 'var(--accent-primary)' : 'var(--bg-elevated)',
              cursor: 'pointer',
              position: 'relative',
              flexShrink: 0
            }}
          >
            <div style={{
              width: '18px',
              height: '18px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'white',
              position: 'absolute',
              top: '3px',
              left: beginnerRouting ? '23px' : '3px',
              transition: 'left 150ms ease'
            }} />
          </button>
        </div>

      </div>

      {/* FOOTER — action buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingBottom: '48px'
      }}>
        <button
          onClick={handlePublish}
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-inverse)',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            padding: '12px 24px',
            fontFamily: 'var(--font-display)',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Publish Project
        </button>

        <button
          onClick={handleDraft}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 24px',
            fontFamily: 'var(--font-display)',
            fontSize: '15px',
            cursor: 'pointer'
          }}
        >
          Save as Draft
        </button>

        <button
          onClick={() => navigate('/projects')}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            border: 'none',
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </div>

    </div>
  )
}