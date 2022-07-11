import { Browse as BrowseInput } from '@List';
import { Browse } from '@Browse';

const headers = <>
    <th>Name</th>
</>

const row = (item) => <>
    <td>{item.name}</td>
</>

const BrowserDialog = () => {
    return <Browse
        entityType='EntityType'
        headers={headers}
        row={row}
    />
}

const EntityTypeBrowser = ({
    column
}) => {
    return <BrowseInput
        column={column || 'EntityTypeGuid'}
        browser={BrowserDialog}
        placeholder='Entity type'
        display={(item) => item.name}
        choose={(item) => item.guid}
        required='You should choose an entity type'
    />
}

export default EntityTypeBrowser