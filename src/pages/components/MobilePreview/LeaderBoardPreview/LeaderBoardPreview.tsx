import { useFormContext } from 'react-hook-form';

import { Box } from '@mui/material';

import HeaderPreview from './components/HeaderPreview/HeaderPreview';
import PrizePreview from './components/PrizePreview/PrizePreview';
import SideNavPreview from './components/SideNavPreview/SideNavPreview';
import TablePreview from './components/TablePreview/TablePreview';
import TournamentSelectorPreview from './components/TournamentSelectorPreview/TournamentSelectorPreview';

const LeaderboardPreview = () => {
  // const { watch } = useFormContext();
  // const formData = watch('data.main');
  // const bgColor = formData?.backgroundColor || '#2d1d48';
  
  // ACTIVE COLOR VALUE
  let bgColor = '#2d1d48';

  return (
    <Box bgcolor={bgColor} borderRadius='16px 16px 0px 0px' paddingTop='8px'>
      <HeaderPreview />
      <Box style={{ position: 'relative', paddingTop: '50px', marginBottom: '10px' }}>
        <TournamentSelectorPreview />
        <SideNavPreview />
      </Box>
      <Box style={{ position: 'relative', marginBottom: '10px' }}>
        <PrizePreview />
      </Box>
      <TablePreview />
    </Box>
  );
};

export default LeaderboardPreview;
