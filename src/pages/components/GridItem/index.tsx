import { Grid, GridTypeMap } from '@mui/material';

export default function GridItem(props: GridTypeMap['props']) {
  return (
    <Grid
      border={1}
      borderRadius={'5px'}
      borderColor={'#E2E8F0'}
      item
      xs={12}
      md
      padding={2}
      {...props}
    />
  );
}
