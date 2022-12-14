import List from '@mui/material/List';
import Container from '@mui/material/Container';

import CardMovie from '@/components/CardMovie';
import MenuButton from '@/components/MenuButton';

import { seriesList } from '@/data/data';
import { SeriesProps } from '@/modules/series/types';

interface Props {
  seriesList: SeriesProps[]
}

export default function Home({ seriesList }: Props) {
  return (
    <Container sx={{padding: 0}}>
      <List disablePadding>
        {seriesList.map(list => (
          <CardMovie key={list.idTDMV} link={list.justWatchLink} img={list.poster} name={list.name} />
        ))}
      </List>
      {/* <MenuButton /> */}
    </Container>
  )
}


export async function getServerSideProps() {
  return { props: { seriesList } }
}