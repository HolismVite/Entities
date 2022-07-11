import FingerprintIcon from '@mui/icons-material/Fingerprint';
import EntityTypeBrowser from './EntityType/BrowserField';
import EntityTypes from './EntityType/List'

const EntitiesRoutes = [
    {
        path: "/entityTypes",
        component: EntityTypes,
        superAdmin: true
    }
]

const EntitiesMenu = [
    {
        title: "Entity Types",
        icon: FingerprintIcon,
        url: "/entityTypes",
        superAdmin: true
    }
]

export { EntityTypeBrowser }
export { EntitiesMenu }
export { EntitiesRoutes }