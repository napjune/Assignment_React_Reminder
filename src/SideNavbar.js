import React from 'react';
import './SideNavbar.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Badge from '@material-ui/core/Badge';



export default class Example extends React.Component {
    pageToggle() {
        console.log("haha");
    }

    render() {
        return (
            < div className="sidenav">
                <List component="nav">
                    <ListItem button onClick={this.props.pageComplete}>
                        <ListItemIcon  >
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Completed" /><Badge color="secondary" badgeContent={this.props.completeItemCount}>
                        </Badge>
                    </ListItem>
                    <ListItem className="responsive" button onClick={this.props.pagetodo}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="All" />
                    </ListItem>
                </List>
            </div>
        );
    }
}