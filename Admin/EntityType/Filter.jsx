import { Browse } from '@List';
import { headers, row } from './BrowseList'

const EntityTypeFilter = () => {
    return <Browse
        entityType='EntityType'
        column='EntityTypeGuid'
        placeholder='Entity type'
        required='You should choose an entity type'
        headers={headers}
        row={row}
        show={(item) => item.name}
        choose={(item) => item.guid}
    />
}

export default EntityTypeFilter