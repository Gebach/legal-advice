import React from 'react'

export interface MainHeaderProps {
  classname?: string
}

export interface AbsoulteContainerProps {
  classname?: string
  children: React.ReactNode
}

export interface FullWidthImageProps {
  classname?: string
  src: string
  alt?: string
}

export interface PageSectionProps {
  classname?: string
  id?: string
  children: React.ReactNode
}

export interface BackgroundTextContainerProps {
  classname?: string
  children: React.ReactNode
  background?: string
  gradient?: string
  theme?: 'dark' | 'light'
}

export interface ButtonPrimaryProps {
  content: string
  linkTo?: string
  classname?: string
}

export interface ListIconComponentProps {
  items: Array<Record<string, string>>
  title?: string
  classname?: string
  icon?: React.ReactNode
}
