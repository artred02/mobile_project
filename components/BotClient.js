
export default function ClientApi() {
    fetch('https://api.botpress.cloud', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-bot-id': '06d9476c-3313-468a-9878-969d43623408'
        },
    })
    .then((response) =>  {
        return response.json()
    })
}