import { Browse } from '@Form';
import { headers, row } from './BrowseList'

const EntityTypeField = () => {
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

export default EntityTypeField