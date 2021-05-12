import React from 'react';
import Style from './search.module.css'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MuiAlert  from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

class Search extends React.Component {
    state = {
        search: "",
        open: false,
        msg: "",
    }

    onChange = (e) => {
        const target = e.target
        this.setState({
            search: target.value
        })
    }

  handleSearch = () => {
        if(this.verify()){
            this.props.search(this.state.search)
            
        }
    }

    verify = () => {
        const words = this.state.search
        if(words.length === 1 && words[0]==="") {
            this.setState({
                open: true,
                msg: "Please input a city"
            })
            return false
        }
        else if(words.length === 0) {

            this.setState({
                open: true,
                msg: "Please input"
            })
            return false
        }
        else if(words.length === 2 && (words[0]===""||words[1]==="1")){
            this.setState({
                open: true,
                msg: "input error!"
            })
        } else {
            return true
        }
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    onKeyDownchange =(e) => {

        if(e.keyCode === 13) {
            this.handleSearch();
            e.cancleBubble = true;
            e.returnValue = false;
            return false;
        }
    }

    render() {

        return (
            
            <Paper className={Style.rootStyle} component="form">
                    
                <InputBase
                    className={Style.inputStyle}
                    placeholder="Search Weather Forecaster eg. London"
                    inputProps={{ 'aria-label': 'search weather forecaster' }}
                    onChange={(e) => this.onChange(e)}
                    onKeyDown={e=> this.onKeyDownchange(e)}
                />
                {/*prevent refresh*/}
                <input style={{display:"none"}}></input>
                <Divider className={Style.dividerStyle} orientation="vertical" />
                <IconButton onClick={this.handleSearch}  className={Style.iconButtonStyle} aria-label="search" >
                    <SearchIcon />
                </IconButton>
                <Snackbar open={this.state.open} autoHideDuration={2000} onClose={this.handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={this.handleClose} severity="error" >
                        {this.state.msg}
                    </Alert>
                </Snackbar>
                {/*  */}
            </Paper>
        );
    }
}
export default Search;
