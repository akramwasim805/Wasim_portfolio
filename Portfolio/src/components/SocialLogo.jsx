import emailLogo from '../assets/social/email.png'
import linkedinLogo from '../assets/social/linkedin.png'
import whatsappLogo from '../assets/social/whatsapp.jpeg'

const logos = { email: emailLogo, linkedin: linkedinLogo, whatsapp: whatsappLogo }

export default function SocialLogo({ platform }) {
  return <img className={`social-logo social-logo-${platform}`} src={logos[platform]} alt="" width="20" height="20" decoding="async" />
}
