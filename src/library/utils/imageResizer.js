export const imageResizer = (item) => {
    return (
        {
            aspectRatio: (item.width / item.height),
            width: '40%',
            marginLeft: 'auto',
            marginRight: 'auto',
            resizeMode: 'cover'
        }
    )
};
export const imageFiller = (item) => {
    return (
        {
            aspectRatio: (item.width / item.height),
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            resizeMode: 'cover'
        }
    )
};
