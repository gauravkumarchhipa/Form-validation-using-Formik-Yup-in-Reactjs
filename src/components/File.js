import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FILE_SIZE = 1024*9;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp', 'application/pdf'];

const File1 = () => {
  const initialValues = {
    file: null
  };

  const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .required('A file is required')
      .test(
        'fileSize',
        'File size is too large',
        value => value && value.size <= FILE_SIZE
      )
      .test(
        'fileFormat',
        'Unsupported file format',
        value => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                setFieldValue('file', event.currentTarget.files[0]);
              }}
            />

            <ErrorMessage name="file" />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default File1;