const destroyCreature = (id: string): Promise<Record<string, never>> => {
  return fetch(`/api/creatures/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyCreature };
