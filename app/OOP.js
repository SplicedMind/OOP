module.exports = {
 
Human: function(name = 'John Doe', sex = 'not stated', age = 0, nationality = 0) {
  this.sex = sex;
  this.name = name;
  this.nationality = nationality;
  this.age = age;
  this.color= (nationality === 'Nigerian' || nationality === 'Kenyan') ? 'Black' : 'White';
  this.language = (nationality === 'Nigerian') ? 'Yoruba' : 'English';
  this.voice = (sex === 'male' || sex === 'female') ? 'Lovely' : 'Horrible';
  this.apperance = (sex === 'female') ? 'Lovely' : 'Handsome';
  this.speak = function() {
   if (this.language === 'Yoruba')
   {
    this.speak = 'Omo yoruba ni mi, oruko mi si ni ' + this.name ;
   }
   else
   {
      this.speak = 'Am proud of my heritage';
   }
    
    var human = Object.assign(new Human(), this);
    return human;
  }
}

}
