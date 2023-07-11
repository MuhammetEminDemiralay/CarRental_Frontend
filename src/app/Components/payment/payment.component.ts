import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreditCard } from 'src/app/Models/creditCard';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';
import { CreditcardService } from 'src/app/Services/creditcard.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  
  constructor(private formBuilder : FormBuilder, private authService : AuthService, private creditCardService : CreditcardService){}

  ngOnInit(): void {
    this.createCreditCardForms();
    this.getCardsByUserId(); 
  }

  creditCardForms : FormGroup;
  saveCards : CreditCard[] = [];

  createCreditCardForms(){
    this.creditCardForms = this.formBuilder.group({
      cardNumber : ["", Validators.required],
      dateMonth : ["", Validators.required],
      dateYear : ["", Validators.required],
      nameOnTheCard : ["", Validators.required],
      cvv : ["", Validators.required]
    })   
  }

  saveCreditCard(){
    let cardModel = Object.assign({}, this.creditCardForms.value);
    let model = <CreditCard>{
      userId : this.authService.user.userId,
      cardNumber : cardModel.cardNumber,
      dateMonth : cardModel.dateMonth,
      dateYear : cardModel.dateYear,
      nameOnTheCard : cardModel.nameOnTheCard,
      cvv : cardModel.cvv
    } 
        
    this.creditCardService.addCard(model).subscribe(response => {
      console.log(response.message);
    })
  }


 getCardsByUserId(){
  this.creditCardService.getCarsByUserId(5).subscribe(response =>{
    this.saveCards = response.data;    
  })
 }




}
