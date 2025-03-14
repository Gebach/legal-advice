import { MainHeaderProps } from '../../shared/model/types'
import { useEffect, useState } from 'react'
import ButtonLink from '../../shared/ui/ButtonLink/ButtonLink'
import BurgerMenu from '../../shared/ui/BurgerMenu/BurgerMenu'
import logo from '../../shared/assets/logo.png'

interface navLinksProps {
  content: string
  link: string
  isSectionScrolled: boolean
}

function MainHeader({ classname }: MainHeaderProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const navLinks: navLinksProps[] = [
    {
      content: 'Виды услуг',
      link: '#legal-areas',
      isSectionScrolled: false,
    },
    {
      content: 'Юридические услуги',
      link: '#legal-services',
      isSectionScrolled: false,
    },
    {
      content: 'Услуги по безопасноти бизнеса',
      link: '#security-services',
      isSectionScrolled: false,
    },
    {
      content: 'Эксклюзивные услуги',
      link: '#exclusive-services',
      isSectionScrolled: false,
    },
  ]

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    }

    const observerCallback: IntersectionObserverCallback = entries => {
      let foundSection = false

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          foundSection = true
        }
      })

      if (!foundSection) {
        const scrollPosition = window.scrollY

        const firstSection = document.getElementById(`${navLinks[0].link}`)
        if (firstSection && scrollPosition < firstSection.offsetTop) {
          setActiveSection('')
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    navLinks.forEach(l => {
      const element = document.querySelector(l.link)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener('scroll', () => {})

      navLinks.forEach(l => {
        const element = document.querySelector(l.link)
        if (element) observer.unobserve(element)
      })
    }
  }, [navLinks])

  return (
    <header
      className={`fixed transition-all z-50 w-screen py-3 ${isScrolled ? 'bg-white shadow-xl' : ''} ${classname ?? ''}`}
    >
      <div className={`flex justify-between items-center gap-16 transition-all max-w-[1120px] w-full m-auto`}>
        <img className="max-w-16 max-lg:ml-4 rounded-full" src={logo} alt="" />
        <nav className="flex justify-between items-center gap-8 max-lg:hidden">
          {navLinks.map(l => (
            <ButtonLink
              color={isScrolled ? 'black' : 'white'}
              key={l.link}
              content={l.content}
              linkTo={l.link}
              scrolled={`#${activeSection}` === l.link}
            />
          ))}
        </nav>
        <BurgerMenu color="#fff" className="lg:hidden" />
      </div>
    </header>
  )
}

export default MainHeader
