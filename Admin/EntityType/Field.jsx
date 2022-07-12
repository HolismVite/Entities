import { Browse } from '@Form';
import EntityTypeBrowseList from './BrowseList';

const EntityTypeField = ({
    column
}) => {
    return <Browse
        column={column || 'EntityTypeGuid'}
        list={EntityTypeBrowseList}
        placeholder='Entity type'
        show={(item) => item.name}
        choose={(item) => item.guid}
        required='You should choose an entity type'
    />
}

export default EntityTypeField