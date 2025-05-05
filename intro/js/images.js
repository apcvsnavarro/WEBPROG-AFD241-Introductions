const app2 = Vue.createApp({
  data() {
   return {
     manyFoods: [
       {name: 'Burrito', url: 'https://www.facebook.com/photo/?fbid=10212654587958967&set=a.1257640060465'},
       {name: 'Salad', url: 'https://www.facebook.com/photo/?fbid=10210668016775929&set=a.1257640060465'},
       {name: 'Cake', url: 'https://www.facebook.com/photo/?fbid=10209838739004503&set=a.1257640060465'},
       {name: 'Soup', url: 'https://www.w3schools.com/vue/img_soup.svg'},
       {name: 'Fish', url: 'https://www.w3schools.com/vue/img_fish.svg'},
       {name: 'Pizza', url: 'https://www.w3schools.com/vue/img_pizza.svg'},
       {name: 'Rice', url: 'https://www.w3schools.com/vue/img_rice.svg'}
     ]
   }
  }
 })
 app2.mount('#app2')
