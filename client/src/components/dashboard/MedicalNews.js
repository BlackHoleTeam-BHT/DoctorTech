import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {MedicalNewsAPI} from '../../store/action/API'
import Grid from '@material-ui/core/Grid';
import ScrollDialog from './view/Dialog'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
   
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    width: 60,
    height: 60,
  },  gridList: {
    width: '80%',
    
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    console.log(this.props)

    return (
       <div className={classes.root}>
       <GridList cellHeight={500} className={classes.gridList} cols={3}>   
       
{    this.props.Articles.map((value,key)=>{
        return (
       
        <GridListTile key={key} >
        <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {value.title[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={value.title}
          subheader={value.publishedAt.slice(0,10)}
        />
        <CardMedia
          className={classes.media}
          image={value.urlToImage}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
                {value.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <span style={{marginLeft: 'auto'}}>
          <ScrollDialog  link={value.url} content={value.content.slice(0,(value.content.length-14))}></ScrollDialog>
          </span>
        
        </CardActions>
      </Card> 
      </GridListTile>
       
      
        
      )})}
      </GridList> 
      </div>
      
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
        Articles: state.API.article,     
    }
  }
  
  //Note: add the action to the props
  const mapDispatchToProps = (dispatch) => {
    return {
        MedicalNewsAPI: () => dispatch(MedicalNewsAPI())
    }
  }

export default compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(RecipeReviewCard);





//1de56e7232b74585b19b44db1c2e6d18
//https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=API_KEY
//API : https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=1de56e7232b74585b19b44db1c2e6d18