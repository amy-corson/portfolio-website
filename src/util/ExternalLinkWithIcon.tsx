import LaunchIcon from '@mui/icons-material/Launch';

const ExternalLinkWithIcon = ({url, string, classNames}: {url: string, string: string, classNames?: string}) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`external-link ${classNames}`}>{string}<LaunchIcon /><p className='invisible'>(opens in external tab)</p></a>
    )
}

export default ExternalLinkWithIcon