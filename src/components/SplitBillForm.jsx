import { useState } from 'react'
import Button from './Button'

export default function SplitBillForm({
  selectedFriend,
  onSplitBill
}) {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const paidByFriend = bill ? bill - paidByUser : ''
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  function handleSubmit(event) {
    event.preventDefault()

    if (!bill || !paidByUser) return

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />

      <label htmlFor="youExpense">👧 You expense</label>
      <input
        type="text"
        id="youExpense"
        value={paidByUser}
        onChange={e =>
          setPaidByUser(
            Number(e.target.value) > bill
              ? paidByUser
              : Number(e.target.value)
          )
        }
      />

      <label htmlFor="friendExpense">
        🧑‍🤝‍🧑 {selectedFriend.name}'s expense
      </label>
      <input
        type="text"
        id="friendExpense"
        disabled
        value={paidByFriend}
      />

      <label htmlFor="who">🤑 Who is paying the bill?</label>
      <select
        id="who"
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}
