import SocialLogo from './SocialLogo'
import { profile } from '../data/portfolio'
import { Arrow } from './Icons'
export default function SocialLinks({ className = '' }) {
  return <div className={`social-links ${className}`}>
    <a href={profile.linkedin} target="_blank" rel="noreferrer"><SocialLogo platform="linkedin" /> LinkedIn <Arrow diagonal /></a>
  </div>
}
