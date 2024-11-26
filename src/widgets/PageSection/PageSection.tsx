import { PageSectionProps } from '../../shared/model/types'

function PageSection({ children, classname }: PageSectionProps) {
  return <section className={`page-section relative ${classname ?? ''}`}>{children}</section>
}

export default PageSection
