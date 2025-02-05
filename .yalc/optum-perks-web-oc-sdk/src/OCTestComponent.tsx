import type { FunctionComponent } from 'react'
// import { useTranslation } from 'next-i18next'
import { Testing } from 'optum-perks-web-components'
// eslint-disable-next-line no-restricted-imports
// import '../../optum-perks-web-styles/src/styles/contentWrapper.scss'
// eslint-disable-next-line no-restricted-imports
// import '../../optum-perks-web-styles/globals.scss'
import './globals.scss'

type Props = {
  heading: string
}

/** Intro section for the online care pages. */
export const OCTestComponent: FunctionComponent<Props> = ({ heading }) => {
  // const { t } = useTranslation('common')

  return (
    <div id="crazy-thing">
      <Testing heading={heading} />
      <div>other thing</div>
    </div>
  )
}
