import * as yup from 'yup';

const schema = yup.object().shape({
    codec: yup.string().required(),
    file: yup.mixed().required('File is required').test('extension file', 'Format not supported', (value: File) => {
        if (!value) return false;

        return value.type.includes('audio');
    }),
})

export default schema;