const brazil = ['São Paulo', 'Rio de Janeiro', 'Minas Gerias'];

const place = brazil.map(name => `I love ${name} !`);

console.log(place);

const placeFilt = brazil
                        .filter(name => name === 'São Paulo')
                        .map(name => `I love ${name}!`);

console.log(placeFilt);



const sandwich = {
    bread: 'white',
    cheese: 'cheddar',

    prepare: function(){
        return `I want a sandwich with ${this.bread} bread and cheese ${this.cheese}`
    },

    make: function(){
      //var that = this;
      window.setTimeout(() => {
        console.log( this.prepare );
      }, 500);
    }

};

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){ sandwich.make() });



