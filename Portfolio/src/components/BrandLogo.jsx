import { profile } from '../data/portfolio'

export default function BrandLogo({ onClick }) {
  return <a href="#home" className="brand-logo" onClick={onClick} aria-label="Wasim Akram home">
    {profile.headshot ? <img className="brand-portrait" src={profile.headshot} width="48" height="48" alt="" decoding="async" /> : <img className="brand-monogram" src={`${import.meta.env.BASE_URL}wasim-monogram.svg`} width="58" height="48" alt="" />}
    <span className="brand-nameplate"><span className="brand-name">Wasim Akram</span><span className="brand-descriptor">Engineering & systems</span></span>
  </a>
}
