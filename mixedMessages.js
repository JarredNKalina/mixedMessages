function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}
  //make joke object and hold possible data within
  const jokeContents = {
      animal: ['cow', 'horse', 'dog', 'pig'],
      obstacle: ['house', 'bar', 'hospital'],
      punchLine: ['ouch', 'ow', 'oof', 'ouchie']
  };

  //store joke in array. initialize as empty first
  let randomJoke = [];

  //customize random message by choosing random items of 
  //the object property arrays
  for(let prop in jokeContents){
      let optionIdx = generateRandomNumber(jokeContents[prop].length)

      switch(prop){
          case 'animal':
              randomJoke.push(`A ${jokeContents[prop][optionIdx]} walks into a ` );
              break;
          case 'obstacle':
              randomJoke.push(`${jokeContents[prop][optionIdx]} `);
              break;
          case 'punchLine':
              randomJoke.push(`and says '${jokeContents[prop][optionIdx]}'`);
              break;
           default:
               randomJoke.push('I have no good jokes today.');
      }
    }
//Change formatting of joke here if needed
function formatJoke(joke){
const formattedJoke = randomJoke.join('');
console.log(formattedJoke)
}
formatJoke(randomJoke);