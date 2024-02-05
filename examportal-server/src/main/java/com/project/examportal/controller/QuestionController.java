package com.project.examportal.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.examportal.entity.exam.Question;
import com.project.examportal.entity.exam.Quiz;
import com.project.examportal.service.QuestionService;
import com.project.examportal.service.QuizService;


@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

	@Autowired
	private QuestionService questionService;

	
	@Autowired
	private QuizService quizService;
	
	// add question
	@PostMapping("/")
	public ResponseEntity<Question> addQuestion(@RequestBody Question question) {

		Question question1 = this.questionService.addQuestion(question);

		return ResponseEntity.ok(question1);
	}

	// update question
	@PutMapping("/")
	public ResponseEntity<?> updateQuestion(@RequestBody Question question) {

		Question question2 = this.questionService.updateQuestion(question);

		return ResponseEntity.ok(question2);
	}

	// get one question 
	@GetMapping("/{quesId}")
	public Question getQuestion(@PathVariable("quesId") Long quesId) {

		return this.questionService.getQuestion(quesId);
	}

	// get all question of any quiz
	@GetMapping("/quiz/{quizId}")
	public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("quizId") Long quizId) {
		
//		Quiz quiz = new Quiz();
//		quiz.setQuizId(quizId);
//		
//		Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);		
//		return ResponseEntity.ok(questionsOfQuiz);
	
		Quiz quiz = this.quizService.getQuiz(quizId);
		
		Set<Question> questions = quiz.getQuestions();
	
		List list =new ArrayList(questions);
		if(list.size() > Integer.parseInt(quiz.getNumberOfQuestions())) {
			list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions()+1));
		}
		Collections.shuffle(list);
		return ResponseEntity.ok(list);		
	}

	//delete question
	@DeleteMapping("{quesId}")
	public void deleteQuestion(@PathVariable("quesId") Long quesId) {
		this.questionService.deleteQuestion(quesId);
	}
	

}
