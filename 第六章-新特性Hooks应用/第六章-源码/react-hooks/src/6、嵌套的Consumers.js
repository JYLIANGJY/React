// function HeaderBar() {
//     return (
//       <CurrentUser.Consumer>
//         {user =>
//           <Notifications.Consumer>
//             {notifications =>
//               <header>
//                 Welcome back, {user.name}!
//                 You have {notifications.length} notifications.
//               </header>
//             }
//         }
//       </CurrentUser.Consumer>
//     );
//   }


function HeaderBar() {
  const user = useContext(CurrentUser);
  const notifications = useContext(Notifications);

  return (
    <header>
      Welcome back, {user.name}!
      You have {notifications.length} notifications.
    </header>
  );
}