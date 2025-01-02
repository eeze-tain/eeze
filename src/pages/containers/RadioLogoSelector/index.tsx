import { Fragment, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Divider,
  Box
  // useTheme
} from '@mui/material';

// import { DropzoneOptions } from 'react-dropzone/.';

// import { readAsDataURL } from '@common/utils';

import DeleteSVG from '../../assets/delete.svg';
// import FileUploadBox from '../../components/FileUploadBox';

const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const MAX_WIDTH = 101;
const MAX_HEIGHT = 101;

// NOTE: Move this helper function to utils?
const validateImageDimensions = (file: File, dimensions: { width: number; height: number }) => {
  const { width, height } = dimensions;

  return new Promise<File>((resolve, reject) => {
    const img = new Image();

    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      if (img.width > width || img.height > height) {
        reject(new Error(`Image dimensions must be ${height}x${width}px or smaller`));
        return;
      }
      resolve(file);
    };
    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new Error('Failed to load image'));
    };
  });
};

type RadioType = 'default' | 'custom';
const RadioLogoSelector = () => {
  // const theme = useTheme();
  const { setValue } = useFormContext<any>();

  const [radioType, setRadioType] = useState<RadioType>('default');
  // const [switchChecked] = useState(true);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const handleClearFiles = () => {
      setLogoUrl('');
      setValue('data.logo.url', '');
    };

  }, [setValue]);

  // const active = theme.palette.primary.main;
  // const inActive = theme.palette.grey['600'];

  const dropzoneOptions: any = {
    onDrop: async (acceptedFiles) => {
      try {
        const selectedFile = acceptedFiles.at(0);

        if (!selectedFile) return;

        // const imageData = await readAsDataURL(selectedFile);

        // const asset = imageData?.toString();

        // setLogoUrl(asset || '');

        // if (radioType === 'custom') {
        //   setValue('data.logo.url', asset);
        // }
      } catch (e: unknown) {

      }
    },
    accept: {
      'image/png': ['.png']
    },
    maxSize: MAX_SIZE,
    maxFiles: 1,
    getFilesFromEvent: async (event) => {
      let files: File[] = [];

      if ('dataTransfer' in event && event.dataTransfer) {
        // Handle drag and drop
        const fileList = event.dataTransfer.files;
        files = Array.from(fileList);
      } else if ('target' in event && event.target instanceof HTMLInputElement) {
        // Handle file input
        const fileList = event.target.files;
        if (!fileList) return [];
        files = Array.from(fileList);
      }

      return Promise.all(
        files.map((file) =>
          validateImageDimensions(file, { width: MAX_WIDTH, height: MAX_HEIGHT }).catch((e) => {

            return Promise.reject(e);
          })
        )
      );
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRadioType(value as RadioType);
    setValue('data.logo.url', value === 'default' ? '' : logoUrl);
  };

  return (
    <Fragment>
      <RadioGroup name='logo-selector' onChange={handleRadioChange}>
        <FormControlLabel
          value={'default'}
          checked={radioType === 'default'}
          control={<Radio size='small' />}
          label={
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 600
              }}>
              {/* {t('promotions.tournaments.create.steps.themes.radio.defaultLogo')} -{' '} */}
              <span style={{ fontWeight: 400 }}>
                {/* {t('promotions.tournaments.create.steps.themes.radio.customLogoSpan')} */}
              </span>
            </Typography>
          }
        />
        <FormControlLabel
          value={'custom'}
          checked={radioType === 'custom'}
          control={<Radio size='small' />}
          label={
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 600
              }}>
              {/* {t('promotions.tournaments.create.steps.themes.radio.customLogo')} */}
            </Typography>
          }
        />
      </RadioGroup>
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '12px',
          fontWeight: 300,
          marginBottom: '16px'
        }}>
        {/* {t('promotions.tournaments.create.steps.themes.radio.customLogoNote')} */}
      </Typography>
      <Divider style={{ width: '100%', paddingBottom: '16px' }} />
      {/* <FileUploadBox {...dropzoneOptions}>
        {([files, setFiles]) =>
          files.length > 0 ? (
            <Box marginTop='16px'>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '14px'
                }}>
                {t('promotions.tournaments.create.steps.themes.fileUpload.label.uploaded')}
              </Typography>
              <HStack p={1}>
                <FormControlLabel
                  control={
                    <CustomSwitch
                      checked={switchChecked}
                      customColor={switchChecked ? active : inActive}
                      // checked={settingsMode === SETTINGS_MODE.ADVANCED}
                      // onChange={handleSwitchOnChange}
                    />
                  }
                  label={
                    <Typography
                      paddingLeft={2}
                      sx={{
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '14px'
                      }}>
                      {t('promotions.tournaments.create.steps.themes.fileUpload.label.straight')}
                    </Typography>
                  }
                />
              </HStack>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                {files.map((file) => (
                  <Fragment key={file.name}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        fontSize: '12px'
                      }}>
                      {file.name}
                    </Typography>
                    <Box
                      component='img'
                      loading='lazy'
                      onClick={() => {
                        setFiles((prev) => prev.filter((prevFile) => prevFile.name !== file.name));
                        setLogoUrl('');
                        setValue('data.logo.url', '');
                      }}
                      style={{ cursor: 'pointer' }}
                      src={DeleteSVG}
                      alt='delete icon'
                    />
                  </Fragment>
                ))}
              </Box>
            </Box>
          ) : null
        }
      </FileUploadBox> */}
    </Fragment>
  );
};

export default RadioLogoSelector;
