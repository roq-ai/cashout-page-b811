import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createScreenshot } from 'apiSdk/screenshots';
import { screenshotValidationSchema } from 'validationSchema/screenshots';
import { OfferInterface } from 'interfaces/offer';
import { UserInterface } from 'interfaces/user';
import { getOffers } from 'apiSdk/offers';
import { getUsers } from 'apiSdk/users';
import { ScreenshotInterface } from 'interfaces/screenshot';

function ScreenshotCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ScreenshotInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createScreenshot(values);
      resetForm();
      router.push('/screenshots');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ScreenshotInterface>({
    initialValues: {
      file_path: '',
      offer_id: (router.query.offer_id as string) ?? null,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: screenshotValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Screenshots',
              link: '/screenshots',
            },
            {
              label: 'Create Screenshot',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Screenshot
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.file_path}
            label={'File Path'}
            props={{
              name: 'file_path',
              placeholder: 'File Path',
              value: formik.values?.file_path,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<OfferInterface>
            formik={formik}
            name={'offer_id'}
            label={'Select Offer'}
            placeholder={'Select Offer'}
            fetcher={getOffers}
            labelField={'title'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/screenshots')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'screenshot',
    operation: AccessOperationEnum.CREATE,
  }),
)(ScreenshotCreatePage);
