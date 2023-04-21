import { MyLinksContainer } from "./styles";
import {
  Github,
  Instagram,
  Linkedin,
  Rocket,
} from 'lucide-react'

const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/gustavohenri316',
    icon: <Github size={14} />
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/gustavoh.png',
    icon: <Instagram size={14} />
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/gustavohenri316/',
    icon: <Linkedin size={14} />
  },
  {
    name: 'rocketseat',
    url: 'https://app.rocketseat.com.br/me/gustavohenri316',
    icon: <Rocket size={14} />
  },
 
]
export function MyLinks() {
  return (
    <MyLinksContainer>
       {
        socialLinks.map(item => {
          return (
            <a href={item.url} target="_blank">
              {item.icon}
              {item.name}
            </a>
          )
        })
       }
    </MyLinksContainer>
  );
}
