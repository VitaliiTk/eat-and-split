import { useState } from 'react'
import Button from './Button'

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !image) return

    const id = Math.floor(Math.random() * 100000)
    // console.log(id)

    const newFriend = {
      id,
      name,
      image,
      balance: 0
    }

    setName('')
    setImage('https://i.pravatar.cc/48')

    onAddFriend(newFriend)
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friendName">🧑‍🤝‍👩Name</label>
      <input
        type="text"
        id="friendName"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label htmlFor="imageUrl">🖼️ Image URL</label>
      <input
        type="url"
        id="imageUrl"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  )
}
