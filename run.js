const View = require('./View');

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
    }
  }
}
Run.start();
module.exports = Run;
