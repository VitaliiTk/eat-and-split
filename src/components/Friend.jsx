import Button from './Button'

export default function Friend({
  friend,
  onSelection,
  selectedFriend
}) {
  let color = ''
  if (friend.balance > 0) color = 'green'
  if (friend.balance < 0) color = 'red'

  let text
  if (friend.balance === 0) text = `You and ${friend.name} are even`
  if (friend.balance > 0)
    text = `${friend.name} owes you ${friend.balance}€`
  if (friend.balance < 0)
    text = `You owe ${friend.name} ${Math.abs(friend.balance)}€`

  const isSelected = selectedFriend?.id === friend.id

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p className={color}>{text}</p>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  )
}
