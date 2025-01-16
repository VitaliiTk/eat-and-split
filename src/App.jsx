import { useState } from 'react'
import AddFriendForm from './components/AddFriendForm'
import Button from './components/Button'
import FriendsList from './components/FriendsList'
import SplitBillForm from './components/SplitBillForm'
import { initialFriends } from './friends'
import './index.css'

export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriendForm, setShowAddFriendForm] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend(params) {
    setShowAddFriendForm(show => !show)
  }

  // Add new friend logic
  function handleAddFriend(newFriend) {
    setFriends(some => [...friends, newFriend])
    setShowAddFriendForm(false)
  }

  // Friend Select Logic
  function handleSelectFriend(friend) {
    setSelectedFriend(cur => (cur?.id === friend.id ? null : friend))
    // if (selectedFriend?.id === friend?.id) setSelectedFriend(null)

    setShowAddFriendForm(false)
  }

  // split bill logic
  function handleSplitBill(value) {
    // console.log(value)
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    )

    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriendForm && (
          <AddFriendForm onAddFriend={handleAddFriend} />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriendForm ? 'Close' : 'Add friend'}
        </Button>
      </div>

      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  )
}
