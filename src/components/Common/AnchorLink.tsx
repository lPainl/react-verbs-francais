import { Anchor, AnchorExtendedProps } from 'grommet'
import { Link, LinkProps } from 'react-router-dom'

type AnchorLinkProps = LinkProps & AnchorExtendedProps

export const AnchorLink: React.FC<AnchorLinkProps> = (props) => {
  return <Anchor as={Link} {...props} color={'accent-3'} />
}
