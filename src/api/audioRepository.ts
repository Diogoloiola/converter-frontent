import api from './api';

export default {
    async converterAudio(data: Record<string, any>) {
        return await api.post('/web/v1/audios', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}