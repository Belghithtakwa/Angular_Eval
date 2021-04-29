import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Utilisateur } from './utilisateur';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  formulaire: FormGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.maxLength(64)]],
    prenom: ['', [Validators.required, Validators.maxLength(64)]],
    email: ['', [Validators.email, Validators.required]],
    age: ['', [Validators.required, Validators.min(10), Validators.max(65)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  get nom() {
    return this.formulaire.get('nom');
  }
  get prenom() {
    return this.formulaire.get('prenom');
  }
  get age() {
    return this.formulaire.get('age');
  }
  get email() {
    return this.formulaire.get('email');
  }

  onSubmit(): void {
    this.formulaire.markAllAsTouched();
    if (this.formulaire.valid) {
      this.utilisateurs.push({ ...this.formulaire.value });
    }
  }
}
