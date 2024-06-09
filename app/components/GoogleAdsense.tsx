import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Adsense: React.FC = () => {
  const { asPath } = useRouter()
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [asPath])

  return (
    <div key={asPath}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="xxx"
        data-ad-format='auto'
        data-ad-client='xxx'
        data-ad-slot='xxx'
        data-full-width-responsive='true'
      />
    </div>
  )
}
export default Adsense