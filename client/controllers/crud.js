Template.home.events({
	'submit form':function(e){
		e.preventDefault();
		var First_Name=e.target.First_Name.value;//get value from
		var Last_Name=e.target.Last_Name.value;//get value from
		var Date=e.target.Date.value;
		var Gender=e.target.Gender.value; 
		var obj={
			First_Name:First_Name,
			Last_Name:Last_Name,
			Date:Date,
			Gender:Gender
		}
		if(this._id){
			//update data
			Meteor.call('update',this._id,obj);
			Router.go('/');
		}else{
			//insert data
			Meteor.call('insertCrud',obj);
		}
		e.target.First_Name.value="";//clear form
		e.target.Last_Name.value="";//clear form
		e.target.Date.value="";
		e.target.Gender.value="";
	},
	'click #remove':function(e){
		e.preventDefault();
		var result=confirm('Do you want to delete?');
		if(result){
			crud.remove(this._id);
		}
		
		
	}
})
Template.home.helpers({
	getData:function(){
		return crud.find();
	},
	updateTitle:function(){
		if(this._id){
			return true;
		}else{
			return false;
		}
	}
})