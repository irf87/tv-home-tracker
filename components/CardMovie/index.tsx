import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Image from 'next/image';

interface Props {
  img: string;
  name: string;
  link: string;
}

function CardMovie({ img, name, link }: Props) {
  return (
    <ListItem divider disablePadding>
      <ListItemAvatar>
        <Link rel="noreferrer" href={link} target="_blank">
          <Image alt="movie-img" height={140} src={img} width={100} />
        </Link>
      </ListItemAvatar>
      <Box alignSelf="baseline" display="flex" height="100%" ml={2} width="100%">
        <ListItemText primary={name} secondary="" />
      </Box>
    </ListItem>
  )
}

export default CardMovie;