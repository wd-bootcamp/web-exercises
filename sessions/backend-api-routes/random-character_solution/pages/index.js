import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(response => response.json())

export default function HomePage() {
  const {data, isLoading} = useSWR('/api/random-character',fetcher)

  if(isLoading) return 'loading...'
  if(!data) return 'error'

  return <pre>
    {JSON.stringify(data,null,4)}
    </pre>;
}
