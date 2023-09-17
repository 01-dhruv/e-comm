import React from 'react'
import './Shipping.css'

const Shipping = () => {
  return (
    <div>
<main>
  <div className="wrapper">
  <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-4 ml-10 text-center'>Enter Shipping Details</h1>
    <form>
      <div>
        <label for="name">Name</label>
        <input required type="text" id="name" name="name" autocomplete="name" enterkeyhint="next"/>
      </div>
      <div>
        <label for="street-address">Street address</label>
        <input type="text" id="street-address" name="street-address" autocomplete="street-address" required enterkeyhint="next"></input>
      
      </div>
      <div>
        <label for="postal-code">ZIP or postal code</label>
        <input className="postal-code" id="postal-code" name="postal-code" autocomplete="postal-code" enterkeyhint="next"/>
      </div>
      <div>
        <label for="city">City</label>
        <input required type="text" id="city" name="city" autocomplete="address-level2" enterkeyhint="next"/>
      </div>
      <div>
        <label for="country">Country or region</label>
        <select id="country" name="country" autocomplete="country" enterkeyhint="done" required>
            <option></option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Åland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="BJ">Benin</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="FR">France</option>
            <option value="GI">Gibraltar</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="NC">New Caledonia</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn Islands</option>
            <option value="PL">Poland</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
        </select> 
      </div>

      <div>
        <label for="phone-number">Phone Number</label>
        <input className="phone-number" id="phone-number" name="phone-number" autocomplete="" enterkeyhint="next"/>
      </div>

      <button type="submit" className="button mb-10">Submit</button>
    </form>
  </div>
</main>


    </div>
  )
}

export default Shipping