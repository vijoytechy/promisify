import { AuthService } from './../../shared/auth.service';
import { VersestoreService } from './../../shared/versestore.service';
import { Component, OnInit } from '@angular/core';
import { verses } from '../../../assets/data/versesdb';
import { PromiseVerse } from 'src/app/models/promise-verse.model';

@Component({
  selector: 'app-promise-verse',
  templateUrl: './promise-verse.component.html',
  styleUrls: ['./promise-verse.component.css']
})
export class PromiseVerseComponent implements OnInit {

  constructor(private versestorserivce: VersestoreService, private authservice: AuthService,
  ) { }
  uname: string = '';
  uverse: any = '';
  error: any = '';
  userpromise: PromiseVerse = new PromiseVerse();
  UserPromises!: PromiseVerse[];
  AllData!: PromiseVerse[];
  ngOnInit(): void {

    let s = this.versestorserivce.getAll();
    s.snapshotChanges().subscribe(data => {
      this.AllData = [];
      data.forEach(item => {
        let a = item.payload.toJSON();

        this.AllData.push(a as PromiseVerse);
      })
      this.checkUserData();
    })



  }
  getVerse() {
    let verse = verses[Math.floor(Math.random() * verses.length)];
    this.uverse = verse;
  }
  getName(name: any) {
    if (!name) {
      this.error = 'Please Enter your Name !'
      this.uverse = '';
    }
    else {
      this.uname = name;
      this.error = '';
      this.getVerse();
      this.userpromise = {
        verse: this.uverse.body,
        ref: this.uverse.ref,
        username: this.uname,
        loggeduser: this.authservice.currentUser,
        generated: Date.now().toString(),
      }


      this.saveUserPromise();
      this.ngOnInit();
    }
  }

  saveUserPromise(): void {
    this.versestorserivce.create(this.userpromise).then(() => {
      console.log('Created new item successfully!');

    });
  }


  checkUserData() {

    let user_data = [];
    for (let i = 0; i < this.AllData.length; i++) {
      if (this.AllData[i].loggeduser === this.authservice.currentUser) {

        user_data.push(this.AllData[i]);

      }
      this.UserPromises = user_data;
    }


  }

}
