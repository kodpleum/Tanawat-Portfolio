import Link from "next/link"
import {FaGithub, FaFacebook, FaInstagram} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/kodpleum"},
    {icon: <FaFacebook />, path: "https://www.facebook.com/share/1N8NgaLbPW/?mibextid=wwXIfr"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/t._la_ong?igsh=OTlqZW1sZGF5azZy&utm_source=qr"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social