import List from '@mui/material/List';
import Container from '@mui/material/Container';

import CardMovie from '@/components/CardMovie';

import { seriesList } from '@/data/data';
import { SeriesProps } from '@/modules/series/types';


export default function Home() {
  const seriesListLocal: SeriesProps[] = seriesList;
  return (
    <Container sx={{padding: 0}}>
      <div>Offline</div>
      <List disablePadding>
        {seriesListLocal.map(list => (
          <CardMovie key={list.idTDMV} link={list.justWatchLink} img={list.poster} name={list.name} />
        ))}
      </List>
    </Container>
  )
}