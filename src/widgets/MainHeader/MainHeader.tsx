import { MainHeaderProps } from '../../shared/model/types'
import { useEffect, useRef, useState } from 'react'
import ButtonLink from '../../shared/ui/ButtonLink/ButtonLink'
import BurgerMenu from '../../shared/ui/BurgerMenu/BurgerMenu'
import logo from '../../shared/assets/logo.png'
import { Link, useRouterState } from '@tanstack/react-router'

interface navLinksProps {
  content: string
  link: string
  isSectionScrolled: boolean
}

const scrollPositions = new Map<string, number>()

function MainHeader({ classname }: MainHeaderProps) {
  const { location } = useRouterState()

  const previousPath = useRef(location.pathname)

  useEffect(() => {
    // сохраняем позицию перед уходом со страницы
    return () => {
      scrollPositions.set(previousPath.current, window.scrollY)
    }
  }, [location.pathname])

  useEffect(() => {
    const path = location.pathname

    if (path === '/') {
      // если возвращаемся на главную, восстанавливаем scroll
      const y = scrollPositions.get(path) ?? 0
      console.log(y)
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: 'smooth' })
      }, 1000)
    } else if (location.hash) {
      // если переход по якорю
      const targetId = location.hash
      setTimeout(() => {
        const el = document.querySelector(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 500)
    } else {
      // иначе скроллим в начало
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    previousPath.current = path
  }, [location.pathname, location.hash])

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
        <Link to="/">
          <img className="max-w-16 max-lg:ml-4 rounded-full" src={logo} alt="" />
        </Link>
        <nav className="flex justify-between items-center gap-8 max-lg:hidden">
          {navLinks.map(l => (
            <ButtonLink
              color={isScrolled ? 'black' : 'white'}
              key={l.link}
              content={l.content}
              linkTo={location.pathname === '/' ? l.link : `/${l.link}`}
              scrolled={location.pathname === '/' && `#${activeSection}` === l.link}
            />
          ))}
        </nav>
        <BurgerMenu color="#fff" className="lg:hidden" />
      </div>
    </header>
  )
}

export default MainHeader
