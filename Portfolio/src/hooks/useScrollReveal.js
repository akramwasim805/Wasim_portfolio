import { useEffect } from 'react'

// Elements stay visible without JavaScript or animation support. Animate only
// when they enter the viewport, and immediately finish if keyboard focus enters.
export default function useScrollReveal(rootRef, pageKey) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || !window.IntersectionObserver || !Element.prototype.animate) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const seen = new WeakSet()
    const animations = new Map()
    const selector = '.section-heading, .about-copy, .project-card, .service-card, .skill-group, .experience-row, .contact-copy, .inquiry-form, .case-study-body > div, .inquiry-paths > div > a'
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        observer.unobserve(target)
        if (preference.matches || target.contains(document.activeElement)) return
        const siblings = [...target.parentElement.children].filter(child => child.matches(selector))
        const delay = Math.min(Math.max(siblings.indexOf(target), 0), 3) * 65
        const animation = target.animate([
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 520, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' })
        animations.set(target, animation)
        animation.onfinish = () => animations.delete(target)
      })
    }, { threshold: 0.08 })
    function observeNewElements() {
      root.querySelectorAll(selector).forEach(element => {
        if (seen.has(element)) return
        seen.add(element)
        observer.observe(element)
      })
      animations.forEach((animation, element) => {
        if (!element.isConnected) { animation.cancel(); animations.delete(element) }
      })
    }
    function stopAnimations() {
      animations.forEach(animation => animation.cancel())
      animations.clear()
    }
    function revealFocused(event) {
      animations.forEach((animation, element) => {
        if (element.contains(event.target)) { animation.cancel(); animations.delete(element) }
      })
    }
    observeNewElements()
    const mutations = new MutationObserver(observeNewElements)
    mutations.observe(root, { childList: true, subtree: true })
    preference.addEventListener('change', stopAnimations)
    root.addEventListener('focusin', revealFocused)
    return () => {
      observer.disconnect()
      mutations.disconnect()
      stopAnimations()
      preference.removeEventListener('change', stopAnimations)
      root.removeEventListener('focusin', revealFocused)
    }
  }, [rootRef, pageKey])
}
