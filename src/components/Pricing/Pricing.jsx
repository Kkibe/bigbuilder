import React from 'react'
import './Pricing.scss';

export default function Pricing() {

    const pricings = [
        {
            id: "1",
            plan: "Starter",
            title: "For beginner Who Want To Test",
            price: 0,
            features: [
                "CV builder","Canvas drawer","No contractors limit","Voice over",
            ],
            color: "#7288a2",
        },
        {
            id: "2",
            plan: "Platinum",
            title: "All features in starter plan +",
            price: 16,
            features: [
                "Meme Generator","Resume builder", "No contractors limit", "Photo editor",
            ],
            color: "#1f4568",
        }
    
    ]
  return (
    <div className='pricing' id='pricing'>
        <h1>Pricing</h1>
        <h2>What fits your business the best?</h2>
        <div className="wrapper"> 
        {
            pricings.map(pricing =>{
                return (
                    <div>
                        <h1>{pricing.plan}</h1>
                        <p>{pricing.title}</p>
                        <h2>${pricing.price}/mo</h2>
                        <h3>Features</h3>
                        <ul>
                          {
                            pricing.features.map(feature => {
                                return <li>{feature}</li>
                            })
                          }
                        </ul>
                        <a className="btn" style={{backgroundColor: pricing.color}}>Start now</a>
                    </div>
                );
            })
        }  
      
      </div>
    </div>
  )
}
