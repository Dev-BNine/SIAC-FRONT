import { Link } from 'react-router-dom'

// UI
import { ImgUI } from '../../UI/ImgUI/ImgUI'
// IMG
import imagePlate from '../../../Images/foodImg.png'

export const NavBarHome = () => {
  return (
    <nav>
      <ul>
        <li className='lists'>
          <Link className='anchor' to='/'><ImgUI style='imgPlateAnchor' routeImg={imagePlate} />Platos</Link>
        </li>

        <li className='lists'>
          <Link className='anchor' to='/'><ImgUI style='imgPlateAnchor' routeImg={imagePlate} />Postre</Link>
        </li>

        <li className='lists'>
          <Link className='anchor' to='/'><ImgUI style='imgPlateAnchor' routeImg={imagePlate} />Bebidas</Link>
        </li>

        <li className='lists'>
          <Link className='anchor' to='/'><ImgUI style='imgPlateAnchor' routeImg={imagePlate} />Sopas</Link>
        </li>
      </ul>
    </nav>
  )
}
