import { Browse } from '@Form';
import { headers, row } from './BrowseList'

const EntityTypeField = () => {
    return <Browse
        column='EntityTypeGuid'
        entityType='EntityType'
        headers={headers}
        row={row}
        placeholder='Entity type'
        show={(item) => item.name}
        choose={(item) => item.guid}
        required='You should choose an entity type'
    />
}

export default EntityTypeField