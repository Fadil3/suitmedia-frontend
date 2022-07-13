import { Carousel } from 'react-carousel-minimal'
import { images } from '../../constants'
import './Carousel.css'

export default function CarouselModule() {
  const data = [
    {
      image: images.bg,
      caption: `<div className="carousel__caption">
                THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY
                </div>`,
    },
    {
      image: images.aboutBg,
      caption: 'WE DONT HAVE THE BEST BUT WE HAVE THE GREATEST TEAM',
    },
  ]

  const captionStyle = {
    fontSize: '30px',
    textAlign: 'left',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '10px',
    width: '50%',
    margin: '0 auto',
    bottom: '100px',
    left: '100px',
  }

  return (
    <div className="">
      <Carousel
        data={data}
        width="100%"
        height="600px"
        captionStyle={captionStyle}
        captionPosition="bottom"
        dots={true}
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        style={{
          textAlign: 'left',
          maxWidth: '100%',
          maxHeight: '800px',
          // margin: '40px auto',
        }}
      />
    </div>
  )
}
