import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {
    state = {
        search:""
    }
    handleSearch = () => {
        console.log("Search:" + this.state.search)
    }
    onChange = (e) => {
        const target = e.target
        this.setState({
            search: target.value
        })
    }
    render() {
        const rootStyle = {
            padding: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '400px',
        }
        const inputStyle = {
            marginLeft: '10px',
            flex: 1,
       }
       const iconButtonStyle = {
            padding: 10,
       }
       const dividerStyle = {
            height: 28,
            margin: 4,
       }
        return (
            <Paper className="Search" component="form" style={rootStyle}>
                <InputBase
                    style={inputStyle}
                    placeholder="Search Weather Forecaster"
                    inputProps={{ 'aria-label': 'search weather forecaster' }}
                    onChange={(e) => this.onChange(e)}
                />
                <Divider style={dividerStyle} orientation="vertical" />
                <IconButton onClick={this.handleSearch} style={iconButtonStyle} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }
}
export default Search;