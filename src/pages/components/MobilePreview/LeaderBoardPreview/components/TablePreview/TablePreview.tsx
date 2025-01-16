import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { starSvg } from '../../../asset';

const defaultData = [
  { id: 4, name: 'player_100V515EL', score: 5984 },
  { id: 5, name: 'player_XU43VEIB', score: 5894 },
  { id: 6, name: 'player_352106X', score: 5881 },
  { id: 7, name: 'player_IJ5C695H', score: 5855 },
  { id: 8, name: 'player_34N1XLF4', score: 5791 },
  { id: 143, name: 'You', score: 2560 }
];

const TablePreview = ({
  data = defaultData,
  fontColor = 'white',
  iconColor = 'white',
  secondaryColor = '#03A6F7'
}: any) => {
  const cellStyles = (isYou = false) => ({
    fontSize: '12px',
    fontWeight: isYou ? 600 : 400,
    color: fontColor,
    textAlign: 'center',
    padding: 0,
    borderBottom: 'none',
    width: '33.33%',
    fontFamily: 'Inter'
  });

  const rowBg = ['transparent', 'rgba(255, 255, 255, 0.05)', secondaryColor];

  const flexStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Table sx={{ minWidth: 300, borderCollapse: 'collapse' }}>
        <TableBody>
          {data.map(({ id, name, score }, index) => (
            <TableRow
              key={`${name}-${index}`}
              sx={{
                height: '24px',
                backgroundColor: id === 143 ? rowBg[2] : index % 2 === 0 ? rowBg[0] : rowBg[1]
              }}
              role="row"
            >
              <TableCell sx={cellStyles(id === 143)} role="cell" aria-label={`ID: ${id}`}>
                {id}
              </TableCell>
              <TableCell sx={cellStyles(id === 143)} role="cell" aria-label={`Name: ${name}`}>
                {name}
              </TableCell>
              <TableCell sx={cellStyles(id === 143)} role="cell" aria-label={`Score: ${score}`}>
                <Box sx={flexStyles}>
                  {starSvg(iconColor)} {score}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TablePreview;