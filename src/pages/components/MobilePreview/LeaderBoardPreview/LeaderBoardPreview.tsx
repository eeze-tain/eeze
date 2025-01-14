import { Box } from '@mui/material';
import HeaderPreview from './components/HeaderPreview/HeaderPreview';
import PrizePreview from './components/PrizePreview/PrizePreview';
import SideNavPreview from './components/SideNavPreview/SideNavPreview';
import TablePreview from './components/TablePreview/TablePreview';
import TournamentSelectorPreview from './components/TournamentSelectorPreview/TournamentSelectorPreview';

const LeaderboardPreview = ({ primaryColor, secondaryColor, backgroundColor, logoUrl }) => {
  return (
    <Box bgcolor={backgroundColor} borderRadius="16px 16px 0px 0px" paddingTop="8px">
      <HeaderPreview logoUrl={logoUrl} primaryColor={primaryColor} />
      <Box style={{ position: 'relative', paddingTop: '50px', marginBottom: '10px' }}>
        <TournamentSelectorPreview secondaryColor={secondaryColor} bgColor={backgroundColor} />
        <SideNavPreview btnBackground={primaryColor} secondaryColor={secondaryColor} />
      </Box>
      <Box style={{ position: 'relative', marginBottom: '10px' }}>
        <PrizePreview backgroundColor={backgroundColor} />
      </Box>
      <TablePreview secondaryColor={primaryColor} />
    </Box>
  );
};

export default LeaderboardPreview;