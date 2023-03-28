// UI
import { ImgUI } from '../../UI/ImgUI/ImgUI'
import { NavBarHome } from '../../UI/NavBarHome/NavBarHome'

// IMG
import imagePlate from '../../../Images/foodImg.png'

export const ContainerRight = () => {
  return (
    <div className='containImage'>
      <ImgUI style='imgPlate' routeImg={imagePlate} />
      <NavBarHome />
    </div>
  )
}
