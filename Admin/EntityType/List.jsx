import ShuffleIcon from '@mui/icons-material/Shuffle'
import SearchIcon from '@mui/icons-material/Search'
import { List, ListAction, Text, EntityAction, Image, app, post } from '@List'

const listActions = (itemIds) => {

    const findAll = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post('/entityType/findAll').then(data => {
            success('Found all entity types')
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
            reloadList()
        })
    }

    const setRandomDefaultImages = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post('/entityType/setRandomDefaultImages', itemIds).then(data => {
            success('Random default images are set')
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
            reloadList()
        })
    }

    return <>
        <ListAction
            text="Find all"
            title="Finds all entity types existing in this software instance"
            icon={SearchIcon}
            click={(params) => findAll(params)}
        />
        <ListAction
            text="Set random images"
            title="Random images would be set as default images for the selected entity types"
            icon={ShuffleIcon}
            minCardinality={1}
            click={(params) => setRandomDefaultImages(params)}
            superAdmin
            devOnly
        />
    </>
}

const filters = <>
    <Text
        column='Name'
        placeholder='Name'
    />
</>

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

const entityActions = (item) => {
    const setRandomDefaultImage = ({
        error,
        setEntity,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/entityType/setRandomDefaultImage?id=${item.id}`)
            .then(data => {
                success('Random default image is set')
                setProgress(false)
                setEntity(data)
            }, e => {
                error(e)
                setProgress(false)
            })
    }

    return <>
        <EntityAction
            title='Set random default image'
            icon={ShuffleIcon}
            click={(params) => setRandomDefaultImage(params)}
            superAdmin
            devOnly
        />
    </>
}

const EntityTypes = () => {
    return <List
        title='Entity Types'
        entityType='entityType'
        listActions={listActions}
        filters={filters}
        headers={headers}
        row={row}
        entityActions={entityActions}
    />
}

export default EntityTypes