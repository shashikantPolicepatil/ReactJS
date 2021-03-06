import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

//mui 
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card' ;
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card:{
    display:'flex',
    marginBottom:10,
},
image:{
    minWidth:200,
},
content:{
    padding:5,
    objectFit:'cover'
}
};

export class DisplayScream extends Component {
    render() { 
        dayjs.extend(relativeTime);
        const {classes,scram:{body,
            screamId=screamId,            
            userHandle,
            createdAt,
            commentCount,
            likeCount}
    } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <Typography variant="h5" color="primary" component={Link} to={'/user/${userHandle}'}>{userHandle}</Typography>
                        <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                        <Typography variant="body1">{body}</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

DisplayScream.propTypes = {
    classes : PropTypes.object.isRequired,
    scram:PropTypes.object.isRequired
}
export default withStyles(styles)(DisplayScream);
//export default DisplayScream;


