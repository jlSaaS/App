import lists from '../../assets/lists'
// 
// const defaultState = () => {
//   return {
//
//   }
// }

class Exam { // eslint-disable-line
  constructor (newExamData) {
    this.id = uuid()
    this.client = newExamData.clientId
    this.createdBy = newExamData.createdBy
    this.createdDate = new Date()
    this.state = newExamData.state
    this.documents = newExamData.docs
    this.noticeDate = ''
    this.examStartDate = ''
    this.periodStartDate = ''
    this.periodEndDate = ''
    this.assignedTo = ''
    this.examiners = []
    this.examParts = []
    this.status = ''
    this.statusDate = new Date()
  }
}

class ExamPart { // eslint-disable-line
  constructor (newPartData) {
    this.id = uuid()
    this.examId = newPartData.examId
    this.title = newPartData.title
    this.sequence = newPartData.sequence
    this.dueDate = newPartData.dueDate
    this.questions = []
    this.status = ''
    this.statusDate = new Date()
  }
}

class ExamQuestion { // eslint-disable-line
  constructor (newQuestionData) {
    this.id = uuid()
    this.label = newQuestionData.label
    this.sequence = newQuestionData.sequence
    this.level = newQuestionData.level
    this.question = newQuestionData.question
    this.response = []
    this.status = ''
    this.statusDate = new Date()
  }
}

class ExamResponse { // eslint-disable-line
  constructor (modifiedById) {
    this.id = uuid()
    this.responseText = ''
    this.responseTF = null
    this.responseMultiple = []
    this.responseAttachments = []
    this.modifiedDate = new Date()
    this.modifiedBy = modifiedById
  }
}

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8) // eslint-disable-line
    return v.toString(16)
  })
}

export default {
  state: () => ({
    exams: [],
    currentExam: {},
    examStatuses: lists.examStatuses,
    states: lists.states
  }),
  getters: {},
  mutations: {
    SET_EXAMS(state, payload) {
      state.exams = payload
    },
    ADD_EXAM(state, payload) {
      state.exams.push(payload)
    },
    ADD_EXAM_PART(state, payload) {
      state.exams[state.exams.indexOf(exam => exam.id === payload.examId)].examParts.push(payload)
    },
    SET_CURRENT_EXAM(state, payload) {
      state.currentExam = payload
    }
  },
  actions: {
    saveExams({ commit }, data) {
      commit('SET_EXAMS', data)
    },
    saveCurrentExam({ commit }, data) {
      commit('SET_CURRENT_EXAM', data)
    },
    createNewExam({ commit }, data) {
      const temp = new Exam(data)
      console.log(temp)
      commit('ADD_EXAM', temp)
    },
    createNewExamPart({ commit }, data) {
      const temp = new ExamPart(data)
      commit('ADD_EXAM_PART', temp)
    }
  }
}
