import { Component, OnInit } from '@angular/core';
// Assurez-vous d'importer votre service d'inscription si nécessaire
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // Définir les propriétés pour les données de formulaire
  registerUserData = { username: '', email: '', password: '' };
  loginUserData = { username: '', password: '' };

  // Cette propriété contrôle quel formulaire est visible
  isLoginMode = true;

  // Injection du service d'inscription
  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {}

  // Bascule entre l'affichage des formulaires d'inscription et de connexion
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // Méthode pour gérer l'inscription
  onRegister() {
    // Ici, vous appellerez votre service pour envoyer les données d'inscription
    this.registrationService.registerUser(this.registerUserData).subscribe(
      response => {
        console.log('Registration successful', response);
        // Vous pourriez vouloir faire autre chose ici, comme la redirection
      },
      error => {
        console.error('Error during registration', error);
      }
    );
  }

  // Méthode pour gérer la connexion
  onLogin() {
    // Ici, vous appellerez votre service pour envoyer les données de connexion
    this.registrationService.loginUser(this.loginUserData).subscribe(
      response => {
        console.log('Login successful', response);
        // Vous pourriez vouloir faire autre chose ici, comme la redirection
      },
      error => {
        console.error('Error during login', error);
      }
    );
  }
}
