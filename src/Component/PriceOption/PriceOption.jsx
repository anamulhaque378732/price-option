 import Prices from "../Prices/Prices";

const PriceOption = () => {


    
        const priceOption = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio and weightlifting equipment",
              "Locker room access",
              "Open 7 days a week",
              "Personal training available (additional cost)",
              "Dedicated fitness assessment"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "All features of Basic Membership",
              "Access to group fitness classes (yoga, spin, etc.)",
              "Sauna and steam room access",
              "Discounts on personal training sessions",
              "Nutritional consultation included",
              "Free guest passes (limited monthly)"
            ]
          },
          {
            "id": 3,
            "name": "VIP Membership",
            "price": 99.99,
            "features": [
              "All features of Premium Membership",
              "Unlimited access to all fitness classes",
              "Priority access to equipment and facilities",
              "Complimentary towel service",
              "Access to exclusive VIP lounge",
              "Monthly spa treatment"
            ]
          }
        ]
    
      
    return (
        <div className=" m-12">
         <h3 className="text-5xl mb-10">Best prices in the town</h3> 
      <div className="grid grid-cols-1   md:grid-cols-3 gap-4">
      {  
          priceOption.map( option => <Prices  key= {option.id} option ={option}></Prices>)
            
        }
      </div>


        </div>
    );
};

export default PriceOption;