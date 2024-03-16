import FriendListItem from "./FriendListItem";
import css from "./FriendListItem.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={css["ul-item"]}>
      {friends.map((friend) => (
        <li key ={friend.id}><FriendListItem{...friend}/></li>
      ))}
    </ul>
  );
};
export default FriendList;
