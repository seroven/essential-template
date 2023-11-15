import { library } from '@fortawesome/fontawesome-svg-core'
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUserSecret } from '@fortawesome/free-solid-svg-icons'


export default function addFontAwesomeIcons() {
    library.add(faChrome);
    library.add(faBars);
}