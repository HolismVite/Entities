import { Browse } from '@Form';
import {
    filters,
    headers,
    row,
    sorts,
} from './BrowseList'

const EntityTypeField = () => {
    return <Browse
        entityType='EntityType'
        column='EntityTypeGuid'
        placeholder='Entity type'
        required='You should choose an entity type'
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        show={(item) => item.name}
        choose={(item) => item.guid}
    />
}

export default EntityTypeField