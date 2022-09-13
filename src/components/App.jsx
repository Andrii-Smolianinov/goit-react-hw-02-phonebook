import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/Transaction/Transaction';

import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendsList/friends.json';
import transactions from 'components/Transaction/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} /> 
      <TransactionHistory items={transactions} />     
    </>
  );
};
