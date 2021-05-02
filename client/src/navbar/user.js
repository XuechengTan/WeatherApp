// // import React from 'react';
// // import Button from '@material-ui/core/Button';
// // import TextField from '@material-ui/core/TextField';
// // import Dialog from '@material-ui/core/Dialog';
// // import DialogActions from '@material-ui/core/DialogActions';
// // import DialogContent from '@material-ui/core/DialogContent';
// // import DialogTitle from '@material-ui/core/DialogTitle';
// // import Divider from '@material-ui/core/Divider'
// class User extends React.Component {
//   state = {
//     token: null,
//     open: false,
//     userId: "",
//     password: ""
//   };
//
//   handleOpenDialog = () => {
//     this.setState({
//       open: true
//     })
//   }
//
//   handleClose = () => {
//     this.setState({
//       open: false
//     })
//   }
//
//   login = () => {
//     console.log("login")
//     console.log(this.state)
//   }
//
//   register = () => {
//     console.log("Register")
//     console.log(this.state)
//   }
//
//   logout = () => {
//     console.log("Logout")
//   }
//
//   history = () => {
//     console.log("history")
//   }
//
//   onChange = (field ,event) => {
//     const target = event.target;
//     this.setState({
//       [field]: target.value
//     })
//   }
//
//   render() {
//     const margin = {
//       marginRight: '20px'
//     }
//     if(this.state.token!==null) {
//       return (
//         <div className="User">
//           <span style={margin} onClick={this.history}>History</span>
//           <span onClick={this.logout}>Sign out</span>
//         </div>)
//     } else {
//       return (
//         <div className="User">
//           <span style={margin} onClick={this.handleOpenDialog}>Sign in</span>
//           <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
//             <DialogTitle id="form-dialog-title">Sign in Or Sign up</DialogTitle>
//             <DialogContent>
//               <TextField
//                 ref={ c => this.userId = c}
//                 margin="dense"
//                 id="userId"
//                 label="User Id"
//                 type="userId"
//                 fullWidth
//                 onChange={this.onChange.bind(this, 'userId')}
//               />
//               <TextField
//                 ref={c => this.password = c}
//                 margin="dense"
//                 id="password"
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 onChange={this.onChange.bind(this, 'password')}
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={this.handleClose} color="primary">
//                 Cancel
//               </Button>
//               <Button onClick={this.register} color="primary">
//                 Sign Up
//               </Button>
//               <Button onClick={this.login} color="primary">
//                 Sign in
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </div>
//         );
//     }
//   }
// }
// export default User;