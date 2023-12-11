import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/Models/creditCard';
import { Payment } from 'src/app/Models/payment';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';
import { CreditcardService } from 'src/app/Services/creditcard.service';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  
  constructor(private toastrService : ToastrService, 
              private activatedRoute : ActivatedRoute, 
              private formBuilder : FormBuilder, 
              private authService : AuthService, 
              private creditCardService : CreditcardService, 
              private paymentService : PaymentService){}

  ngOnInit(): void {
    this.createCreditCardForms();
    this.authService.getUser();
    this.getCardsByUserId();
    this.activatedRoute.params.subscribe(params => {this.price = params["price"]})
    
  }

  creditCardForms : FormGroup;
  saveCards : CreditCard[] = [];
  currentCard : CreditCard;
  cardId : number;
  price : number;

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

      let anyCard = this.saveCards.filter((card) => card.cardNumber === model.cardNumber)
      if(anyCard.length === 0){
        this.creditCardService.addCard(model).subscribe(response => {
          this.toastrService.success("Card saved","Success");
          this.getCardsByUserId();
        })                
      }
      else{
        this.toastrService.info("the card is already registered","İnfo")
      }  

  }

 getCardsByUserId(){
  this.creditCardService.getCardByUserId(this.authService.userId).subscribe(response =>{
    this.saveCards = response.data;    
  })
 }

 getCardInfo(e : any){
  this.cardId = e.target.value;
  this.currentCard = this.saveCards.filter(p => p.id == e.target.value)[0]
  this.creditCardForms.patchValue(this.currentCard);
 }

 payAdd(){
  let model = <Payment>{
    userId : this.authService.user.userId,
    creditCardId : this.cardId,
    totalAmount : this.price
  }
  if(model.creditCardId == null){
    this.toastrService.error("Enter a valid credit card", "Error");
  }else{
    this.paymentService.addPay(model).subscribe(response => {
      console.log(response.message);
      this.toastrService.success("Payment Completed")
    })
  }


 }

}
