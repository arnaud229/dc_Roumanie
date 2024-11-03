import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-singnin',
  templateUrl: './singnin.component.html',
  styleUrls: ['./singnin.component.scss']
})
export class SingninComponent {

  loading = false;
  userform!: FormGroup;
  log_erreur = false;
  erreur_message = '';
  accepter_rappelle = false;
  binding = "";

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    // private utilsService: UtilsService,
    // private alertController: AbortController,
  ) {

    this.init_form();
  }

  ngOnInit() {
    this.init_form();
  }


 


  init_form(){
    this.userform = this.formbuilder.group({
      //  telephone: ['',[Validators.required,Validators.pattern(/[0-9]+/)]],
      mail: ['', [Validators.required, Validators.pattern(/.{4,}@/)]],
      mdp: [
        '',
        [
          Validators.required,
          Validators.pattern(/[A-Z]+/),
          Validators.pattern(/[0-9]+/),
          Validators.pattern(/[@|$|µ]+/),
          Validators.minLength(8),
        ],
      ],
    });
  } 

  async change_password() {

    console.log("toto");
    console.log("userform", this.userform.value);
    
    if (this.userform.controls['mail'].value !== '') {
      
      this.authService.resetPassword(this.userform.controls['mail'].value);
      this.erreur_message = 'connexion avec succès';

    } else {
      this.erreur_message =
        'Veuillez entrer votre email avant d’appuyer sur `’’ Mot de passe oublier ‘’';

       

        console.log("a corriger");


      this.log_erreur = true;
    }
  }

  ferme_erreur() {
    this.log_erreur = !this.log_erreur;
  }


  connected() {
    console.log('parfait', this.userform.value);

    this.loading = true;

   this.authService
     .signInWithFirebase( this.userform.value)
     .then(async (res) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
         if (res.user) {
          console.log('res :>> ', res);
          console.log('res :>> ', res.user.uid );
      this.loading = false;
      console.log('succès sucès');
      this.router.navigate(['dashboardUser'])   ;
          
         }
          
    

    })

  }



}


