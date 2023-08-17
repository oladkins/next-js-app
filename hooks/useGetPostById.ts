export async function getPostById(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Error when data fetching');
  }

  return res.json();
}
