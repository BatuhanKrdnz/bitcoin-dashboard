// export const getBitcoinPrice = async () => {
//     try {
//         const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)

//         return await res.json();
//     } catch (e) {
//         console.error(e)
//     }
// }

import React from "react";
import {
    Card,
    Dimmer,
    Loader,
    Select
  } from 'semantic-ui-react';
  
const Bitcoin = ({loading, priceData, currency, setCurrency}) => {

    const options = [
        { value: 'USD', text: 'USD' },
        { value: 'EUR', text: 'EUR' },
        { value: 'GBP', text: 'GPB' }
      ];
      const handleSelect = (e, data) => {
        setCurrency(data.value);
      }

    return(
    <div className="container">
        <div className="nav" style={{marginTop: 60, padding: 30, backgroundColor: 'darkcyan'}}>
            Coindesk API Data
        </div>
        {loading ? (
                <div>
                    <Dimmer active inverted>
                    <Loader>loading</Loader>
                    </Dimmer>
                </div>
            ) : (
                <>
                    <div className="priceContainer" 
                    style={{display: "flex", 
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: 600,
                    height: 300,
                    margin: "0 auto"
                    }}>
                        <div className="form">
                            <Select placeholder= "Select your currency" onChange={handleSelect} options={options}></Select>
                        </div>
                    </div>
                </>
            )
        }
    </div>
    )
    
}   


export default Bitcoin;