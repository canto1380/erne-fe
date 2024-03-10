import {
  BsCartPlus,
  BsBoxSeamFill,
  BsMenuButtonWideFill,
  BsMenuDown,
} from 'react-icons/bs'
import { BiCategoryAlt, BiUserCircle, BiCarousel } from 'react-icons/bi'
import { FaList, FaShippingFast } from 'react-icons/fa'
import { FcStatistics, FcDataConfiguration } from 'react-icons/fc'
import { FaLocationDot, FaPerson } from 'react-icons/fa6'
import { MdEngineering } from 'react-icons/md'
import styles from './sidebar.module.css'

export const itemsSideBar = [
  {
    title: 'perfil',
    iconName: <BiUserCircle className={`${styles.sizeIcon}`} />,
    name: 'Perfil',
  },
  {
    title: 'ventas',
    iconName: <FaShippingFast className={`${styles.sizeIcon}`} />,
    name: 'Ventas',
  },
  {
    title: 'compras',
    iconName: <BsCartPlus className={`${styles.sizeIcon}`} />,
    name: 'Compras',
  },
  {
    title: 'productos',
    iconName: <FaList className={`${styles.sizeIcon}`} />,
    name: 'Productos',
  },
  {
    title: 'stock',
    iconName: <BsBoxSeamFill className={`${styles.sizeIcon}`} />,
    name: 'Stock',
  },
  {
    title: 'sucursales',
    iconName: <FaLocationDot className={`${styles.sizeIcon}`} />,
    name: 'Sucursales',
  },
  {
    title: 'proveedores',
    iconName: <MdEngineering className={`${styles.sizeIcon}`} />,
    name: 'Proveedores',
  },
  {
    title: 'clientes',
    iconName: <FaPerson className={`${styles.sizeIcon}`} />,
    name: 'Clientes',
  },
]
