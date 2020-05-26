
const { db } = require('../util/admin');

exports.postuserdata = (request, response) => {
    debugger;
    console.log( "passing parameter"+request.body);
    if(!request.body) {
        return response.status(400).json({ title: 'Must not be empty' });
    }
    console.log(request.body);   
 const data=request.body;
    const newTodoItem = {
        aadhar_number:data.aadhar_number,
      applicant_name:data.applicant_name,
     "social_category":data.social_category,    
      gender: data.gender,
      handicapped:data.handicapped,
      business_name: data.business_name,
      oraganisation_type: data.oraganisation_type,
      pan_number : data.pan_number,
      pl_address: {
        "building" : data.pl_address.building,
        "flat_no":data.pl_address.flat_no,
        "road":data.pl_address.road,
        area:data.pl_address.area,
        city:data.pl_address.city,
        pin:data.pl_address.pin
      }
      ,
      pl__district:data.pl__district,
      pl_state: data.pl_state,
      bothsameaddress: data.bothsameaddress,
      bs_address : {
        "building" : data.bs_address.building,
        "flat_no":data.bs_address.flat_no,
        "road":data.bs_address.road,
        area:data.bs_address.area,
        city:data.bs_address.city,
        pin:data.bs_address.pin
      },
      bs_state: data.bs_state,
      bs_district: data.bs_district,
      mobile : data.mobile,
      email: data.email,
      commecment_date: data.commecment_date,
      ban_acc_num : data.ban_acc_num,
      Bank_ifsc: data.Bank_ifsc,
      business_activity: data.business_activity,
      nic_code: data.nic_code,
      additionaldetail: data.additionaldetail,
      no_of_employee : data.no_of_employee,
      investment: data.investment,
      aadharimageaddress: data.aadharimageaddress,
      createdAt: new Date().toISOString()
    }
    console.log(newTodoItem);
    db.collection('Users').add(newTodoItem).then((doc)=>{
            const responseTodoItem = newTodoItem;
            responseTodoItem.id = doc.id;
            return response.json(responseTodoItem);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};
