import {
    Image,
    Text,
} from '@List';

const filters = <>
    <Text
        column='Name'
    />
</>

const sorts = [
    {
        "caption": "A-Z",
        "column": "Name",
        "direction": "asc"
    }
]

const headers = <>
    <th start>Default image</th>
    <th>Name</th>
</>

const row = (item) => <>
    <td start>
        <Image
            url={item.relatedItems.defaultImageUrl}
        />
    </td>
    <td>{item.name}</td>
</>

export { filters }
export { headers }
export { row }
export { sorts }