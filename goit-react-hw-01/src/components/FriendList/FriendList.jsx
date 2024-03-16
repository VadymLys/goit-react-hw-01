import FriendListItem from "./FriendListItem";
import css from "../FriendList/FriendListItem.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={css["ul-item"]}>
      {friends.map((friend) => {
        return  <li key ={friend.id}><FriendListItem{...friend}/></li>  ;
      })}
    </ul>
  );
};
export default FriendList;
