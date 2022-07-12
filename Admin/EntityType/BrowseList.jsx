import { List } from '@Browse';

const headers = <>
    <th start>Default image</th>
    <th>Name</th>
</>

const row = (item) => <>
    <td start>
        <Image
            url={item.relatedItems.defaultImageUrl}
            uploadUrl={`/entityType/setImage?entityTypeId=${item.id}`}
        />
    </td>
    <td>{item.name}</td>
</>

const EntityTypeBrowseList = <List
    entityType='EntityType'
    headers={headers}
    row={row}
/>

export default EntityTypeBrowseList