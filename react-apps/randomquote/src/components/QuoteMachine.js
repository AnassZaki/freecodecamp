import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <div>
    <Card color="red">
      <CardContent>
        <Typography id="text">
          <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon> {selectedQuote.quote} <br/>
        </Typography>
        <span id="author">-{selectedQuote.author}</span>
      </CardContent>
      <CardActions>
        <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>New Quote</Button>
        <IconButton
          id="tweet-quote"
          target="_blank"
          href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=${selectedQuote.author}`)}
        >
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </IconButton>
      </CardActions>
    </Card>
    <footer id="footer">
    <IconButton
    id="fbpost-quote"
    target="_blank"
    href='https://www.facebook.com/AnassZzzz'
  >
    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
  </IconButton>
  <IconButton
    id="github"
    target="_blank"
    href='https://github.com/AnassZaki'
  >
    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></IconButton>
    <p id="credit">Made by AnassZaki inspired by webdevcoach.</p>
    </footer>
</div>
);

export default QuoteMachine