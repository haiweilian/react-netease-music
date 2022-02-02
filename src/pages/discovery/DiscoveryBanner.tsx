import { useEffect, useState } from 'react'
import { Carousel } from 'antd'
import { getBanner } from '~/api/base'
import type { IBanner } from '~/types/index'

export default function DiscoveryBanner() {
  const [banners, setBanners] = useState<IBanner[]>([])

  useEffect(() => {
    getBanner().then((res) => {
      setBanners(res)
    })
  }, [])

  return (
    <Carousel style={{ height: '200px' }} autoplay={true}>
      {banners.map((item) => (
        <div key={item.imageUrl}>
          <img className="banner-cover" src={item.imageUrl} alt={item.typeTitle} />
        </div>
      ))}
    </Carousel>
  )
}
