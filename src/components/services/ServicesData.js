import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartBar,
  faCopy,
  faMarker,
  faUserGear,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
const ChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
const CopyIcon = <FontAwesomeIcon icon={faCopy} />;
const MarkerIcon = <FontAwesomeIcon icon={faMarker} />;
const UserGearIcon = <FontAwesomeIcon icon={faUserGear} />;
const CoinsIcon = <FontAwesomeIcon icon={faCoins} />;
const LaptopCode = <FontAwesomeIcon icon={faLaptopCode} />;
export const servicesData=[
    {
        id:1,
        icon:ChartBarIcon,
        title:"Metaverse Enterprise Solutions",
        discription:'We help with legal issues involved in establishing & conducting business in Metaverse. Finjuris guide you legally & stratigically to start your own metaverse business.'
    },
    {
        id:2,
        icon:CopyIcon,
        title:'Smart contract development',
        discription:"Our team of highly skilled devs delivers innovative, secure solutions that drive results. Unleash potential of your business with Novvr's trusted blockchain development services."
    },
    {
        id:3,
        icon:MarkerIcon,
        title:'Smart Contract for Digital Wallets',
        discription:"Our team of highly skilled devs delivers innovative, secure solutions that drive results. A smart contract wallet is a digital wallet that uses smart contract technology to store and manage your money"
    },
    {
        id:4,
        icon:UserGearIcon,
        title:'Ethereum & Hyperledger smart contracts',
        discription:"Our team of highly skilled devs delivers innovative, secure solutions that drive results. A smart contract wallet is a digital wallet that uses smart contract technology to store and manage your money"
    },
    {
        id:5,
        icon:CoinsIcon,
        title:'Web Development',
        discription:"Our team of highly skilled dev deliver as part of our multi-disciplinary approach to digital development, we bring front-end, back-end, and architecture together to meet your business needs."
    },
    {
        id:6,
        icon:LaptopCode,
        title:'E-commerces',
        discription:"How to Use E-Commerce for Service-Based Businesses. creating strategic digital shopping solutions that deliver tangible business results."
    },
]