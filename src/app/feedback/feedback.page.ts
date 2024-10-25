import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {
  rating: number = 0;
  feedbackText: string = '';
  successMessage: string = '';

  constructor(private firestore: AngularFirestore) {}

  setRating(star: number) {
    this.rating = star;
  }

  async submitFeedback() {
    if (this.rating === 0 || !this.feedbackText) {
      console.log('Please fill in all fields');
      return;
    }

    const feedbackData = {
      rating: this.rating,
      feedback: this.feedbackText,
      createdAt: new Date(), // Optional: timestamp
    };

    try {
      await this.firestore.collection('feedbacks').add(feedbackData);
      this.successMessage = 'Thank you for your feedback!';
      
      // Reset form fields
      this.rating = 0;
      this.feedbackText = '';
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  }
}
