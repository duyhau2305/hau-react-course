// components
import Typography from '../components/Typography';
import Avatar from '../components/Avatar';

function ComposeComponent() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  const text = comment.text;

  return (
    <div>
      <Avatar url={comment.author.avatarUrl} /> 

      <Typography 
        content={text}
      />
       <Typography 
        content={comment.author.name}
      />
       <Typography 
        content={comment.date.toString()}
      />

    </div>
  )
}

export default ComposeComponent