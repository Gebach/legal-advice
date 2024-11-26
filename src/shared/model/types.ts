import React from 'react'

export interface MainHeaderProps {
  children: React.ReactNode
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
  children: React.ReactNode
}

export interface BackgroundTextContainerProps {
  classname?: string
  children: React.ReactNode
  background?: string
  gradient?: string
}

export interface ButtonPrimaryProps {
  content: string
  linkTo?: string
}
