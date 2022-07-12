import { Image } from '@Browse';

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

export { headers }
export { row }