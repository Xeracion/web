import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'

import { DisableDraftMode } from '@/components/DisableDraftMode'
import { SanityLive } from '@/sanity/lib/live'

export async function LivePreview() {
  const { isEnabled } = await draftMode()

  return (
    <>
      <SanityLive />
      {isEnabled && (
        <>
          <VisualEditing />
          <DisableDraftMode />
        </>
      )}
    </>
  )
}
