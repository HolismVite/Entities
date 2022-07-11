import FingerprintIcon from '@mui/icons-material/Fingerprint'
import EntityTypeBrowserField from './EntityType/BrowserField'
import EntityTypeBrowserFilter from './EntityType/BrowserFilter'
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

export { EntityTypeBrowserField }
export { EntityTypeBrowserFilter }
export { EntitiesMenu }
export { EntitiesRoutes }