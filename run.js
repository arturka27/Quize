const Model = require('./Model');
const View = require('./View');

const welcome = 'Добро пожаловать на викторину «Глупости или гениальные вопросы?»!';

class Run {
  static async start() {
    try {
      do {
        const selectedTheme = await View.showThemes();
        const selectedQuestion = await View.showQuestions(selectedTheme);
        await View.showAnswers(selectedQuestion);
      } while (true);
    } catch (error) {
      console.log('\n...пака');
      console.log(`ты заработал ${Model.points} очков :)`)
    }
  }

}



console.log(welcome ,'\n', `кол-во поинтов: ${Model.points}`, '\n\n');
Run.start();
module.exports = Run;
