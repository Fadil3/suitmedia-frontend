import './Footer.css'
import { icons } from '../../constants'

export default function Footer() {
  const social = [
    {
      name: 'facebook',
      icon: icons.facebookOfficial,
      href: 'https://www.facebook.com/suitmedia',
    },
    {
      name: 'twitter',
      icon: icons.twitter,
      href: 'https://www.twitter.com/suitmedia',
    },
  ]
  return (
    <footer>
      <p>Copyright &copy; 2016. PT Company</p>
      <div className="footer__social">
        {social.map((item, index) => (
          <a
            href={item.href}
            key={'footer' + index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.icon} alt={item.name} />
          </a>
        ))}
      </div>
    </footer>
  )
}
