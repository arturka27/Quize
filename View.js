const inquire = require('inquirer');
const Model = require('./Model');

class View {
  static async showThemes() {
    try {
      const themes = Model.getThemes();
      const answers = await inquire.default.prompt({
        type: 'list',
        name: 'selectedTheme',
        message: 'выберите тему',
        choices: themes,
      });
      console.log('твоя тема:', answers.selectedTheme, '\n');
      return answers.selectedTheme;
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  static async showQuestions(theme) {
    try {
      const questions = Model.getQuestions(theme);
      const answers = await inquire.default.prompt({
        type: 'list',
        name: 'selectedQuestion',
        message: 'выберите вопрос:',
        choices: questions,
      });
      console.log('твой вопрос:', answers.selectedQuestion, '\n');
      return answers.selectedQuestion;
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  static async showAnswers(answer) {
    try {
      const answers = Model.getAnswers(answer);
      const choices = await inquire.default.prompt({
        type: 'list',
        name: 'selectedAnswer',
        message: 'выберите ответ:',
        choices: answers[0],
        right: answer[1],
      });
      console.log('твой ответ:', choices.selectedAnswer);

      if (choices.selectedAnswer === answers[1]) {
        console.log('правильно, красава!\n');
      } else {
        console.log('я знаю,ты можешь лучше\n');
      }
      if (answers.selectedTheme === '...выпустите, пожалуйста(') {
        return;
      }
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

module.exports = View;
