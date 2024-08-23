const quizData = require("./data");

const theme = "Вампиры и веселые факты";
const question = "Какой напиток вампиры предпочитают?";

class Model {
static points = 100;
static userName = "";

  static getThemes() {
    const themes = [];
    for (let theme in quizData) {
      themes.push(quizData[theme].themeName);
    }
    themes.push("...выпустите, пожалуйста(");
    return themes;
  }

  static getQuestions(answer) {
    const questions = [];
    for (let theme in quizData) {
      if (quizData[theme].themeName === answer) {
        return quizData[theme].questions.reduce((acc, el) => {
          acc.push(el.question);
          return acc;
        }, []);
      }
    }
  }

  static getAnswers(question) {
    for (let theme in quizData) {
      for (let quest in quizData[theme]) {
        for (let thisQuest of quizData[theme][quest]) {
          if (thisQuest instanceof Object && thisQuest.question === question) {
            return [thisQuest.answers, thisQuest["right answer"]];
          }
        }
      }
    }
  }
}

module.exports = Model;
