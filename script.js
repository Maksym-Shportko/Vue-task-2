Vue.component('blocks',{
    props:['block'],
    template:`
          <div class="h-25 d-inline-block">           
              <h4>{{block.title}}</h4>
              <h6>{{block.blockInfo}}</h6>
              <img v-bind:src="block.blockimage" class="float-left"/>
          </div>
          
    `,
    data:function(){
      return{
      }
    }    
    ,
    methods: {

    }
})



new Vue({
    el: "#app",
    data: {
      showBigblock:'',
      blocks: [
        {
          title:"Title of the post",
          blockInfo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum!",
          blockimage:"https://images.unsplash.com/photo-1579033835392-22eb83e321ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
        },
        {
          title:"Title of the post",
          blockInfo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum!",
          blockimage:"https://images.unsplash.com/photo-1583542224916-15a3809d7f0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

        },
        {
          title:"Title of the post",
          blockInfo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum!",
          blockimage:"https://images.unsplash.com/photo-1583265802723-12c8c19954bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1106&q=80"

        },
        {
          title:"Title of the post",
          blockInfo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum!",
          blockimage:"https://images.unsplash.com/photo-1581229553406-94cfeaaf3c5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"

        }
      ],
    },
    methods: {
      showBig:function(block){
        this.showBigblock=block
        console.log('hu')
      }
  }
})  
