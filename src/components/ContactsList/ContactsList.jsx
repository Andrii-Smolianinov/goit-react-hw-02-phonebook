export default function ContactsList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}:{number} <span onClick={() => removeContact(id)}>Delete</span>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
