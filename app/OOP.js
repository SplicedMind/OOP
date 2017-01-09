module.exports = {
 
Human: function(name = 'John Doe', sex = 'not stated', age = 0, nationality = 0) {
   //Universal properties of a human
  this.sex = sex;
  this.name = name;
  this.nationality = nationality;
  this.age = age;
  //Properties of a human that depends on some universal property values
  this.color= (nationality === 'Nigerian' || nationality === 'Kenyan') ? 'Black' : 'White';
  this.language = (nationality === 'Nigerian') ? 'Yoruba' : 'English';
  this.voice = (sex === 'male' || sex === 'female') ? 'Lovely' : 'Horrible';
  this.apperance = (sex === 'female') ? 'Pretty' : 'Handsome';
  //General ability of a human
  this.speak = function() {
   if (this.language === 'Yoruba')
   {
    return 'Omo yoruba ni mi, oruko mi si ni ' + this.name ;
   }
   else
   {
      return 'Am proud of my heritage';
   }
    
    var human = Object.assign(new Human(), this);
    return human;
  }
}

}
